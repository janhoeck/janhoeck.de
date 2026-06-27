// Extra exports merged into the bundle via cfg.extraEntries. Not a component
// card — it's the preview/provider wrapper.
//
// The janhoeck.de site renders dark-only (`<body class="...dark">`). The design
// tokens live as CSS custom properties scoped to `:root` (light) and `.dark`
// (dark) in the compiled stylesheet, so a component shows its real, on-brand
// colors only inside a `.dark` ancestor. DarkRoot is wired as cfg.provider so
// every preview card (and every design the agent builds) renders on the actual
// dark surface in the brand font.
import React from 'react'

export function DarkRoot({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="dark"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: "'Barlow', ui-sans-serif, system-ui, sans-serif",
        minHeight: '100%',
        padding: 24,
        borderRadius: 12,
      }}
    >
      {children}
    </div>
  )
}
