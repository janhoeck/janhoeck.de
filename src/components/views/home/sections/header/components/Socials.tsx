import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export interface SocialProps {
  className?: string
}

const iconButtonClass =
  'size-12 rounded-xl border border-line-strong bg-surface text-content-dim transition-all duration-200 ease-studio hover:-translate-y-0.5 hover:border-brand hover:bg-surface hover:text-brand'

export const Socials = (props: SocialProps) => {
  const { className } = props
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <Button asChild variant='secondary' size='icon' className={iconButtonClass}>
        <Link
          href='https://github.com/janhoeck'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub-Profil von Jan Höck'
        >
          <Github className='size-5' />
        </Link>
      </Button>
      <Button asChild variant='secondary' size='icon' className={iconButtonClass}>
        <Link
          href='mailto:jan.hoeck@gmx.net'
          aria-label='Jan Höck per E-Mail kontaktieren'
        >
          <Mail className='size-5' />
        </Link>
      </Button>
    </div>
  )
}
