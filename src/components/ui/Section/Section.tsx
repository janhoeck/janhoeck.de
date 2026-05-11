'use client'

import React, { forwardRef } from 'react'

import { useSectionScrollerRegistration } from '../SectionsScroller/useSectionScrollerRegistration'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  sectionKey: string
  as?: 'section' | 'header' | 'article'
}

export const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { children, className, sectionKey, as: Tag = 'section', ...restProps } = props

  useSectionScrollerRegistration({ key: sectionKey })

  return (
    <Tag
      className={cn(
        'relative flex min-h-svh w-dvw justify-center overflow-hidden py-4 pl-8 pr-10 container mx-auto',
        className
      )}
      ref={ref as React.Ref<HTMLElement>}
      {...restProps}
    >
      <div className='w-dvw max-w-[1440px]'>{children}</div>
    </Tag>
  )
})

Section.displayName = 'Section'
