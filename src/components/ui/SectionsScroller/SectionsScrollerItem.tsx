'use client'

import { useSectionsScrollerContext } from '@/components/ui'
import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionsScrollerItemProps {
  className?: string
  children: React.ReactNode
  sectionIndex: number
}

export const SectionsScrollerItem = (props: SectionsScrollerItemProps) => {
  const { children, className, sectionIndex } = props
  const { registerSectionElement } = useSectionsScrollerContext()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerSectionElement(sectionIndex, rootRef.current)
    return () => {
      registerSectionElement(sectionIndex, null)
    }
  }, [sectionIndex, registerSectionElement])

  return (
    <div className={cn('h-screen overflow-auto overscroll-none', className)} ref={rootRef}>
      {children}
    </div>
  )
}
