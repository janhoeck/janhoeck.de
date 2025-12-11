import { SectionsScroller } from '@/components/ui'
import { AboutMeSection } from './sections/aboutMe'
import { HeaderSection } from './sections/header'
import React from 'react'
import { ReferenceSection } from './sections/references'
import { TimelineSection } from './sections/timeline'

export const HomeView = () => {
  return (
    <SectionsScroller>
      <HeaderSection />
      <AboutMeSection />
      <TimelineSection />
      <ReferenceSection />
    </SectionsScroller>
  )
}
