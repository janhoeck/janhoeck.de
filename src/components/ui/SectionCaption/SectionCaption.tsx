import React from 'react'
import { twMerge } from 'tailwind-merge'
import { H1 } from '@/components/ui'

export interface SectionCaptionProps {
  className?: string
  children: string
}

export const SectionCaption = (props: SectionCaptionProps) => {
  const { children, className } = props

  return (
    <div className={twMerge('text-center uppercase', className)}>
      <H1>{children}</H1>
    </div>
  )
}
