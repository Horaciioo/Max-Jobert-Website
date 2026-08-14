import Image from 'next/image'

import { MOTION } from '@/declarations/ui/tokens'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

// Predefined aspect ratios
export const ASPECT_RATIOS = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-video',
  banner: 'aspect-[21/9]',
} as const

export type AspectRatio = keyof typeof ASPECT_RATIOS

const { md } = ConfigurationService.viewport.breakpoints

export interface PictureProps extends Styleable {
  src: string
  // Alternative text
  alt: string
  ratio?: AspectRatio
  // Stretch to the parent instead of holding a ratio
  stretch?: boolean
  priority?: boolean
  // Image widths
  sizes?: string
  // Cast shadow beneath the frame
  shadow?: boolean
  // Scroll-linked reveal as it enters view
  reveal?: boolean
}

/**
 * Responsive picture
 * @param {PictureProps} props - Picture props
 * @return {JSX.Element} - Rendered picture
 */

export const Picture = ({
  src,
  alt,
  ratio = 'landscape',
  stretch = false,
  priority = false,
  sizes = `(max-width: ${md}px) 100vw, 33vw`,
  shadow = true,
  reveal = true,
  className,
}: PictureProps) => (
  <div
    className={cn(
      'relative w-full overflow-hidden bg-surface-strong',
      stretch ? 'h-full' : ASPECT_RATIOS[ratio],
      shadow && 'shadow-image',
      reveal && MOTION.revealPicture,
      className
    )}>
    <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
  </div>
)
