'use client'

import {
  findSectionIndex,
  SectionsScrollerContextProvider,
  SectionType,
  useSectionsScrollerContext,
} from '@/components/ui'
import React, { Children, useRef } from 'react'

import { SectionIndicator } from './SectionIndicator'
import { SectionsScrollerItem } from './SectionsScrollerItem'
import { cn } from '@/lib/utils'

export interface SectionsScrollerProps {
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

const SectionsScrollerInternal = (props: SectionsScrollerProps) => {
  const { children, className } = props
  const { sections, sectionsCount, activeSectionIndex, changeSection } = useSectionsScrollerContext()

  const lastSwitchTime = useRef<number>(0)
  const isAnimating = useRef<boolean>(false)

  const handleSectionChange = (section: SectionType) => {
    const now = Date.now()

    // Prevent changes while animating
    if (isAnimating.current) {
      return
    }

    // Cooldown to prevent double/triple skips
    if (now - lastSwitchTime.current < 800) {
      return
    }

    lastSwitchTime.current = now
    isAnimating.current = true

    const sectionIndex = findSectionIndex(sections, section.key)
    changeSection(sectionIndex)

    // Reset animation flag after transition completes
    setTimeout(() => {
      isAnimating.current = false
    }, 700)
  }

  return (
    <div className={cn('relative h-full', className)}>
      <div
        className='transition-transform duration-700 ease-in-out'
        style={{
          transform: `translate3d(0, -${activeSectionIndex * 100}vh, 0)`,
        }}
      >
        {Children.map(children, (child, index) => (
          <SectionsScrollerItem
            key={index}
            sectionIndex={index}
            sectionsCount={sectionsCount}
            onSectionChange={handleSectionChange}
          >
            {React.cloneElement(child)}
          </SectionsScrollerItem>
        ))}
      </div>
      <div className='pointer-events-none absolute right-6 top-1/2 -translate-y-1/2'>
        <div className='pointer-events-auto'>
          <SectionIndicator />
        </div>
      </div>
    </div>
  )
}

export const SectionsScroller = (props: SectionsScrollerProps) => (
  <SectionsScrollerContextProvider>
    <SectionsScrollerInternal {...props} />
  </SectionsScrollerContextProvider>
)
