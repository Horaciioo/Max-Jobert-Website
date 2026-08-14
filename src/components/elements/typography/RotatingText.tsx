'use client'

import { useEffect, useState } from 'react'

import { MOTION_ALLOWED_QUERY } from '@/declarations/ui/motion'
import { LAYOUT, ROTATING_TEXT_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

const { typingStepMs, erasingStepMs, typingHoldMs } = ConfigurationService.timings

export interface RotatingTextProps extends Styleable {
  // Already translated phrases
  phrases: string[]
}

/**
 * Phrase written out then wiped, one after another
 * @param {RotatingTextProps} props - Rotating text props
 * @return {JSX.Element} - Rendered phrase
 */

export const RotatingText = ({ phrases, className }: RotatingTextProps) => {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(phrases[0]?.length ?? 0)
  const [isErasing, setIsErasing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Server and first paint both hold the whole first phrase, so nothing mismatches
  useEffect(() => {
    setIsPlaying(window.matchMedia(MOTION_ALLOWED_QUERY).matches)
  }, [])

  const phrase = phrases[index] ?? ''
  const total = phrases.length

  // Depends on the phrase and the count, never on the array: a re-render of the
  // parent rebuilds that array and would restart the timer on every pass
  useEffect(() => {
    if (!isPlaying || total === 0) return undefined

    // Full phrase held on screen before the wipe starts
    if (!isErasing && length === phrase.length) {
      const hold = window.setTimeout(() => setIsErasing(true), typingHoldMs)

      return () => window.clearTimeout(hold)
    }

    // Wiped down to nothing, the next phrase takes over
    if (isErasing && length === 0) {
      setIsErasing(false)
      setIndex((current) => (current + 1) % total)

      return undefined
    }

    const step = window.setTimeout(
      () => setLength((current) => current + (isErasing ? -1 : 1)),
      isErasing ? erasingStepMs : typingStepMs
    )

    return () => window.clearTimeout(step)
  }, [isErasing, isPlaying, length, phrase, total])

  return (
    <span className={cn(ROTATING_TEXT_STYLES.frame, className)}>
      {/* Read out once as a list, rather than letter by letter as it is typed */}
      <span aria-hidden="true">{phrase.slice(0, length)}</span>
      {isPlaying && <span aria-hidden="true" className={ROTATING_TEXT_STYLES.caret} />}
      <span className={LAYOUT.srOnly}>{phrases.join(', ')}</span>
    </span>
  )
}
