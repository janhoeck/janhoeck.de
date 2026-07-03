import React from 'react'

const GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
  backgroundSize: '96px 96px',
  WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, #000 30%, transparent 78%)',
  maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, #000 30%, transparent 78%)',
}

const GRAIN_STYLE: React.CSSProperties = {
  mixBlendMode: 'overlay',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
}

/** Studio background decoration: hairline grid masked to the centre, plus a faint grain overlay. */
export const BackgroundFx = () => {
  return (
    <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10'>
      <div className='absolute inset-0' style={GRID_STYLE} />
      <div className='absolute inset-0 opacity-[0.035]' style={GRAIN_STYLE} />
    </div>
  )
}
