export type SectionType = {
  key: string
  /** Short label shown next to the nav dot (e.g. "Über mich"). */
  label?: string
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
