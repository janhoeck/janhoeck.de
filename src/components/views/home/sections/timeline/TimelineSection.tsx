import { Section, SectionCaption, Timeline } from '@/components/ui'
import React from 'react'

import { CustomTimelineItem, type CustomTimelineItemProps } from './CustomTimelineItem'
import { revealProps } from '../../components/reveal'

const ENTRIES: CustomTimelineItemProps[] = [
  {
    timePeriod: 'Juli 2012 – Juli 2014',
    organization: 'Carl-Reuther-Berufskolleg Hennef',
    jobTitle: 'Fachabitur im Bereich Informatik',
  },
  {
    timePeriod: 'Aug 2014 – Feb 2016',
    organization: 'FLOWFACT GmbH',
    organizationSub: '(ImmobilienScout24)',
    jobTitle: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
  },
  {
    timePeriod: 'Feb 2016 – Jan 2019',
    organization: 'FLOWFACT GmbH',
    organizationSub: '(ImmobilienScout24)',
    jobTitle: 'Frontend React Entwickler',
    tasks: ['Entwicklung von Microservices mit Java', 'Frontendentwicklung mit React'],
  },
  {
    timePeriod: 'Jan 2019 – Juli 2022',
    organization: 'FLOWFACT GmbH',
    organizationSub: '(ImmobilienScout24)',
    jobTitle: 'Senior Frontend React Entwickler',
    tasks: [
      'Verantwortlich für Frontend-Team & Onboarding neuer Kollegen',
      'Entwicklung mit React 17 (Hooks, Context etc.)',
      'Aufbau eines Monorepository für über 50.000 Kunden',
    ],
  },
  {
    timePeriod: 'Juli 2022 – heute',
    organization: 'DeepL SE',
    jobTitle: 'Senior Frontend React Entwickler',
    tasks: [
      'Kernentwickler von DeepL Write: zentrale Features von der Beta bis zum Launch (Schreibstile & Tonalitäten, Revision Mode, LLM-basierte Content-Erstellung)',
      'Migration des Frontends von Gatsby (Static Rendering) zu Next.js mit Full SSR, inkl. Performance-Messung und -Optimierung',
      'Refactoring der gesamten Codebase für Performance und Skalierbarkeit, Aufbau einer modularen Paket-Architektur',
      'Echtzeit-Übersetzungen im DeepL Translator mit RxJS und WebSockets',
      'Enge teamübergreifende Zusammenarbeit mit Produkt, Design und Backend',
    ],
  },
]

export const TimelineSection = () => {
  return (
    <Section sectionKey='cv' label='Werdegang' align='start'>
      <SectionCaption index='03' eyebrow='2012 — heute' count='5 Stationen'>
        Werdegang
      </SectionCaption>

      <div {...revealProps(1)}>
        <Timeline>
          {ENTRIES.map((entry) => (
            <CustomTimelineItem key={entry.timePeriod} {...entry} />
          ))}
        </Timeline>
      </div>
    </Section>
  )
}
