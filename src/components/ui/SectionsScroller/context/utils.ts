import { SectionType } from '@/components/ui'

export const findSectionIndex = (sections: SectionType[], name: string) => {
  return sections.findIndex((section) => section.key === name)
}
