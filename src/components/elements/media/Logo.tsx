import Image from 'next/image'

import { BRAND_STYLES, NAVIGATION_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

export interface LogoProps extends Styleable {
  // Wordmark visibility
  withName?: boolean
}

const { logo, name } = ConfigurationService.site

// Source resolution, the class sets the rendered size
const LOGO_SOURCE_SIZE = 256

/**
 * Site logo
 * @param {LogoProps} props - Logo props
 * @return {JSX.Element} - Rendered logo
 */

export const Logo = ({ withName = true, className }: LogoProps) => (
  <span className={cn(BRAND_STYLES.lockup, className)}>
    {logo.image ? (
      <Image
        src={logo.image}
        alt={name}
        width={LOGO_SOURCE_SIZE}
        height={LOGO_SOURCE_SIZE}
        className={BRAND_STYLES.image}
      />
    ) : (
      <span className={NAVIGATION_STYLES.brandSymbol}>{logo.symbol}</span>
    )}
    {withName && <span>{name}</span>}
  </span>
)
