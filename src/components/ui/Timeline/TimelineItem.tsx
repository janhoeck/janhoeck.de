import React from 'react'
import { cn } from '@/lib/utils'

import { TimelineDot } from './TimelineDot'
import { TimelineCard } from './TimelineCard'

export interface TimelineItemProps {
  /** Date range shown above the card, e.g. "Juli 2022 – heute". */
  when: string
  className?: string
  children: React.ReactNode
}

/** A single timeline entry: dot marker, date label, and a card with the content. */
export const TimelineItem = (props: TimelineItemProps) => {
  const { when, className, children } = props
  return (
    <div className={cn('relative pb-[clamp(12px,1.8vh,22px)] last:pb-0', className)}>
      <TimelineDot />
      <div className='mb-1.25 font-mono text-2xs uppercase tracking-caps text-brand'>{when}</div>
      <TimelineCard>{children}</TimelineCard>
    </div>
  )
}
