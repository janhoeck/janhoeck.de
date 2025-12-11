import React from 'react'
import { Card } from '@/components/ui'
import { cn } from '@/lib/utils'

export type TimelineCardProps = {
  children: React.ReactNode | React.ReactNode[]
  alignment?: 'left' | 'right'
}

export const TimelineCard = (props: TimelineCardProps) => {
  const { children, alignment } = props
  return (
    <Card
      className={cn([
        'mb-4 ml-4 mt-1 grow',
        alignment === 'right' ? 'sm:ml-4' : '',
        alignment === 'left' ? 'sm:ml-0 sm:mr-4' : '',
      ])}
    >
      {children}
    </Card>
  )
}
