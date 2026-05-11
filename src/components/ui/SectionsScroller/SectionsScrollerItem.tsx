'use client'

import { SectionType, useSectionsScrollerContext } from '@/components/ui'
import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionsScrollerItemProps {
  className?: string
  children: React.ReactNode
  sectionIndex: number
  sectionsCount: number
  onSectionChange: (section: SectionType) => void
}

export const SectionsScrollerItem = (props: SectionsScrollerItemProps) => {
  const { children, className, sectionIndex, sectionsCount, onSectionChange } = props
  const { sections, activeSectionIndex } = useSectionsScrollerContext()
  const rootRef = useRef<HTMLDivElement>(null)

  // Refs for gesture tracking
  const touchStartY = useRef<number | null>(null)
  const touchStartTime = useRef<number>(0)
  const touchStartScrollTop = useRef<number>(0)
  const wheelOverscrollAccumulator = useRef<number>(0)

  // For detecting trackpad vs mouse wheel
  const wheelEventCount = useRef<number>(0)
  const wheelEventTimer = useRef<NodeJS.Timeout | null>(null)

  // Reset accumulator when section changes
  useEffect(() => {
    wheelOverscrollAccumulator.current = 0
  }, [activeSectionIndex])

  const isAtBoundary = (direction: 'up' | 'down'): boolean => {
    const { current } = rootRef
    if (!current) {
      return false
    }

    const tolerance = 5
    const isAtTop = current.scrollTop <= tolerance
    const isAtBottom = Math.abs(current.scrollHeight - current.clientHeight - current.scrollTop) <= tolerance

    return direction === 'up' ? isAtTop : isAtBottom
  }

  const changeSection = (direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? sectionIndex - 1 : sectionIndex + 1

    if (targetIndex < 0 || targetIndex >= sectionsCount) {
      return
    }

    const section = sections[targetIndex]
    if (section) {
      wheelOverscrollAccumulator.current = 0
      onSectionChange(section)
    }
  }

  // Register native listeners with { passive: false } so preventDefault works.
  // React's synthetic onWheel/onTouchMove are passive by default.
  useEffect(() => {
    const current = rootRef.current
    if (!current) {
      return
    }

    const handleWheel = (event: globalThis.WheelEvent) => {
      wheelEventCount.current++

      if (wheelEventTimer.current) {
        clearTimeout(wheelEventTimer.current)
      }

      wheelEventTimer.current = setTimeout(() => {
        wheelEventCount.current = 0
      }, 150)

      const isTrackpad = wheelEventCount.current > 10

      if (Math.abs(event.deltaY) < 1) {
        return
      }

      const delta = event.deltaY
      const direction = delta > 0 ? 'down' : 'up'

      if (!isAtBoundary(direction)) {
        wheelOverscrollAccumulator.current = 0
        return
      }

      event.preventDefault()

      const threshold = isTrackpad ? 200 : 120
      wheelOverscrollAccumulator.current += Math.abs(delta)

      if (wheelOverscrollAccumulator.current >= threshold) {
        changeSection(direction)
      }
    }

    const handleTouchStart = (event: globalThis.TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) {
        return
      }

      touchStartY.current = touch.clientY
      touchStartTime.current = Date.now()
      touchStartScrollTop.current = current.scrollTop
    }

    const handleTouchMove = (event: globalThis.TouchEvent) => {
      if (touchStartY.current === null) {
        return
      }

      const touch = event.touches[0]
      if (!touch) {
        return
      }

      const deltaY = touchStartY.current - touch.clientY
      const currentScrollTop = current.scrollTop

      const isScrollingDown = deltaY > 0
      const isScrollingUp = deltaY < 0

      const tolerance = 5
      const isAtTop = currentScrollTop <= tolerance
      const isAtBottom = Math.abs(current.scrollHeight - current.clientHeight - currentScrollTop) <= tolerance

      if ((isAtTop && isScrollingUp) || (isAtBottom && isScrollingDown)) {
        event.preventDefault()
      }
    }

    const handleTouchEnd = (event: globalThis.TouchEvent) => {
      if (touchStartY.current === null) {
        return
      }

      const touch = event.changedTouches[0]
      if (!touch) {
        return
      }

      const deltaY = touchStartY.current - touch.clientY
      const deltaTime = Date.now() - touchStartTime.current
      const currentScrollTop = current.scrollTop

      const velocity = deltaTime > 0 ? Math.abs(deltaY) / deltaTime : 0

      const tolerance = 5
      const wasAtTop = touchStartScrollTop.current <= tolerance
      const wasAtBottom = Math.abs(current.scrollHeight - current.clientHeight - touchStartScrollTop.current) <= tolerance
      const isAtTop = currentScrollTop <= tolerance
      const isAtBottom = Math.abs(current.scrollHeight - current.clientHeight - currentScrollTop) <= tolerance

      const distanceThreshold = 50
      const velocityThreshold = 0.3

      const isStrongGesture = Math.abs(deltaY) > distanceThreshold || velocity > velocityThreshold

      if (isStrongGesture) {
        if (deltaY > 0 && (wasAtBottom || isAtBottom)) {
          changeSection('down')
        } else if (deltaY < 0 && (wasAtTop || isAtTop)) {
          changeSection('up')
        }
      }

      touchStartY.current = null
      touchStartTime.current = 0
      touchStartScrollTop.current = 0
    }

    current.addEventListener('wheel', handleWheel, { passive: false })
    current.addEventListener('touchstart', handleTouchStart, { passive: true })
    current.addEventListener('touchmove', handleTouchMove, { passive: false })
    current.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      current.removeEventListener('wheel', handleWheel)
      current.removeEventListener('touchstart', handleTouchStart)
      current.removeEventListener('touchmove', handleTouchMove)
      current.removeEventListener('touchend', handleTouchEnd)

      if (wheelEventTimer.current) {
        clearTimeout(wheelEventTimer.current)
      }
    }
  }, [sectionIndex, sectionsCount, sections, onSectionChange])

  return (
    <div className={cn('h-screen overflow-auto overscroll-none', className)} ref={rootRef}>
      {children}
    </div>
  )
}
