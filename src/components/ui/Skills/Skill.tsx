import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

export interface SkillProps {
  imageSrc: string
  label: string
  className?: string
}

/** A single skill tile: logo + label, with a lift-on-hover. */
export const Skill = (props: SkillProps) => {
  const { imageSrc, label, className } = props
  return (
    <div
      className={cn(
        'flex items-center gap-2.75 rounded-xl border border-line bg-surface py-2.75 pl-3 pr-4 transition-all duration-200 ease-studio hover:-translate-y-0.5 hover:border-brand hover:bg-surface-2',
        className
      )}
    >
      <Image src={imageSrc} alt='' width={26} height={26} className='size-6.5 object-contain' />
      <span className='text-sm font-medium text-content'>{label}</span>
    </div>
  )
}
