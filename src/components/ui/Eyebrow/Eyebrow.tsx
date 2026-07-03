import React from 'react'
import { cn } from '@/lib/utils'

export interface EyebrowProps {
  /** Monospace numeric prefix, e.g. "01". */
  index?: string
  children: React.ReactNode
  className?: string
}

/** Mono uppercase kicker with a faint numeric prefix — the Studio section label. */
export const Eyebrow = (props: EyebrowProps) => {
  const { index, children, className } = props
  return (
    <span
      className={cn(
        'flex items-center gap-3 font-mono text-xs uppercase tracking-caps-widest text-brand',
        className
      )}
    >
      {index && <span className='font-bold text-content-faint'>{index}</span>}
      {children}
    </span>
  )
}
