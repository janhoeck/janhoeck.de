'use client'

import { createContext } from 'react'
import { SectionsScrollerContextType } from './types'

export const SectionsScrollerContext = createContext<SectionsScrollerContextType>({
  sections: [],
  registerSection: () => {},
  sectionsCount: 0,
  activeSection: undefined,
  activeSectionIndex: 0,
  activeSectionKey: undefined,
  setActiveSectionKey: () => {},
})
