import type { ReactNode } from 'react'

import { DEVICE_STYLES } from '@/declarations/ui/variants'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

export interface DeviceFrameProps extends Styleable {
  // Accessible name of what the screen shows
  label: string
  children: ReactNode
}

/**
 * Handset shell, its screen holding whatever it is given
 * @param {DeviceFrameProps} props - Device frame props
 * @return {JSX.Element} - Rendered shell
 */

export const DeviceFrame = ({ label, children, className }: DeviceFrameProps) => (
  <div className={cn(DEVICE_STYLES.frame, className)} role="img" aria-label={label}>
    <span aria-hidden="true" className={DEVICE_STYLES.button} />
    <div className={DEVICE_STYLES.screen}>
      <span aria-hidden="true" className={DEVICE_STYLES.notch} />
      <div className={DEVICE_STYLES.scroller}>{children}</div>
    </div>
    <span aria-hidden="true" className={DEVICE_STYLES.rim} />
  </div>
)
