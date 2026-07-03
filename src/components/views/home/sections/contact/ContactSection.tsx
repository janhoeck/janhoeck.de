import { Eyebrow, Section } from '@/components/ui'
import React from 'react'
import Link from 'next/link'

import { Socials } from '../header/components/Socials'
import { revealProps } from '../../components/reveal'

export const ContactSection = () => {
  return (
    <Section
      sectionKey='contact'
      label='Kontakt'
      innerClassName='flex max-w-[760px] flex-col items-center gap-[26px] text-center'
    >
      <div {...revealProps(0)}>
        <Eyebrow index='05'>Kontakt</Eyebrow>
      </div>

      <h2
        {...revealProps(1)}
        className='m-0 font-display text-[clamp(40px,8vw,96px)] font-extrabold uppercase leading-[0.9] tracking-[-0.01em]'
      >
        Lass uns etwas <span className='text-brand'>Gutes</span> bauen.
      </h2>

      <p
        {...revealProps(2)}
        className='m-0 max-w-[52ch] text-[clamp(15px,1.8vw,19px)] leading-[1.6] text-content-dim'
      >
        Ein Blick in den Code ist manchmal aussagekräftiger als jede Beschreibung. Schreib mir — ich
        freue mich auf neue Herausforderungen.
      </p>

      <Link
        {...revealProps(3)}
        href='mailto:jan.hoeck@gmx.net'
        className='border-b-2 border-brand pb-1 font-mono text-[clamp(16px,2.6vw,26px)] text-content transition-colors hover:text-brand'
      >
        jan.hoeck@gmx.net
      </Link>

      <div {...revealProps(4)}>
        <Socials />
      </div>

      <div className='absolute bottom-7 left-0 right-0 flex items-center justify-between px-[clamp(24px,6vw,96px)] font-mono text-[11px] uppercase tracking-[0.12em] text-content-faint max-[860px]:static max-[860px]:mt-8 max-[860px]:flex-col max-[860px]:gap-2'>
        <span>© 2026 Jan Höck</span>
        <span>Senior Frontend Entwickler · Köln</span>
      </div>
    </Section>
  )
}
