# design-sync notes — janhoeck.de

This repo is a **Next.js 16 app** (not a published component package) synced to
claude.ai/design as a design system (project "Jan Höck Website"). Several things
are wired specially — read this before re-syncing.

## Architecture / how the build is wired

- **Shape:** `package`, synth-entry mode — no built `dist/`, so the converter
  synthesizes an entry from `src/components/` (`cfg.srcDir`). Component discovery
  is the PascalCase-export scan over those files.
- **Self-package junction:** the converter resolves the package at
  `node_modules/<pkg>`, which doesn't exist for an in-repo DS. `build-css.mjs`
  creates a junction `node_modules/jan_hoeck → repo root` so PKG_DIR resolves.
  esbuild realpaths it, so imports still converge on the real `src/` files.
- **`cfg.tsconfig` → `.design-sync/tsconfig.bundle.json`**: esbuild paths plugin.
  Resolves `@/*`, pins the barrel `@/components/ui → src/components/ui/index.ts`
  (the plugin's `''`-ext check otherwise resolves the directory and esbuild
  errors), and swaps Next-only modules for static shims:
  `next/image` → `<img>` (supports `fill`, string/static-import src),
  `next/link` → `<a>` (forwardRef, for `<Button asChild><Link/>`),
  `next/font/google` → defensive shim.
- **CSS is precompiled.** `src/app/index.css` is Tailwind v4 source; design-sync
  copies `cfg.cssEntry` verbatim (no CSS compiler). `cfg.buildCmd`
  (`node .design-sync/build-css.mjs`) compiles it to `.design-sync/compiled.css`
  (gitignored), scanning `src/` **plus a `@source inline(...)` safelist** of
  common layout/spacing/color utilities (rendered designs get only this finite
  stylesheet — no on-demand Tailwind), and prepends the Barlow webfont.
- **`.d.ts` contracts.** Synth mode ships no `.d.ts`, so `build-css.mjs` also runs
  `tsc -p .design-sync/tsconfig.dts.json` → `dist/types` (gitignored), which
  `findTypesRoot` picks up. Components whose props are inline anonymous types
  (Button, Card + parts, Typography, Socials, the no-prop views) have no named
  `<Name>Props`, so their bodies are hand-written in `cfg.dtsPropsFor`.
- **Dark-only theme.** Tokens live in `:root` (light) / `.dark` (dark). `DarkRoot`
  (exported from `.design-sync/ds-extras.tsx`, merged via `cfg.extraEntries`, set
  as `cfg.provider`) wraps every preview in a `.dark` brand surface + Barlow.
- **Grouping.** `.design-sync/overrides/source-kit.mjs` (a declared
  `cfg.libOverrides` fork) records the src file of each synth-derived component so
  `@category` JSDoc groups resolve even for secondary exports of multi-export
  files (Card parts in card.tsx, the Typography scale in Typography.tsx). It
  imports ts-morph, so `build-css.mjs` also junctions
  `.design-sync/node_modules → .ds-sync/node_modules`. Groups themselves come from
  one-line `@category` JSDoc added to 8 `src/components/**` files.
- **Brand assets.** Components reference `/assets/...` (public paths). Those are
  copied into the bundle (`cp -r public/assets ds-bundle/assets`) and uploaded as
  `assets/**` so they resolve in cards and in designs the agent builds.

## Component scope

- User chose **"Everything"** (incl. the page-level `views/*` compositions, which
  take no props and auto-render their real content).
- 36 components carded. Pruned from the card list (still in the bundle): the
  SectionsScroller context plumbing (`cfg.componentSrcMap` nulls).
- **H1–H4 are importable (`window.JanHoeck.H1`…) but NOT carded** — `isComponentName`
  treats `H1` as a SCREAMING_CASE constant. Decision (user): leave importable +
  documented in the conventions header rather than fork `dts.mjs`.

## Known render warns (all triaged legitimate — not new)

- `[FONT_REMOTE]` "Cambria" — the Barlow Google-Fonts `@import` in compiled.css.
- Floor cards (2): **SectionsScroller**, **SectionsScrollerItem** — full-page
  scroll-snapping mechanics that can't render meaningfully as static cards.
  Deliberate baseline; documented in the conventions header. (SectionIndicator
  renders an empty indicator rail without scroller context — also expected.)

## Re-sync risks (what can silently go stale)

- **`build-css.mjs` (cfg.buildCmd) must run before the converter** — it creates
  both junctions, compiles the CSS, and emits `dist/types`. On a fresh clone none
  of those exist; the driver runs buildCmd first. If running `package-build.mjs`
  by hand, run `node .design-sync/build-css.mjs` first.
- **Assets are NOT auto-copied by the driver.** After the driver/package-build
  (which wipes `ds-bundle/`), run `cp -r public/assets ds-bundle/assets` BEFORE
  validate/capture/upload, or `/assets/*` images (MeImage, the sections,
  ReferenceCard) render broken and don't ship.
- **Local dev server has no `.svg` MIME** (`storybook/http-serve.mjs`), so SVG
  `/assets/*` paths show broken in the *local* capture only. Skill/Skills previews
  sidestep this with **data-URI `.svg` imports**; the uploaded app serves SVG fine.
  If a new logo-based preview shows broken locally, import the SVG (don't pass the
  `/assets` string).
- **Barlow loads from Google Fonts** (remote `@import`); offline renders fall back
  to system sans.
- **CSS safelist is finite.** If the design agent needs a utility not in
  `compiled.css`, extend the safelist in `build-css.mjs` (or it uses inline styles).
- **Forks tied to upstream:** `.design-sync/overrides/source-kit.mjs` is forked
  from the bundled `lib/source-kit.mjs` — on a skill update, diff and re-merge.
- If Tailwind/Next majors bump, re-verify `compiled.css` still carries the
  utilities (grep `.bg-primary`, `.inline-flex`) and the `.d.ts` still extracts.

## Re-sync command sequence

```sh
# 1. re-stage scripts (instant); 2. buildCmd makes junctions + css + dist/types
cp -r "<skill>/"{package-build,package-validate,package-capture,resync}.mjs "<skill>/lib" "<skill>/storybook" .ds-sync/
node .design-sync/build-css.mjs
# 3. fetch the project's anchor, run the driver
DesignSync(get_file _ds_sync.json) > .design-sync/.cache/remote-sync.json
node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json
cp -r public/assets ds-bundle/assets    # <-- before upload
# 4. upload per the skill §5
```
