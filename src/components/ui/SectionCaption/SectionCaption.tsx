import React from 'react'
import { cn } from '@/lib/utils'

import { Eyebrow } from '../Eyebrow'

export interface SectionCaptionProps {
  /** Numeric prefix shown in the eyebrow, e.g. "01". */
  index: string
  /** Eyebrow text, e.g. "Über mich". */
  eyebrow: string
  /** Optional right-aligned mono caption, e.g. "5 Stationen". */
  count?: string
  className?: string
  /** The display title. */
  children: React.ReactNode
}

/** Baseline-aligned section header: eyebrow + display title + optional count, with a hairline rule. */
export const SectionCaption = (props: SectionCaptionProps) => {
  const { index, eyebrow, count, className, children } = props
  return (
    <div
      data-reveal=''
      className={cn(
        'mb-[clamp(28px,5vh,56px)] flex items-baseline gap-4.5 border-b border-line pb-4.5',
        className
      )}
    >
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className='font-display text-display-md uppercase'>{children}</h2>
      {count && (
        <span className='ml-auto font-mono text-xs tracking-caps text-content-faint'>{count}</span>
      )}
    </div>
  )
}
