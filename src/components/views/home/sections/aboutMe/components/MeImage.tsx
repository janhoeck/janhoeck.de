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
        className='aspect-[4/5] h-full w-full object-cover'
        style={{ filter: 'grayscale(0.15) contrast(1.02)' }}
      />
      <div
        className='pointer-events-none absolute inset-0'
        style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(27,27,29,0.75))' }}
      />
      <span className='absolute bottom-3.5 left-3.5 z-[2] rounded-[7px] border border-line-strong bg-[rgba(11,14,22,0.6)] px-2.5 py-[5px] font-mono text-[10px] uppercase tracking-[0.16em] text-content backdrop-blur-sm'>
        Jan Höck · Köln
      </span>
    </div>
  )
}
