'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { SectionsScrollerContext } from './SectionsScrollerContext'
import { SectionType } from './types'

const useStore = () => {
  // All sections
  const [sections, setSections] = useState<SectionType[]>([])
  // The current active section key. Can also be undefined, if no active section is defined yet
  const [activeSectionKey, setActiveSectionKey] = useState<string | undefined>(undefined)

  const registerSection = (section: SectionType) => {
    setSections((prevSections) => {
      const isAlreadyKnown = prevSections.find((_section) => _section.key === section.key)
      if (isAlreadyKnown) {
        return prevSections
      }

      return [...prevSections, section]
    })
  }

  const activeSectionIndex = useMemo(
    () => sections.findIndex((section) => section.key === activeSectionKey),
    [sections, activeSectionKey]
  )
  const activeSection = useMemo(() => sections[activeSectionIndex], [sections, activeSectionIndex])
  const sectionsCount = useMemo(() => sections.length, [sections])

  useEffect(() => {
    if (sections.length === 0 || activeSectionKey) {
      return
    }

    const hash = window.location.hash
    // If no hash is defined and no activeSectionKey, then we set the first section as active
    if (!hash) {
      setActiveSectionKey(sections[0]!.key)
    } else {
      // The active section from the url
      setActiveSectionKey(hash.substring(1, hash.length))
    }
  }, [sections, activeSectionKey])

  /**
   * Change the hash in the url if the active section has changed
   */
  useEffect(() => {
    if (activeSection) {
      window.location.hash = activeSection.key
    }
  }, [activeSection])

  return {
    sections,
    registerSection,
    sectionsCount,
    activeSection,
    activeSectionIndex,
    activeSectionKey,
    setActiveSectionKey,
  }
}

export const SectionsScrollerContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const store = useStore()

  return <SectionsScrollerContext.Provider value={store}>{children}</SectionsScrollerContext.Provider>
}
