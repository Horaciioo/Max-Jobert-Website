'use client'

import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'

import { SCROLL_BAR_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import { ScrollService } from '@/services/ScrollService'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

const { scrollBarIdleMs } = ConfigurationService.timings

// Shortest the thumb is allowed to get on a very long page
const MINIMUM_THUMB_RATIO = 0.08

/**
 * Overlay scroll bar, only its thumb showing and only while the page travels
 * @param {Styleable} props - Scroll bar props
 * @return {JSX.Element | null} - Rendered bar
 */

export const ScrollBar = ({ className }: Styleable) => {
  const { offset, progress, visibleRatio } = ScrollService.use()

  const trackRef = useRef<HTMLDivElement>(null)
  // Grab point inside the thumb, kept across the whole drag
  const grabOffsetRef = useRef(0)
  const previousOffsetRef = useRef(offset)

  const [isVisible, setIsVisible] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  // Shown by movement alone, then faded back out once the page stands still
  useEffect(() => {
    if (previousOffsetRef.current === offset) return undefined
    previousOffsetRef.current = offset
    setIsVisible(true)

    const timer = window.setTimeout(() => setIsVisible(false), scrollBarIdleMs)

    return () => window.clearTimeout(timer)
  }, [offset])

  const thumbRatio = Math.max(MINIMUM_THUMB_RATIO, visibleRatio)

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const thumb = event.currentTarget
    grabOffsetRef.current = event.clientY - thumb.getBoundingClientRect().top
    thumb.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  // The remaining track length is what the grab point maps onto
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!isDragging || !track) return

    const bounds = track.getBoundingClientRect()
    const travel = bounds.height * (1 - thumbRatio)
    if (travel <= 0) return

    ScrollService.toProgress((event.clientY - bounds.top - grabOffsetRef.current) / travel)
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
    setIsDragging(false)
  }

  // Nothing to travel, nothing to draw
  if (visibleRatio >= 1) return null

  return (
    <div ref={trackRef} aria-hidden="true" className={cn(SCROLL_BAR_STYLES.track, className)}>
      <div
        style={{
          height: `${thumbRatio * 100}%`,
          top: `calc(${progress} * (100% - ${thumbRatio * 100}%))`,
        }}
        className={cn(
          SCROLL_BAR_STYLES.thumb,
          (isVisible || isDragging) && SCROLL_BAR_STYLES.thumbVisible,
          isDragging && SCROLL_BAR_STYLES.thumbDragging
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
    </div>
  )
}
