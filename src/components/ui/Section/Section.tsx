'use client'

import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { useSectionScrollerRegistration } from '../SectionsScroller/useSectionScrollerRegistration'

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
      className={twMerge(
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
