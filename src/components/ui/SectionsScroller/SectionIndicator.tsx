import { useSectionsScrollerContext } from '@/components/ui'
import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionIndicatorProps {
  className?: string
}

export const SectionIndicator = (props: SectionIndicatorProps) => {
  const { className } = props
  const { sections, activeSectionIndex, changeSection } = useSectionsScrollerContext()

  return (
    <nav
      aria-label='Abschnitte'
      className={cn(
        'fixed right-[clamp(18px,3vw,34px)] top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-4',
        'max-tablet:hidden',
        className
      )}
    >
      {sections.map((section, index) => {
        const isActive = index === activeSectionIndex
        return (
          <button
            key={section.key}
            type='button'
            onClick={() => changeSection(index)}
            aria-current={isActive ? 'true' : undefined}
            aria-label={section.label ?? section.key}
            className='group flex items-center gap-3 text-content-faint'
          >
            <span
              className={cn(
                'font-mono text-2xs uppercase tracking-caps transition-all duration-200',
                isActive
                  ? 'translate-x-0 text-brand opacity-100'
                  : 'translate-x-1.5 text-content-dim opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              )}
            >
              {section.label ?? section.key}
            </span>
            <span
              className={cn(
                'size-2.25 rounded-full border-[1.5px] transition-all duration-300',
                isActive ? 'scale-110 border-brand bg-brand' : 'border-content-faint'
              )}
            />
          </button>
        )
      })}
    </nav>
  )
}
