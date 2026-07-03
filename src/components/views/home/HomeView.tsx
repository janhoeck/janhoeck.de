import { SectionsScroller } from '@/components/ui'
import React from 'react'

import { BackgroundFx } from './components/BackgroundFx'
import { HeaderSection } from './sections/header'
import { AboutMeSection } from './sections/aboutMe'
import { SkillsSection } from './sections/skills'
import { TimelineSection } from './sections/timeline'
import { ReferenceSection } from './sections/references'
import { ContactSection } from './sections/contact'

export const HomeView = () => {
  return (
    <>
      <BackgroundFx />
      <SectionsScroller>
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <TimelineSection />
        <ReferenceSection />
        <ContactSection />
      </SectionsScroller>
    </>
  )
}
