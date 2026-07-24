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
    tasks: ['Microservices mit Java gebaut', 'Frontend mit React entwickelt'],
  },
  {
    timePeriod: 'Jan 2019 – Juli 2022',
    organization: 'FLOWFACT GmbH',
    organizationSub: '(ImmobilienScout24)',
    jobTitle: 'Senior Frontend React Entwickler',
    tasks: [
      'Das Frontend-Team verantwortet und neue Kollegen eingearbeitet',
      'Mit React 17 entwickelt – Hooks, Context und Co.',
      'Ein Monorepository für über 50.000 Kunden aufgebaut',
    ],
  },
  {
    timePeriod: 'Juli 2022 – heute',
    organization: 'DeepL SE',
    jobTitle: 'Senior Frontend React Entwickler',
    tasks: [
      'Als einer der Kernentwickler DeepL Write von der Beta bis zum Launch begleitet und zentrale Features gebaut: Schreibstile & Tonalitäten, Revision Mode, LLM-basierte Content-Erstellung',
      'Das Frontend von Gatsby (Static Rendering) auf Next.js mit Full SSR umgezogen – die Performance dabei gemessen und optimiert',
      'Die gesamte Codebase auf Performance und Skalierbarkeit getrimmt und eine modulare Paket-Architektur aufgebaut',
      'Echtzeit-Übersetzungen im DeepL Translator umgesetzt – mit RxJS und WebSockets',
      'Eng mit Produkt, Design und Backend zusammengearbeitet – auch über Teamgrenzen hinweg',
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
