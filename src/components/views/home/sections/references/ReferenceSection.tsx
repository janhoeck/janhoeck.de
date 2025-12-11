import { Section, SectionCaption } from '@/components/ui'
import React from 'react'

import {
  AdventscalendarReference,
  HookahAwardsReference,
  SlotReference,
  SolymarmenorReference,
  WorkingTimeReference,
} from './components/references/specific'

export const ReferenceSection = () => {
  return (
    <Section sectionKey='reference'>
      <SectionCaption>Referenzen</SectionCaption>
      <div className='mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:mt-12 lg:grid-cols-3 xl:mt-14 xl:gap-10'>
        <SolymarmenorReference />
        <HookahAwardsReference />
        <AdventscalendarReference />
        <SlotReference />
        <WorkingTimeReference />
      </div>
    </Section>
  )
}
