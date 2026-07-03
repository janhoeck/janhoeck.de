'use client'

import React, { forwardRef } from 'react'

import { useSectionScrollerRegistration } from '../SectionsScroller/useSectionScrollerRegistration'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  sectionKey: string
  /** Short label shown next to this section's nav dot. */
  label?: string
  as?: 'section' | 'header' | 'article'
  /** Vertical alignment of the section content. Tall sections use `start`. */
  align?: 'center' | 'start'
  /** Classes applied to the centered inner container. */
  innerClassName?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {
    children,
    className,
    sectionKey,
    label,
    as: Tag = 'section',
    align = 'center',
    innerClassName,
    ...restProps
  } = props

  useSectionScrollerRegistration({ key: sectionKey, label })

  return (
    <Tag
      className={cn(
        'relative isolate flex min-h-[100dvh] w-screen flex-col px-[clamp(24px,6vw,96px)] pb-24 pt-[92px]',
        align === 'center' ? 'justify-center' : 'justify-start',
        className
      )}
      ref={ref as React.Ref<HTMLElement>}
      {...restProps}
    >
      <div className={cn('mx-auto w-full max-w-[1180px]', innerClassName)}>{children}</div>
    </Tag>
  )
})

Section.displayName = 'Section'
