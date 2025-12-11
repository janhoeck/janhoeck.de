'use client'

import { SectionType, useSectionsScrollerContext } from '@/components/ui'
import React, { TouchEvent, useEffect, useRef, WheelEvent } from 'react'
import { twMerge } from 'tailwind-merge'

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
  const lastWheelTime = useRef<number>(0)
  const isChangingSection = useRef<boolean>(false)

  // For detecting trackpad vs mouse wheel
  const wheelEventCount = useRef<number>(0)
  const wheelEventTimer = useRef<NodeJS.Timeout | null>(null)

  // Reset accumulator when section changes
  useEffect(() => {
    wheelOverscrollAccumulator.current = 0
    isChangingSection.current = false
  }, [activeSectionIndex])

  const isAtBoundary = (direction: 'up' | 'down'): boolean => {
    const { current } = rootRef
    if (!current) return false

    const tolerance = 5
    const isAtTop = current.scrollTop <= tolerance
    const isAtBottom = Math.abs(current.scrollHeight - current.clientHeight - current.scrollTop) <= tolerance

    return direction === 'up' ? isAtTop : isAtBottom
  }

  const changeSection = (direction: 'up' | 'down') => {
    if (isChangingSection.current) return

    const targetIndex = direction === 'up' ? sectionIndex - 1 : sectionIndex + 1

    if (targetIndex < 0 || targetIndex >= sectionsCount) {
      return
    }

    const section = sections[targetIndex]
    if (section) {
      isChangingSection.current = true
      wheelOverscrollAccumulator.current = 0
      onSectionChange(section)
    }
  }

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const { current } = rootRef
    if (!current || isChangingSection.current) return

    const now = Date.now()
    const timeSinceLastWheel = now - lastWheelTime.current
    lastWheelTime.current = now

    // Detect if this is a trackpad (many small events) or mouse wheel (fewer large events)
    wheelEventCount.current++

    if (wheelEventTimer.current) {
      clearTimeout(wheelEventTimer.current)
    }

    wheelEventTimer.current = setTimeout(() => {
      wheelEventCount.current = 0
    }, 150)

    // Trackpads send many events (>10 in 150ms), mouse wheels send fewer
    const isTrackpad = wheelEventCount.current > 10

    // Filter tiny movements (especially from trackpads)
    if (Math.abs(event.deltaY) < 1) {
      return
    }

    const delta = event.deltaY
    const direction = delta > 0 ? 'down' : 'up'

    // Check if we're at the boundary
    if (!isAtBoundary(direction)) {
      wheelOverscrollAccumulator.current = 0
      return
    }

    // Prevent default scrolling when at boundary and attempting to overscroll
    event.preventDefault()

    // Different thresholds for trackpad vs mouse
    // Trackpads: higher threshold because they send many small events
    // Mouse: lower threshold for more responsive feel
    const threshold = isTrackpad ? 200 : 120

    // Accumulate scroll distance
    wheelOverscrollAccumulator.current += Math.abs(delta)

    // Check if we've crossed the threshold
    if (wheelOverscrollAccumulator.current >= threshold) {
      changeSection(direction)
    }
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const { current } = rootRef
    if (!current) return

    const touch = event.touches[0]
    if (!touch) return

    touchStartY.current = touch.clientY
    touchStartTime.current = Date.now()
    touchStartScrollTop.current = current.scrollTop
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const { current } = rootRef
    if (!current || touchStartY.current === null) return

    const touch = event.touches[0]
    if (!touch) return

    const currentY = touch.clientY
    const deltaY = touchStartY.current - currentY
    const currentScrollTop = current.scrollTop

    // Determine scroll direction
    const isScrollingDown = deltaY > 0
    const isScrollingUp = deltaY < 0

    // Check if we're trying to overscroll
    const tolerance = 5
    const isAtTop = currentScrollTop <= tolerance
    const isAtBottom = Math.abs(current.scrollHeight - current.clientHeight - currentScrollTop) <= tolerance

    // Prevent overscroll bounce on iOS/Android
    if ((isAtTop && isScrollingUp) || (isAtBottom && isScrollingDown)) {
      event.preventDefault()
    }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const { current } = rootRef
    if (!current || touchStartY.current === null || isChangingSection.current) return

    const touch = event.changedTouches[0]
    if (!touch) return

    const endY = touch.clientY
    const deltaY = touchStartY.current - endY
    const deltaTime = Date.now() - touchStartTime.current
    const currentScrollTop = current.scrollTop

    // Calculate velocity (pixels per millisecond)
    const velocity = deltaTime > 0 ? Math.abs(deltaY) / deltaTime : 0

    // Check boundaries
    const tolerance = 5
    const wasAtTop = touchStartScrollTop.current <= tolerance
    const wasAtBottom = Math.abs(current.scrollHeight - current.clientHeight - touchStartScrollTop.current) <= tolerance
    const isAtTop = currentScrollTop <= tolerance
    const isAtBottom = Math.abs(current.scrollHeight - current.clientHeight - currentScrollTop) <= tolerance

    // Thresholds for section change
    const distanceThreshold = 50 // pixels
    const velocityThreshold = 0.3 // pixels per ms (pretty fast swipe)

    const isStrongGesture = Math.abs(deltaY) > distanceThreshold || velocity > velocityThreshold

    if (isStrongGesture) {
      if (deltaY > 0 && (wasAtBottom || isAtBottom)) {
        // Swiped up (content moves up, next section)
        changeSection('down')
      } else if (deltaY < 0 && (wasAtTop || isAtTop)) {
        // Swiped down (content moves down, previous section)
        changeSection('up')
      }
    }

    // Reset touch tracking
    touchStartY.current = null
    touchStartTime.current = 0
    touchStartScrollTop.current = 0
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (wheelEventTimer.current) {
        clearTimeout(wheelEventTimer.current)
      }
    }
  }, [])

  return (
    <div
      className={twMerge('h-screen overflow-auto overscroll-none', className)}
      ref={rootRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  )
}
