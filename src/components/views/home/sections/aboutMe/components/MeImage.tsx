import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

export interface MeImageProps {
  className?: string
}

export const MeImage = (props: MeImageProps) => {
  const { className } = props

  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-line-strong', className)}>
      <Image
        priority
        src='/assets/me.jpg'
        alt='Porträtfoto von Jan Höck, Senior Frontend Entwickler'
        width={300}
        height={375}
        className='aspect-4/5 h-full w-full object-cover'
        style={{ filter: 'grayscale(0.15) contrast(1.02)' }}
      />
      <div className='pointer-events-none absolute inset-0 bg-linear-to-b from-base/0 from-55% to-base/75' />
      <span className='absolute bottom-3.5 left-3.5 z-2 rounded-lg border border-line-strong bg-ink/60 px-2.5 py-1.25 font-mono text-2xs uppercase tracking-caps text-content backdrop-blur-sm'>
        Jan Höck · Köln
      </span>
    </div>
  )
}
