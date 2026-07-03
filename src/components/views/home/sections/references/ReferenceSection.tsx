import { Section, SectionCaption } from '@/components/ui'
import React from 'react'

import { ReferenceCard } from './components/references/ReferenceCard'
import { referencesConfig } from './referencesConfig'

export const ReferenceSection = () => {
  return (
    <Section sectionKey='refs' label='Referenzen' align='start'>
      <SectionCaption index='04' eyebrow='Ausgewählte Arbeiten' count='4 Projekte'>
        Referenzen
      </SectionCaption>

      <div className='grid grid-cols-1 gap-[22px] sm:grid-cols-2 xl:grid-cols-4'>
        {referencesConfig.map((reference, index) => (
          <ReferenceCard
            key={reference.title}
            revealIndex={index + 1}
            {...reference}
          />
        ))}
      </div>
    </Section>
  )
}
