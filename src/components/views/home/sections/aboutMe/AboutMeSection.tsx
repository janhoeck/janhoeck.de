import { Section, SectionCaption } from '@/components/ui'
import React from 'react'

import { MeImage } from './components/MeImage'
import { revealProps } from '../../components/reveal'

const STATS = [
  { n: '16+', l: 'Jahre Code' },
  { n: '10+', l: 'Jahre React' },
  { n: '200k+', l: 'Nutzer skaliert' },
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
            Mit 14 habe ich in meinem Kinderzimmer angefangen zu programmieren – weil zwei Freunden
            und mir unser Minecraft-Server zu langweilig geworden ist.
          </p>
          <p
            {...revealProps(3)}
            className='mb-4.5 max-w-copy text-body text-content-dim'
          >
            Also haben wir eigene Plugins geschrieben und den Server nach unseren Vorstellungen
            umgebaut. Den Spielern hat gefallen, was wir gebaut haben – der Server wuchs so schnell,
            dass wir irgendwann einen Sponsor hatten und <strong>Gronkh & Sarazar</strong> bei uns
            einen Livestream gemacht haben. Spätestens da war mir klar: Das will ich beruflich machen.
          </p>
          <p
            {...revealProps(4)}
            className='mb-4.5 max-w-copy text-body text-content-dim'
          >
            Mit 18 habe ich meine Ausbildung zum{' '}
            <strong>Fachinformatiker für Anwendungsentwicklung</strong> begonnen. Trotzdem habe ich
            dort erst einmal alle Bereiche des Unternehmens kennengelernt – rückblickend Gold wert,
            um zu verstehen, wie alles ineinandergreift. In der Entwicklung habe ich zuerst viel
            Backend gemacht, dann bin ich in die Webentwicklung reingerutscht – und bei{' '}
            <strong>ReactJS</strong> bis heute geblieben. Noch während der Ausbildung war ich für
            unsere gesamte Webanwendung verantwortlich, danach habe ich als{' '}
            <strong>technischer Frontend-Lead</strong> ein Team von 10 Entwicklern begleitet.
          </p>
          <p
            {...revealProps(5)}
            className='mb-4.5 max-w-copy text-body text-content-dim'
          >
            Nach sieben Jahren wollte ich noch einmal etwas Neues und bin zu <strong>DeepL</strong>{' '}
            gewechselt. Hier entwickle ich für über <strong>200.000 gleichzeitige Nutzer</strong> –
            bei dieser Größenordnung zählt jede Millisekunde, Performance gehört deshalb fest zu
            meinem Alltag.
          </p>
          <p
            {...revealProps(6)}
            className='mb-4.5 max-w-copy text-body text-content-dim'
          >
            Gerade krempelt <strong>KI</strong> die Softwareentwicklung ordentlich um. Deshalb
            beschäftige ich mich intensiv damit, sie sinnvoll einzusetzen: Eigene{' '}
            <strong>MCP-Server</strong>, Skills und gute Prompts gehören für mich mittlerweile
            genauso zum Handwerkszeug wie sauberer Code.
          </p>

          <div {...revealProps(6)} className='mt-7.5 flex flex-wrap gap-9.5'>
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
