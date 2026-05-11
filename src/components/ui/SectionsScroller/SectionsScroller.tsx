'use client'

import { SectionsScrollerContextProvider, useSectionsScrollerContext } from '@/components/ui'
import React, { Children, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { SectionIndicator } from './SectionIndicator'
import { SectionsScrollerItem } from './SectionsScrollerItem'
import { cn } from '@/lib/utils'

export interface SectionsScrollerProps {
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

// Gap (ms) of wheel-event silence that ends a gesture. Trackpad inertia stays
// under this gap, a fresh user-initiated scroll crosses it.
const GESTURE_GAP_MS = 100
// Minimum |deltaY| (px) to count as deliberate scroll intent.
const WHEEL_INTENT_THRESHOLD = 4
// Boundary-detection tolerance (px) for treating a section as at top/bottom.
const BOUNDARY_TOLERANCE = 5
// Touch-swipe thresholds.
const TOUCH_DISTANCE_THRESHOLD = 50
const TOUCH_VELOCITY_THRESHOLD = 0.3

type Direction = 'up' | 'down'

const SectionsScrollerInternal = (props: SectionsScrollerProps) => {
  const { children, className } = props
  const { sectionsCount, activeSectionIndex, changeSection, getSectionElement } = useSectionsScrollerContext()

  const rootRef = useRef<HTMLDivElement>(null)

  const isAnimating = useRef<boolean>(false)
  const gestureActive = useRef<boolean>(false)
  const lastWheelTime = useRef<number>(0)
  const activeSectionIndexRef = useRef<number>(activeSectionIndex)

  const touchStartY = useRef<number | null>(null)
  const touchStartTime = useRef<number>(0)
  const touchStartScrollTop = useRef<number>(0)

  useEffect(() => {
    activeSectionIndexRef.current = activeSectionIndex
  }, [activeSectionIndex])

  useEffect(() => {
    const root = rootRef.current
    if (!root) {
      return
    }

    const getActiveElement = (): HTMLElement | null => {
      return getSectionElement(activeSectionIndexRef.current)
    }

    const isAtBoundary = (direction: Direction): boolean => {
      const el = getActiveElement()
      if (!el) {
        return true
      }
      if (direction === 'up') {
        return el.scrollTop <= BOUNDARY_TOLERANCE
      }
      return Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) <= BOUNDARY_TOLERANCE
    }

    const advance = (direction: Direction) => {
      const current = activeSectionIndexRef.current
      const target = direction === 'up' ? current - 1 : current + 1
      if (target < 0 || target >= sectionsCount) {
        return false
      }
      changeSection(target)
      return true
    }

    const handleWheel = (event: WheelEvent) => {
      const now = Date.now()
      const isNewGesture = now - lastWheelTime.current > GESTURE_GAP_MS
      lastWheelTime.current = now

      if (isNewGesture) {
        gestureActive.current = false
      }

      if (gestureActive.current) {
        event.preventDefault()
        return
      }

      if (isAnimating.current) {
        event.preventDefault()
        return
      }

      if (Math.abs(event.deltaY) < WHEEL_INTENT_THRESHOLD) {
        return
      }

      const direction: Direction = event.deltaY > 0 ? 'down' : 'up'

      if (!isAtBoundary(direction)) {
        return
      }

      event.preventDefault()
      const advanced = advance(direction)
      if (advanced) {
        gestureActive.current = true
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) {
        return
      }
      const el = getActiveElement()
      touchStartY.current = touch.clientY
      touchStartTime.current = Date.now()
      touchStartScrollTop.current = el ? el.scrollTop : 0
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) {
        return
      }
      const touch = event.touches[0]
      if (!touch) {
        return
      }

      const el = getActiveElement()
      if (!el) {
        return
      }

      const deltaY = touchStartY.current - touch.clientY
      const isSwipingDown = deltaY > 0
      const isSwipingUp = deltaY < 0

      const isAtTop = el.scrollTop <= BOUNDARY_TOLERANCE
      const isAtBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) <= BOUNDARY_TOLERANCE

      if ((isAtTop && isSwipingUp) || (isAtBottom && isSwipingDown)) {
        event.preventDefault()
      }
    }

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) {
        return
      }
      if (isAnimating.current) {
        touchStartY.current = null
        return
      }

      const touch = event.changedTouches[0]
      if (!touch) {
        touchStartY.current = null
        return
      }

      const el = getActiveElement()
      const deltaY = touchStartY.current - touch.clientY
      const deltaTime = Date.now() - touchStartTime.current
      const velocity = deltaTime > 0 ? Math.abs(deltaY) / deltaTime : 0
      const isStrongGesture =
        Math.abs(deltaY) > TOUCH_DISTANCE_THRESHOLD || velocity > TOUCH_VELOCITY_THRESHOLD

      if (isStrongGesture && el) {
        const wasAtTop = touchStartScrollTop.current <= BOUNDARY_TOLERANCE
        const wasAtBottom =
          Math.abs(el.scrollHeight - el.clientHeight - touchStartScrollTop.current) <= BOUNDARY_TOLERANCE
        const isAtTop = el.scrollTop <= BOUNDARY_TOLERANCE
        const isAtBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) <= BOUNDARY_TOLERANCE

        if (deltaY > 0 && (wasAtBottom || isAtBottom)) {
          advance('down')
        } else if (deltaY < 0 && (wasAtTop || isAtTop)) {
          advance('up')
        }
      }

      touchStartY.current = null
      touchStartTime.current = 0
      touchStartScrollTop.current = 0
    }

    root.addEventListener('wheel', handleWheel, { passive: false })
    root.addEventListener('touchstart', handleTouchStart, { passive: true })
    root.addEventListener('touchmove', handleTouchMove, { passive: false })
    root.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      root.removeEventListener('wheel', handleWheel)
      root.removeEventListener('touchstart', handleTouchStart)
      root.removeEventListener('touchmove', handleTouchMove)
      root.removeEventListener('touchend', handleTouchEnd)
    }
  }, [sectionsCount, changeSection, getSectionElement])

  return (
    <div ref={rootRef} className={cn('relative h-full overflow-hidden', className)}>
      <motion.div
        animate={{ y: `-${activeSectionIndex * 100}vh` }}
        transition={{ type: 'spring', stiffness: 120, damping: 26, mass: 0.9 }}
        onAnimationStart={() => {
          isAnimating.current = true
        }}
        onAnimationComplete={() => {
          isAnimating.current = false
        }}
      >
        {Children.map(children, (child, index) => (
          <SectionsScrollerItem key={index} sectionIndex={index}>
            {React.cloneElement(child)}
          </SectionsScrollerItem>
        ))}
      </motion.div>
      <div className='pointer-events-none absolute right-6 top-1/2 -translate-y-1/2'>
        <div className='pointer-events-auto'>
          <SectionIndicator />
        </div>
      </div>
    </div>
  )
}

export const SectionsScroller = (props: SectionsScrollerProps) => (
  <SectionsScrollerContextProvider>
    <SectionsScrollerInternal {...props} />
  </SectionsScrollerContextProvider>
)
