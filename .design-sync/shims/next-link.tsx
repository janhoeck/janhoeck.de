// design-sync shim for `next/link`. Renders a plain anchor. forwardRef matters:
// the DS composes `<Button asChild><Link/></Button>`, and Radix Slot forwards a
// ref onto the child — next/link forwards its ref too, so the shim must as well.
import React from 'react'

type AnyProps = Record<string, any>

const Link = React.forwardRef<HTMLAnchorElement, AnyProps>(function Link(
  { href, children, prefetch, replace, scroll, shallow, locale, passHref, legacyBehavior, ...rest },
  ref
) {
  const realHref = typeof href === 'string' ? href : href?.pathname ?? '#'
  return (
    <a ref={ref} href={realHref} {...rest}>
      {children}
    </a>
  )
})

export default Link
