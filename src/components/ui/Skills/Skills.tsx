import React from 'react'

import { SkillProps } from './Skill'
import { cn } from '@/lib/utils'

export interface SkillsProps {
  className?: string
  children: React.ReactElement<SkillProps> | React.ReactElement<SkillProps>[]
}

export const Skills = (props: SkillsProps) => {
  const { className, children } = props

  return <div className={cn('grid grid-cols-[repeat(auto-fit,77px)] gap-4', className)}>{children}</div>
}
