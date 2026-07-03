import React from 'react'
import { cn } from '@/lib/utils'

export interface SkillsProps {
  className?: string
  children: React.ReactNode
}

/** A wrapping row of Skill tiles. */
export const Skills = (props: SkillsProps) => {
  const { className, children } = props
  return <div className={cn('flex flex-wrap gap-3', className)}>{children}</div>
}
