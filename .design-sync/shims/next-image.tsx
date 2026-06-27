// design-sync shim for `next/image`. The real next/image needs Next's runtime
// (image loader/config, optimization endpoint) which doesn't exist outside a
// Next server, so for the design-system bundle we render a plain <img> that
// faithfully reproduces the props the DS components actually use (`fill`,
// string or static-import `src`, `className`, `alt`, `sizes`).
import React from 'react'

type AnyProps = Record<string, any>

export default function Image(props: AnyProps) {
  const {
    src,
    alt = '',
    fill,
    priority,
    loading,
    sizes,
    quality,
    loader,
    placeholder,
    blurDataURL,
    unoptimized,
    onLoadingComplete,
    width,
    height,
    style,
    ...rest
  } = props

  // next/image accepts a string or a static-import object ({ src, width, height }).
  const realSrc =
    typeof src === 'string' ? src : (src && (src.src ?? src.default?.src)) ?? ''

  // `fill` makes the image absolutely cover its (position:relative) parent.
  const finalStyle = fill
    ? { position: 'absolute', inset: 0, height: '100%', width: '100%', ...style }
    : style

  return (
    <img
      src={realSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      loading={priority ? 'eager' : loading}
      style={finalStyle}
      {...rest}
    />
  )
}
