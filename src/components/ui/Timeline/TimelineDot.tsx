import React from 'react'

/** The node marker on the timeline spine, aligned to a TimelineItem. */
export const TimelineDot = () => (
  <span
    aria-hidden='true'
    className='absolute -left-[30px] top-[5px] size-3 rounded-full border-2 border-brand bg-base'
    style={{ boxShadow: '0 0 0 4px #1b1b1d' }}
  />
)
