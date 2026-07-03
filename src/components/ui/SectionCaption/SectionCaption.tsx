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
        'mb-[clamp(28px,5vh,56px)] flex items-baseline gap-[18px] border-b border-line pb-[18px]',
        className
      )}
    >
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className='m-0 font-display text-[clamp(32px,5vw,60px)] font-extrabold uppercase leading-[0.95] tracking-[-0.01em]'>
        {children}
      </h2>
      {count && (
        <span className='ml-auto font-mono text-xs tracking-[0.1em] text-content-faint'>{count}</span>
      )}
    </div>
  )
}
