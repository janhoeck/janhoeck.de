import React from 'react'

/** The vertical spine of the timeline — a brand gradient that fades downward. */
export const TimelineLine = () => (
  <span
    aria-hidden='true'
    className='absolute bottom-[6px] left-[5px] top-[6px] w-0.5'
    style={{ background: 'linear-gradient(#7f96b3, rgba(127,150,179,0.3))' }}
  />
)
