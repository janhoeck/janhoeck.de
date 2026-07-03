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
      innerClassName='flex flex-col items-center gap-[22px] text-center'
    >
      <div
        {...revealProps(0)}
        className='flex flex-wrap justify-center gap-x-[18px] gap-y-2 font-mono text-xs uppercase tracking-[0.22em] text-content-dim'
      >
        <span className='inline-flex items-center gap-2 text-brand'>
          <span className='size-[7px] rounded-full bg-brand animate-pulse-ring' />
          Verfügbar für Projekte
        </span>
        <span>Köln, DE</span>
        <span>EST. 1996</span>
      </div>

      <h1
        {...revealProps(1)}
        className='m-0 font-display text-[clamp(58px,13vw,168px)] font-extrabold uppercase leading-[0.86] tracking-[-0.01em]'
      >
        Jan&nbsp;Höck
      </h1>

      <p
        {...revealProps(2)}
        className='m-0 font-mono text-[clamp(13px,2.2vw,19px)] font-normal uppercase tracking-[0.34em] text-content-dim'
      >
        Senior Frontend Entwickler
      </p>

      <div {...revealProps(3)} className='mt-1.5'>
        <Socials />
      </div>

      <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.26em] text-content-faint'>
        <span className='relative h-[34px] w-[22px] rounded-xl border-[1.5px] border-content-faint'>
          <span className='absolute left-1/2 top-[7px] h-1.5 w-[3px] -translate-x-1/2 rounded-sm bg-brand animate-mouse-wheel' />
        </span>
        <span>Finde mehr heraus</span>
      </div>
    </Section>
  )
}
