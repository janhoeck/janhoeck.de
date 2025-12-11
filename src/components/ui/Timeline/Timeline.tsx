import React, { Children, HTMLAttributes, cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { TimelineItemProps } from './TimelineItem'

export type TimelineProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactElement<TimelineItemProps, 'Timeline'> | React.ReactElement<TimelineItemProps, 'Timeline'>[]
}

export const Timeline = (props: TimelineProps) => {
  const { className, children, ...restProps } = props
  return (
    <div
      className={twMerge([
        'flex flex-col',
        '[&>div]:sm:w-1/2',
        '[&>div:nth-child(2n+1)]:mr-0 [&>div:nth-child(2n+1)]:self-start [&>div:nth-child(2n+1)]:sm:mr-3 [&>div:nth-child(2n+1)]:sm:self-end',
        '[&>div:nth-child(2n+2)]:ml-0 [&>div:nth-child(2n+2)]:self-start [&>div:nth-child(2n+2)]:sm:ml-[5px]',
        className,
      ])}
      {...restProps}
    >
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          alignment: index % 2 ? 'left' : 'right',
          lastItem: index === Children.count(children) - 1,
        })
      })}
    </div>
  )
}
