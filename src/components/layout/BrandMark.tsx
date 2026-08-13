import {
  BRAND_CUT_WIDTH,
  BRAND_GRADIENT_STOPS,
  BRAND_PATHS,
  BRAND_STROKE_WIDTH,
  BRAND_VIEW_BOX,
} from '@/declarations/ui/brand'
import { BRAND_STYLES } from '@/declarations/ui/variants'
import { NamingService } from '@/services/NamingService'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

export interface BrandMarkProps extends Styleable {
  // Namespaces the gradient and mask, one lockup can appear twice per page
  name: string
}

/**
 * Brand monogram
 * @param {BrandMarkProps} props - Mark props
 * @return {JSX.Element} - Rendered monogram
 */

export const BrandMark = ({ name, className }: BrandMarkProps) => {
  const gradientId = NamingService.toDomId(name, 'bolt')
  const maskId = NamingService.toDomId(name, 'cut')

  return (
    <svg
      viewBox={BRAND_VIEW_BOX}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn(BRAND_STYLES.mark, className)}>
      <defs>
        <linearGradient
          id={gradientId}
          x1="48"
          y1="4"
          x2="82"
          y2="76"
          gradientUnits="userSpaceOnUse">
          {BRAND_GRADIENT_STOPS.map((stop) => (
            <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
        <mask id={maskId}>
          <rect x="2" y="-6" width="94" height="82" fill="#fff" />
          <path
            d={BRAND_PATHS.bolt}
            fill="#000"
            stroke="#000"
            strokeWidth={BRAND_CUT_WIDTH}
            strokeLinejoin="miter"
            strokeMiterlimit={6}
          />
        </mask>
      </defs>

      <path
        d={BRAND_PATHS.letter}
        stroke="currentColor"
        strokeWidth={BRAND_STROKE_WIDTH}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
      />
      <path
        d={BRAND_PATHS.initial}
        stroke={`url(#${gradientId})`}
        strokeWidth={BRAND_STROKE_WIDTH}
        strokeLinejoin="miter"
        mask={`url(#${maskId})`}
      />
      <path d={BRAND_PATHS.bolt} fill={`url(#${gradientId})`} strokeMiterlimit={6} />
    </svg>
  )
}
