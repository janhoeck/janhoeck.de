import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  List,
  TimelineItem,
  type TimelineItemProps,
} from '@/components/ui'
import React from 'react'

export type CustomTimelineItemProps = Omit<TimelineItemProps, 'children'> & {
  timePeriod: string
  jobTitle: string
  organization: string
  tasks?: string[]
}

export const CustomTimelineItem = (props: CustomTimelineItemProps) => {
  const { timePeriod, jobTitle, organization, tasks, ...restProps } = props
  return (
    <TimelineItem {...restProps}>
      <CardHeader>
        <CardTitle>{organization}</CardTitle>
        <CardDescription>{jobTitle}</CardDescription>
      </CardHeader>
      {tasks && (
        <CardContent>
          <List className='mt-2'>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </List>
        </CardContent>
      )}
      <CardFooter>
        <CardDescription>{timePeriod}</CardDescription>
      </CardFooter>
    </TimelineItem>
  )
}
