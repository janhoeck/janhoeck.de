'use client'

import { SectionsScrollerContextProvider, SectionType, useSectionsScrollerContext } from '@/components/ui'
import React, { Children, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { SectionIndicator } from './SectionIndicator'
import { SectionsScrollerItem } from './SectionsScrollerItem'

export interface SectionsScrollerProps {
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

const SectionsScrollerInternal = (props: SectionsScrollerProps) => {
  const { children, className } = props
  const { sectionsCount, activeSectionIndex, setActiveSectionKey } = useSectionsScrollerContext()

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
    setActiveSectionKey(section.key)

    // Reset animation flag after transition completes
    setTimeout(() => {
      isAnimating.current = false
    }, 700)
  }

  return (
    <div className={twMerge('relative h-full w-full overflow-hidden', className)}>
      <div
        className='h-full transition-transform duration-700 ease-in-out'
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
