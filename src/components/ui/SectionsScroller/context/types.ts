export type SectionType = {
  key: string
}

export type SectionsScrollerContextType = {
  sections: SectionType[]
  registerSection: (section: SectionType) => void
  registerSectionElement: (index: number, element: HTMLElement | null) => void
  getSectionElement: (index: number) => HTMLElement | null
  sectionsCount: number
  activeSection: SectionType | undefined
  activeSectionIndex: number
  changeSection: (sectionIndex: number) => void
}
