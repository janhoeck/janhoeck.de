import React from 'react'
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

export interface ReferenceCardProps {
  className?: string
  imageSrc: string
  githubUrl: string
  liveDemoUrl?: string
  title: string
  description?: string
}

export const ReferenceCard = (props: ReferenceCardProps) => {
  const { githubUrl, liveDemoUrl, title, description, imageSrc } = props

  return (
    <Card className='max-w-md pt-0'>
      <CardContent className='px-0'>
        <img
          src={imageSrc}
          alt='Banner'
          className='aspect-video h-70 rounded-t-xl object-cover'
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
        {liveDemoUrl && (
          <Button asChild>
            <Link
              href={liveDemoUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink />
              Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button
            asChild
            variant='outline'
          >
            <Link
              href={githubUrl}
              target='_blank'
            >
              <Github />
              Github
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
