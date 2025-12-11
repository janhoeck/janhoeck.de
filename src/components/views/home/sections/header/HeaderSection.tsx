'use client'

import { H1, H3, Section, Small } from '@/components/ui'
import { motion } from 'framer-motion'
import React from 'react'
import { Mouse } from 'lucide-react'

import { Socials } from './components/Socials'

export const HeaderSection = () => {
  return (
    <Section
      className='flex flex-col items-center justify-center'
      sectionKey='header'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className='flex w-full flex-col items-center justify-center text-center uppercase'>
          <H1>Jan Höck</H1>
          <H3 className='text-muted-foreground'>Senior Frontend Entwickler</H3>
          <Socials className='mt-4' />
        </div>
      </motion.div>
      <div className='absolute bottom-4 left-[50%] flex w-full -translate-x-2/4 flex-col items-center text-center uppercase text-gray-400'>
        <Mouse className='mb-2 animate-bounce' />
        <Small>Finde mehr heraus</Small>
      </div>
    </Section>
  )
}
