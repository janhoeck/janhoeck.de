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
      innerClassName='flex max-w-narrow flex-col items-center gap-6.5 text-center'
    >
      <div {...revealProps(0)}>
        <Eyebrow index='05'>Kontakt</Eyebrow>
      </div>

      <h2
        {...revealProps(1)}
        className='font-display text-display-lg uppercase'
      >
        Lass uns etwas <span className='text-brand'>Gutes</span> bauen.
      </h2>

      <p
        {...revealProps(2)}
        className='max-w-[52ch] text-body-lg text-content-dim'
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

      <div className='absolute inset-x-0 bottom-7 flex items-center justify-between px-gutter font-mono text-2xs uppercase tracking-caps text-content-faint max-tablet:static max-tablet:mt-8 max-tablet:flex-col max-tablet:gap-2'>
        <span>© 2026 Jan Höck</span>
        <span>Senior Frontend Entwickler · Köln</span>
      </div>
    </Section>
  )
}
