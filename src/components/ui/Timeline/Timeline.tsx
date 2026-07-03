import React from 'react'
import { cn } from '@/lib/utils'

import { TimelineLine } from './TimelineLine'

export interface TimelineProps {
  className?: string
  children: React.ReactNode
}

/** Vertical timeline: a spine line with TimelineItem entries hanging off it. */
export const Timeline = (props: TimelineProps) => {
  const { className, children } = props
  return (
    <div className={cn('relative pl-[30px]', className)}>
      <TimelineLine />
      {children}
    </div>
  )
}
