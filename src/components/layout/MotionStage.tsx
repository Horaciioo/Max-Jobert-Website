'use client'

import { useEffect } from 'react'

import { usePathname } from '@/i18n/routing'
import { MotionService } from '@/services/MotionService'

/**
 * Motion stage, wires declared effects on every page
 * @return {null} - Renders nothing
 */

export const MotionStage = () => {
  const pathname = usePathname()

  // Rebuilt on navigation
  useEffect(() => {
    MotionService.introduce(document.querySelector('main'))

    return MotionService.mount(document.body)
  }, [pathname])

  return null
}
