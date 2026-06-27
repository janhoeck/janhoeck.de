# Jan Höck Website — Design System

A **dark-only**, Tailwind-based (shadcn/ui-style) component library. Import components from the bundle (`window.JanHoeck.*`) and arrange them with the Tailwind utility classes below.

## 1. Wrap every screen in dark mode

The whole site renders dark. Design tokens are CSS variables scoped to `:root` (light) and `.dark` (dark) — **without a `.dark` ancestor, components render in the wrong (light) palette.** Wrap your page root:

```jsx
<div className="dark" style={{ background: 'var(--background)', color: 'var(--foreground)', fontFamily: "'Barlow', sans-serif", minHeight: '100vh' }}>
  {/* your screen */}
</div>
```

Brand font is **Barlow** (shipped via the stylesheet). Brand accent is a warm terracotta (`--primary`).

## 2. Styling idiom — Tailwind utilities + component props

Two ways to style, both idiomatic here:

- **Component props** carry the design language where they exist — e.g. `<Button variant="outline" size="lg">`.
- **Tailwind utilities** for layout and your own elements. Always use the **semantic color tokens**, never raw hex — they adapt to the theme:

| Role | Utilities |
|---|---|
| Surfaces | `bg-background` (page), `bg-card`, `bg-popover`, `bg-muted`, `bg-accent` |
| Text | `text-foreground` (default), `text-muted-foreground` (secondary), `text-primary` |
| Brand / actions | `bg-primary text-primary-foreground`, `bg-secondary`, `bg-destructive` |
| Borders / radius | `border border-border`, `rounded-md`, `rounded-xl` |
| Layout | `flex` / `grid`, `gap-*`, `p-*`, `items-center`, `justify-between`, `max-w-*`, `mx-auto` |

A common layout/spacing/color palette ships in the stylesheet. If a utility isn't styled (the set is finite), use an inline `style` for that bit of glue.

## 3. Where the truth lives

- **Stylesheet**: `styles.css` → `_ds_bundle.css` (tokens + component CSS). Read it for exact token values.
- **Per component**: `<Name>.d.ts` (props) and `<Name>.prompt.md` (usage), in each component's folder.

## 4. Components

- **Actions** — `Button` (`variant`: default/secondary/destructive/outline/ghost/link; `size`: default/sm/lg/icon). `asChild` renders a link styled as a button.
- **Cards** — `Card` + `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction`.
- **Typography** — headings `H1`–`H4` (importable as `window.JanHoeck.H1`… — they render styled `<h1>`–`<h4>` but have no preview card), plus `Lead`, `P`, `Large`, `Small`, `Muted`, `InlineCode`, `MultilineCode`, `List`, `Quote`. All accept standard HTML attributes + `className`.
- **Layout** — `Section` (full-viewport section container; requires a `sectionKey`), `SectionCaption` (large centered uppercase heading), `SectionsScroller` (full-page scroll-snapping container that wraps `Section` children — the page-scroll mechanism).
- **Skills** — `Skills` (auto-fit grid) of `Skill` tiles (`imageSrc`, `tooltip`).
- **Timeline** — `Timeline` wrapping `CustomTimelineItem` (`organization`, `jobTitle`, `timePeriod`, `tasks?`) — sides alternate automatically. `TimelineItem` / `TimelineCard` are the lower-level parts.
- **References** — `ReferenceCard` (`title`, `description`, `imageSrc`, `githubUrl?`, `livePreviewUrl?`).
- **Brand bits** — `Socials` (GitHub + mail buttons), `MeImage` (portrait).

## 5. Idiomatic build snippet

```jsx
<div className="dark" style={{ background: 'var(--background)', fontFamily: "'Barlow', sans-serif" }}>
  <div className="mx-auto max-w-2xl flex flex-col gap-6 p-8">
    <SectionCaption>Referenzen</SectionCaption>
    <div className="grid grid-cols-2 gap-6">
      <ReferenceCard
        title="CastCrafter Server"
        description="Community-Plattform mit Login und Live-Statistiken."
        imageSrc="/assets/references/castcrafter.png"
        livePreviewUrl="https://server.castcrafter.de"
      />
    </div>
    <Button variant="outline">Mehr erfahren</Button>
  </div>
</div>
```
