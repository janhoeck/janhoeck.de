'use client'

import { Section, SectionCaption, Timeline } from '@/components/ui'
import React from 'react'

import { CustomTimelineItem } from './CustomTimelineItem'

export const TimelineSection = () => {
  return (
    <Section sectionKey='timeline'>
      <SectionCaption>Lebenslauf</SectionCaption>
      <div className='mt-8 p-0 text-indigo-100 sm:mt-10 sm:p-2 md:mt-12 md:p-4 xl:mt-14 xl:p-6'>
        <Timeline>
          <CustomTimelineItem
            timePeriod='Juli 2012 - Juli 2014'
            jobTitle='Fachabitur im Bereich Informatik'
            organization='Carl-Reuther-Berufskolleg Hennef'
          />
          <CustomTimelineItem
            timePeriod='August 2014 - Februar 2016'
            jobTitle='Ausbildung zum Fachinformatiker für Anwendungsentwicklung'
            organization='FLOWFACT GmbH (ImmobilienScout24)'
          />
          <CustomTimelineItem
            timePeriod='Februar 2016 - Januar 2019'
            jobTitle='Frontend React Entwickler'
            organization='FLOWFACT GmbH (ImmobilienScout24)'
            tasks={['Entwicklung von Microservices mit Java', 'Frontendentwicklung mit React']}
          />
          <CustomTimelineItem
            timePeriod='Januar 2019 - Juli 2022'
            jobTitle='Frontend Senior React Entwickler'
            organization='FLOWFACT GmbH (ImmobilienScout24)'
            tasks={[
              'Verantwortlich für das Frontend Team',
              'Verantwortlich für das Onboarding neuer Kollegen',
              'Entwicklung mit React 17 (Hooks, Context etc.)',
              'Aufbau eines Monorepository ausgelegt auf weit über 50.000 Kunden',
              'Sicherstellung der Frontend Wartbarkeit durch kleine, logikgetrennte Componenten',
              'Vieles mehr...',
            ]}
          />
          <CustomTimelineItem
            timePeriod='Juli 2022 - Jetzt'
            jobTitle='Frontend Senior React Entwickler'
            organization='DeepL SE'
            tasks={[
              'Verantwortlich für das Produkt DeepL Write',
              'Software basierend auf NextJS (SSR)',
              'Entwicklung mit React 19+ (Hooks, Context etc.)',
            ]}
          />
        </Timeline>
      </div>
    </Section>
  )
}
