import type { ElementType, ReactNode } from 'react'

import { MOTION } from '@/declarations/ui/tokens'
import { TEXT_STYLES } from '@/declarations/ui/variants'
import type { TextStyle } from '@/declarations/ui/variants'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

// Body-level appearances reveal as the page scrolls past them
const REVEALED_APPEARANCES: TextStyle[] = ['lead', 'body', 'description']

export interface TextProps extends Styleable {
  // Named style
  appearance?: TextStyle
  as?: ElementType
  // Scroll-linked reveal, defaults by appearance
  reveal?: boolean
  children: ReactNode
}

/**
 * Text
 * @param {TextProps} props - Text props
 * @return {JSX.Element} - Rendered text
 */

export const Text = ({
  appearance = 'body',
  as: Tag = 'p',
  reveal,
  children,
  className,
}: TextProps) => (
  <Tag
    className={cn(
      TEXT_STYLES[appearance],
      (reveal ?? REVEALED_APPEARANCES.includes(appearance)) && MOTION.reveal,
      className
    )}>
    {children}
  </Tag>
)
