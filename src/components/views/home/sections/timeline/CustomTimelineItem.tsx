import React from 'react'
import { TimelineItem } from '@/components/ui'
import { cn } from '@/lib/utils'

export interface CustomTimelineItemProps {
  timePeriod: string
  organization: string
  /** Muted parenthetical after the organisation, e.g. "(ImmobilienScout24)". */
  organizationSub?: string
  jobTitle: string
  tasks?: string[]
}

/** A Werdegang entry — fills a TimelineItem card with organisation, role and tasks. */
export const CustomTimelineItem = (props: CustomTimelineItemProps) => {
  const { timePeriod, organization, organizationSub, jobTitle, tasks } = props

  return (
    <TimelineItem when={timePeriod}>
      <h3 className='mb-0.5 font-bold text-content'>
        {organization}
        {organizationSub && <span className='font-normal text-content-faint'> {organizationSub}</span>}
      </h3>
      <div className={cn('text-body-sm text-content-dim', tasks && 'mb-2')}>{jobTitle}</div>
      {tasks && (
        <ul className='flex list-disc flex-col gap-0.75 pl-4.25'>
          {tasks.map((task) => (
            <li key={task} className='text-body-sm leading-[1.4] text-content-dim marker:text-brand'>
              {task}
            </li>
          ))}
        </ul>
      )}
    </TimelineItem>
  )
}
