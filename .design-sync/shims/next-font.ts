// design-sync shim for `next/font/google`. Only `src/app/layout.tsx` uses this,
// and layout is outside the synced component scope (srcDir = src/components), so
// this is defensive: if a component ever pulls a Google font loader, return the
// same { className, style, variable } shape Next produces, pointing at the
// Barlow family the bundle ships via styles.css.
type FontResult = { className: string; style: { fontFamily: string }; variable: string }

const loader = (): FontResult => ({
  className: '',
  style: { fontFamily: "'Barlow', ui-sans-serif, system-ui, sans-serif" },
  variable: '',
})

export const Barlow = loader
export default loader
