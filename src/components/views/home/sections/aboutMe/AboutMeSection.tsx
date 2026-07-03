import { Section, SectionCaption } from '@/components/ui'
import React from 'react'

import { MeImage } from './components/MeImage'
import { revealProps } from '../../components/reveal'

const STATS = [
  { n: '10+', l: 'Jahre Code' },
  { n: '5+', l: 'Jahre React' },
  { n: '50k+', l: 'Nutzer skaliert' },
]

export const AboutMeSection = () => {
  return (
    <Section sectionKey='about' label='Über mich' align='start'>
      <SectionCaption index='01' eyebrow='Über mich'>
        Wer bin ich?
      </SectionCaption>

      <div className='grid grid-cols-[300px_1fr] items-start gap-[clamp(36px,6vw,80px)] max-tablet:grid-cols-1'>
        <div {...revealProps(1)} className='max-tablet:max-w-55'>
          <MeImage />
        </div>

        <div className='[&_strong]:font-semibold [&_strong]:text-content'>
          <p
            {...revealProps(2)}
            className='mb-4.5 max-w-copy text-lead text-content'
          >
            Seit meinem 14. Lebensjahr entwickle ich Software — vom selbst beigebrachten Java im
            Kinderzimmer bis zum Senior Frontend Entwickler.
          </p>
          <p
            {...revealProps(3)}
            className='mb-4.5 max-w-copy text-body text-content-dim'
          >
            Während meiner Ausbildung bin ich mit <strong>ReactJS</strong> in Berührung gekommen. Vom
            Backend zum Frontend! Seit gut fünf Jahren spezialisiere ich mich auf dieses Framework. Mein
            Fokus liegt dabei auf <strong>Web Performance, Best Practices und Design Standards</strong>.
          </p>
          <p
            {...revealProps(4)}
            className='mb-4.5 max-w-copy text-body text-content-dim'
          >
            Als Senior achte ich stets auf die <strong>Skalierbarkeit und Wartbarkeit</strong> des Codes.
            Gute Software entsteht erst durch die Kombination starker Menschen, klarer Lösungsansätze und
            einem gewissen Freiraum.
          </p>

          <div {...revealProps(5)} className='mt-7.5 flex flex-wrap gap-9.5'>
            {STATS.map((stat) => (
              <div key={stat.l}>
                <div className='font-display text-display-sm text-brand'>
                  {stat.n}
                </div>
                <div className='mt-2 font-mono text-2xs uppercase tracking-caps text-content-faint'>
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
