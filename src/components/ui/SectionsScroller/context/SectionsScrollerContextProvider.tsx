'use client'

import React, { useMemo, useState } from 'react'
import { SectionsScrollerContext } from './SectionsScrollerContext'
import { SectionType } from './types'

const useStore = () => {
  // All sections
  const [sections, setSections] = useState<SectionType[]>([])
  // The current active section as index
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0)

  const registerSection = (section: SectionType) => {
    setSections((prevSections) => {
      const isAlreadyKnown = prevSections.find((_section) => _section.key === section.key)
      if (isAlreadyKnown) {
        return prevSections
      }

      return [...prevSections, section]
    })
  }

  const activeSection = useMemo(() => sections[activeSectionIndex], [sections, activeSectionIndex])
  const sectionsCount = useMemo(() => sections.length, [sections])

  return {
    sections,
    registerSection,
    changeSection: setActiveSectionIndex,
    sectionsCount,
    activeSection,
    activeSectionIndex,
  }
}

export const SectionsScrollerContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const store = useStore()

  return <SectionsScrollerContext.Provider value={store}>{children}</SectionsScrollerContext.Provider>
}
