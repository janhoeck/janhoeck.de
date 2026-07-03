import React from 'react'
import { cn } from '@/lib/utils'

export interface SkillGroupProps {
  /** Group label, e.g. "Sprachen". */
  title: string
  className?: string
  children: React.ReactNode
}

/** A labelled group of skills: a mono header with a trailing hairline, then the tiles. */
export const SkillGroup = (props: SkillGroupProps) => {
  const { title, className, children } = props
  return (
    <div className={cn('mb-[clamp(22px,3.4vh,40px)]', className)}>
      <div className='mb-4 flex items-center gap-3.5'>
        <h3 className='m-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-content-dim'>
          {title}
        </h3>
        <span className='h-px flex-1 bg-line' />
      </div>
      {children}
    </div>
  )
}
