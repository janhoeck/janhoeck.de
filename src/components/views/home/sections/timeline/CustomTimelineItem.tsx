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
      <h4 className='m-0 mb-0.5 text-base font-bold text-content'>
        {organization}
        {organizationSub && <span className='font-normal text-content-faint'> {organizationSub}</span>}
      </h4>
      <div className={cn('text-[13px] text-content-dim', tasks ? 'mb-2' : 'mb-0')}>{jobTitle}</div>
      {tasks && (
        <ul className='m-0 flex flex-col gap-[3px] pl-[17px]'>
          {tasks.map((task) => (
            <li key={task} className='text-[13px] leading-[1.4] text-content-dim marker:text-brand'>
              {task}
            </li>
          ))}
        </ul>
      )}
    </TimelineItem>
  )
}
