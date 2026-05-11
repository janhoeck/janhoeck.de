import React from 'react'
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export interface ReferenceCardProps {
  className?: string
  imageSrc: string
  githubUrl?: string
  livePreviewUrl?: string
  title: string
  description?: string
}

export const ReferenceCard = (props: ReferenceCardProps) => {
  const { githubUrl, livePreviewUrl, title, description, imageSrc } = props

  return (
    <Card className='max-w-md pt-0'>
      <CardContent className='px-0'>
        <div className='relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted'>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, 28rem'
            className='object-cover object-top'
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
        {livePreviewUrl && (
          <Button asChild>
            <Link
              href={livePreviewUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink />
              Preview
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
