import { Section } from '@/components/ui'
import React from 'react'

import { Socials } from './components/Socials'
import { revealProps } from '../../components/reveal'

export const HeaderSection = () => {
  return (
    <Section
      as='header'
      sectionKey='hero'
      label='Start'
      innerClassName='flex flex-col items-center gap-5.5 text-center'
    >
      <div
        {...revealProps(0)}
        className='flex flex-wrap justify-center gap-x-4.5 gap-y-2 font-mono text-xs uppercase tracking-caps-wide text-content-dim'
      >
        <span className='inline-flex items-center gap-2 text-brand'>
          <span className='size-1.75 rounded-full bg-brand animate-pulse-ring' />
          Offen für Projekte
        </span>
        <span>Köln, DE</span>
        <span>EST. 1996</span>
      </div>

      <h1
        {...revealProps(1)}
        className='font-display text-display-xl uppercase'
      >
        Jan&nbsp;Höck
      </h1>

      <p
        {...revealProps(2)}
        className='font-mono text-[clamp(13px,2.2vw,19px)] uppercase tracking-caps-max text-content-dim'
      >
        Senior Frontend Entwickler
      </p>

      <div {...revealProps(3)} className='mt-1.5'>
        <Socials />
      </div>

      <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-2xs uppercase tracking-caps-widest text-content-faint'>
        <span className='relative h-8.5 w-5.5 rounded-xl border-[1.5px] border-content-faint'>
          <span className='absolute left-1/2 top-1.75 h-1.5 w-0.75 -translate-x-1/2 rounded-sm bg-brand animate-mouse-wheel' />
        </span>
        <span>Scroll einfach weiter</span>
      </div>
    </Section>
  )
}
