import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export interface SocialProps {
  className?: string
}

export const Socials = (props: SocialProps) => {
  const { className } = props
  return (
    <div className={twMerge('flex items-center justify-center gap-2', className)}>
      <Button
        asChild
        variant='outline'
        size='icon'
      >
        <Link
          href='https://github.com/janhoeck'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub-Profil von Jan Höck'
        >
          <Github />
        </Link>
      </Button>
      <Button
        asChild
        variant='outline'
        size='icon'
      >
        <Link
          href='mailto:jan.hoeck@gmx.net'
          aria-label='Jan Höck per E-Mail kontaktieren'
        >
          <Mail />
        </Link>
      </Button>
    </div>
  )
}
