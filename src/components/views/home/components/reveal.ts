import type { CSSProperties } from 'react'

/**
 * Props for a scroll-reveal element. Spread onto any node inside a Section:
 * it tags the node with `data-reveal` and sets the stagger index `--i`.
 * The actual transition lives in index.css, gated by the active section.
 */
export const revealProps = (index = 0): { 'data-reveal': ''; style: CSSProperties } => ({
  'data-reveal': '',
  style: { '--i': index } as CSSProperties,
})
