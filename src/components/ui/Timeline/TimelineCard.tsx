import React from 'react'
import { cn } from '@/lib/utils'

import { Card } from '../card'

export interface TimelineCardProps {
  className?: string
  children: React.ReactNode
}

/** Studio-styled timeline entry card (built on the shadcn Card primitive). */
export const TimelineCard = (props: TimelineCardProps) => {
  const { className, children } = props
  return (
    <Card
      className={cn(
        'gap-0 rounded-xl px-5 py-3.5 shadow-none transition-[transform,border-color] duration-200 ease-studio hover:translate-x-1 hover:border-line-strong',
        className
      )}
    >
      {children}
    </Card>
  )
}
