'use client'

import React, { forwardRef } from 'react'

import { useSectionScrollerRegistration } from '../SectionsScroller/useSectionScrollerRegistration'
import { cn } from '@/lib/utils'

export interface SectionProps {
  className?: string
  children: React.ReactElement | React.ReactElement[]
  sectionKey: string
}

export const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const { children, className, sectionKey, ...restProps } = props

  useSectionScrollerRegistration({ key: sectionKey })

  return (
    <div
      className={cn(
        'relative flex min-h-dvh w-dvw justify-center overflow-hidden py-4 pl-8 pr-10 container mx-auto',
        className
      )}
      ref={ref}
      {...restProps}
    >
      <div className='w-dvw max-w-[1440px]'>{children}</div>
    </div>
  )
})

Section.displayName = 'Section'
