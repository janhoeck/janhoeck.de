export type SectionType = {
  key: string
}

export type SectionsScrollerContextType = {
  sections: SectionType[]
  registerSection: (section: SectionType) => void
  sectionsCount: number
  activeSection: SectionType | undefined
  activeSectionIndex: number
  changeSection: (sectionIndex: number) => void
}
