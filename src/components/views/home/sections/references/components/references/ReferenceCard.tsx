import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

import { Button, Card } from '@/components/ui'
import { revealProps } from '../../../../components/reveal'

export interface ReferenceCardProps {
  className?: string
  imageSrc: string
  githubUrl?: string
  livePreviewUrl?: string
  title: string
  description?: string
  /** Stagger index for the scroll-reveal animation. */
  revealIndex?: number
}

const linkButtonClass = 'h-auto rounded-lg px-3.75 py-2.25 text-body-sm'

/** A portfolio reference: preview shot, title, description and preview/source links. */
export const ReferenceCard = (props: ReferenceCardProps) => {
  const { githubUrl, livePreviewUrl, title, description, imageSrc, revealIndex } = props

  return (
    <Card
      {...revealProps(revealIndex)}
      className='group gap-0 overflow-hidden rounded-2xl p-0 shadow-none transition-all duration-300 ease-studio hover:-translate-y-1 hover:border-brand'
    >
      <div className='relative aspect-16/10 overflow-hidden bg-base-2'>
        <Image
          src={imageSrc}
          alt={`${title} – Vorschaubild der Website`}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw'
          className='object-cover object-top transition-transform duration-500 ease-studio group-hover:scale-105'
        />
      </div>
      <div className='flex flex-1 flex-col gap-2.5 px-5 pb-5 pt-4.5'>
        <h3 className='text-lg font-bold text-content'>{title}</h3>
        {description && (
          <p className='flex-1 text-body-sm text-content-dim'>{description}</p>
        )}
        <div className='mt-1 flex gap-2.5'>
          {livePreviewUrl && (
            <Button asChild className={`${linkButtonClass} hover:bg-brand-soft`}>
              <Link href={livePreviewUrl} target='_blank' rel='noopener noreferrer'>
                <ExternalLink className='size-3.75' />
                Preview
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button
              asChild
              variant='ghost'
              className={`${linkButtonClass} border border-line-strong bg-transparent text-content-dim hover:border-content-dim hover:bg-transparent hover:text-content`}
            >
              <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <Github className='size-3.75' />
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
