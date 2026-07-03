import React from 'react'

/** The vertical spine of the timeline — a brand gradient that fades downward. */
export const TimelineLine = () => (
  <span
    aria-hidden='true'
    className='absolute inset-y-1.5 left-1.25 w-0.5 bg-linear-to-b from-brand to-brand/30'
  />
)
