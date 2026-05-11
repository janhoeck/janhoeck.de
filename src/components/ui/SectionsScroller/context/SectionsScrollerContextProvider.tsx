'use client'

import React, { useCallback, useMemo, useRef, useState } from 'react'
import { SectionsScrollerContext } from './SectionsScrollerContext'
import { SectionType } from './types'

const useStore = () => {
  // All sections
  const [sections, setSections] = useState<SectionType[]>([])
  // The current active section as index
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0)
  // DOM elements of each section's scroll container, keyed by index
  const sectionElements = useRef<Map<number, HTMLElement>>(new Map())

  const registerSection = (section: SectionType) => {
    setSections((prevSections) => {
      const isAlreadyKnown = prevSections.find((_section) => _section.key === section.key)
      if (isAlreadyKnown) {
        return prevSections
      }

      return [...prevSections, section]
    })
  }

  const registerSectionElement = useCallback((index: number, element: HTMLElement | null) => {
    if (element === null) {
      sectionElements.current.delete(index)
      return
    }
    sectionElements.current.set(index, element)
  }, [])

  const getSectionElement = useCallback((index: number): HTMLElement | null => {
    return sectionElements.current.get(index) ?? null
  }, [])

  const activeSection = useMemo(() => sections[activeSectionIndex], [sections, activeSectionIndex])
  const sectionsCount = useMemo(() => sections.length, [sections])

  return {
    sections,
    registerSection,
    registerSectionElement,
    getSectionElement,
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
