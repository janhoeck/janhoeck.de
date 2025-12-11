import React from 'react'
import { H1 } from '@/components/ui'
import { cn } from '@/lib/utils'

export interface SectionCaptionProps {
  className?: string
  children: string
}

export const SectionCaption = (props: SectionCaptionProps) => {
  const { children, className } = props

  return (
    <div className={cn('text-center uppercase', className)}>
      <H1>{children}</H1>
    </div>
  )
}
