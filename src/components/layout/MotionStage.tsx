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

  // Rebuilt on navigation, the previous page's triggers are reverted first
  useEffect(() => MotionService.mount(document.body), [pathname])

  return null
}
