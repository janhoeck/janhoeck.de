import { Section, SectionCaption } from '@/components/ui'
import React from 'react'

import { ReferenceCard } from './components/references/ReferenceCard'
import { referencesConfig } from './referencesConfig'

export const ReferenceSection = () => {
  return (
    <Section sectionKey='reference'>
      <SectionCaption>Referenzen</SectionCaption>
      <div className='mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:mt-12 lg:grid-cols-3 xl:mt-14 xl:gap-10'>
        {referencesConfig.map((reference) => (
          <ReferenceCard
            key={reference.title}
            {...reference}
          />
        ))}
      </div>
    </Section>
  )
}
