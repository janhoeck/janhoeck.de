import Image from 'next/image'
import React from 'react'
import {Card, CardContent} from "@/components/ui";

export interface SkillItem {
  imageSrc: string
  tooltip?: string
}

export interface SkillProps extends SkillItem {
}

export const Skill = (props: SkillProps) => {
  const {imageSrc, tooltip} = props

  return (
    <Card>
      <CardContent className='relative h-12 w-12 mx-auto'>
        <Image
          fill
          src={imageSrc}
          alt={tooltip ?? ''}
          className='object-contain'
        />
      </CardContent>
    </Card>
  )
}
