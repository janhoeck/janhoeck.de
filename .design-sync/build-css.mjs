// Pre-build step (cfg.buildCmd): compile the Tailwind v4 source stylesheet
// (src/app/index.css) into a STATIC stylesheet that design-sync can ship.
//
// design-sync copies cfg.cssEntry verbatim into _ds_bundle.css — it does NOT
// run a CSS compiler — so the entry must already be plain CSS. src/app/index.css
// is Tailwind source (`@import 'tailwindcss'`, `@theme`, `@apply`), which a
// browser can't process, so we compile it here with the repo's own installed
// Tailwind, scanning src/ for the utility classes the components use, and
// prepend the Barlow webfont the site loads via next/font.
import postcss from '@tailwindcss/postcss'
import postcssrunner from 'postcss'
import { readFileSync, writeFileSync, mkdirSync, symlinkSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'

const root = process.cwd()

// design-sync resolves the package at node_modules/<pkg>, but this DS lives in
// its own repo (npm won't self-install jan_hoeck). Expose the repo there via a
// junction so PKG_DIR resolves and synth-from-src discovery works. esbuild
// realpaths it, so every import still converges on the real src/ files (no
// duplicate module identity). Gitignored + wiped by `npm install`, so recreate
// it here — build-css.mjs is cfg.buildCmd, run before the converter every time.
const selfLink = resolve(root, 'node_modules/jan_hoeck')
if (!existsSync(selfLink)) {
  try {
    symlinkSync(root, selfLink, 'junction')
    console.error(`build-css: created self-package junction node_modules/jan_hoeck`)
  } catch (e) {
    console.error(`build-css: could not create node_modules/jan_hoeck junction — ${e.message}`)
  }
}

// The .design-sync/overrides/source-kit.mjs fork imports ts-morph (a converter
// dep). Node resolves it from .design-sync/node_modules, so link that to the
// staged converter deps. Gitignored; recreate every run.
const forkDeps = resolve(root, '.design-sync/node_modules')
if (!existsSync(forkDeps)) {
  try {
    symlinkSync(resolve(root, '.ds-sync/node_modules'), forkDeps, 'junction')
    console.error(`build-css: created fork-deps junction .design-sync/node_modules`)
  } catch (e) {
    console.error(`build-css: could not create .design-sync/node_modules junction — ${e.message}`)
  }
}
const indexCssPath = resolve(root, 'src/app/index.css')
const outPath = resolve(root, '.design-sync/compiled.css')

const indexCss = readFileSync(indexCssPath, 'utf8')

// Force a deterministic content scan of src/ regardless of cwd/auto-detection.
const srcGlob = resolve(root, 'src').replace(/\\/g, '/')

// Rendered designs receive only this stylesheet (no on-demand Tailwind), and a
// scan of src/ only emits utilities the components already use. Safelist a
// common layout/spacing/color palette so the design agent can build layouts
// around the components with standard Tailwind classes.
const COLORS = [
  'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground',
  'primary', 'primary-foreground', 'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
  'accent', 'accent-foreground', 'destructive', 'border', 'input', 'ring',
]
const SPACE = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24]
const safelist = [
  ...COLORS.flatMap((c) => [`bg-${c}`, `text-${c}`, `border-${c}`]),
  ...SPACE.flatMap((n) => [`p-${n}`, `px-${n}`, `py-${n}`, `pt-${n}`, `pb-${n}`, `pl-${n}`, `pr-${n}`,
    `m-${n}`, `mx-${n}`, `my-${n}`, `mt-${n}`, `mb-${n}`, `gap-${n}`, `gap-x-${n}`, `gap-y-${n}`]),
  'flex', 'inline-flex', 'grid', 'block', 'inline-block', 'hidden', 'flex-row', 'flex-col', 'flex-wrap',
  'items-start', 'items-center', 'items-end', 'justify-start', 'justify-center', 'justify-end', 'justify-between',
  'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'col-span-2', 'w-full', 'w-auto', 'h-full',
  'min-h-screen', 'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'mx-auto',
  'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
  'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'text-left', 'text-center', 'text-right',
  'uppercase', 'italic', 'leading-tight', 'leading-normal', 'leading-relaxed', 'tracking-tight', 'tracking-wide',
  'rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full',
  'border', 'border-2', 'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl',
  'overflow-hidden', 'relative', 'absolute', 'opacity-50', 'opacity-70',
].join(' ')

const sourceLines = `@source "${srcGlob}";\n@source inline("${safelist}");`
const input = indexCss.includes('@source')
  ? indexCss
  : indexCss.replace(/(@import\s+['"]tailwindcss['"];)/, `$1\n${sourceLines}`)

const result = await postcssrunner([postcss()]).process(input, {
  from: indexCssPath,
  to: outPath,
})

// The brand font is applied globally on the site via next/font (Barlow). Ship it
// as a webfont @import so previews and designs render in the real typeface.
const barlow =
  "@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');\n"

mkdirSync(resolve(root, '.design-sync'), { recursive: true })
writeFileSync(outPath, barlow + result.css)
console.error(`build-css: wrote ${outPath}`)

// Emit a .d.ts tree from source → design-sync reads dist/types via findTypesRoot
// and extracts real prop contracts (synth-from-src mode ships no .d.ts).
try {
  execFileSync(
    process.execPath,
    [resolve(root, 'node_modules/typescript/bin/tsc'), '-p', resolve(root, '.design-sync/tsconfig.dts.json')],
    { stdio: 'ignore' }
  )
  console.error('build-css: emitted dist/types/**/*.d.ts')
} catch {
  // tsc exits non-zero on type diagnostics but still emits the .d.ts — non-fatal.
  console.error('build-css: emitted dist/types/**/*.d.ts (tsc reported diagnostics)')
}
