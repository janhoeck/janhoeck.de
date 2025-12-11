import { useSectionsScrollerContext } from '@/components/ui'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const SECTION_INDICATOR_DIMENSION_CONFIG = {
  default: {
    height: 4,
    width: 4,
    hover: {
      height: 8,
      width: 8,
    },
  },
  active: {
    height: 12,
    width: 12,
    hover: {
      height: 12,
      width: 12,
    },
  },
}

export interface SectionIndicatorProps {
  className?: string
}

export const SectionIndicator = (props: SectionIndicatorProps) => {
  const { className } = props
  const { sections, activeSection, activeSectionIndex, setActiveSectionKey } = useSectionsScrollerContext()

  return (
    <ul className={twMerge('relative flex list-none flex-col items-center', className)}>
      {sections.map((section, index) => {
        const isActiveSection = index === activeSectionIndex
        const defaultDimension = SECTION_INDICATOR_DIMENSION_CONFIG.default
        const activeDimension = SECTION_INDICATOR_DIMENSION_CONFIG.active
        const currentDimension = isActiveSection ? activeDimension : defaultDimension

        const defaultSpacing = 16
        // To calculate the topSpacing we have to calculate the current index * defaultSpacing.
        // This will result in 0 if it is the first index.
        // Then we add the height of the already existing indicators to that calculation to get an even spacing between
        // all indicators
        let topSpacing = index * defaultSpacing + (index + 1) * defaultDimension.height
        if (activeSectionIndex < index) {
          // If the active section indicator is before our current indicator (of this for loop), then we have to add this
          // height as well to the calculation, because it's a big bigger as the default ones
          topSpacing += activeDimension.height - defaultDimension.height
        }

        return (
          <li
            key={section.key}
            className={twMerge(
              'absolute',
              'cursor-pointer rounded-full transition-all duration-300 bg-primary',
              !isActiveSection && `hover:scale-150`
            )}
            style={{
              top: topSpacing,
              height: currentDimension.height,
              width: currentDimension.width,
            }}
            onClick={() => setActiveSectionKey(section.key)}
          />
        )
      })}
    </ul>
  )
}
