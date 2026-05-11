'use client'

import { createContext } from 'react'
import { SectionsScrollerContextType } from './types'

export const SectionsScrollerContext = createContext<SectionsScrollerContextType>({
  sections: [],
  registerSection: () => {},
  registerSectionElement: () => {},
  getSectionElement: () => null,
  sectionsCount: 0,
  activeSection: undefined,
  activeSectionIndex: 0,
  changeSection: () => {},
})
