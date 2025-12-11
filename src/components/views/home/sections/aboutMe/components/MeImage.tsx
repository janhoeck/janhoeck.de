import Image from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export interface MeImageProps {
  className?: string
}

export const MeImage = (props: MeImageProps) => {
  const {className} = props

  return (
    <div className={twMerge(['relative h-60 w-60', 'md:h-72 md:w-72', className])}>
      <Image
        priority
        fill
        className='z-10 rounded-full border-4 border-solid border-accent'
        src='/assets/me.jpg'
        alt='Jan Höck'
      />
    </div>
  )
}
