import type { HTMLAttributes, ReactNode } from 'react'

import { HEADING_STYLES } from '@/declarations/ui/variants'
import type { HeadingLevel } from '@/declarations/ui/variants'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

export interface HeadingProps extends Styleable, HTMLAttributes<HTMLHeadingElement> {
  // Semantic level
  level: HeadingLevel
  // Visual level
  appearance?: HeadingLevel
  id?: string
  children: ReactNode
}

/**
 * Heading
 * @param {HeadingProps} props - Heading props
 * @return {JSX.Element} - Rendered heading
 */

export const Heading = ({ level, appearance, id, children, className, ...rest }: HeadingProps) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'

  return (
    <Tag id={id} className={cn(HEADING_STYLES[appearance ?? level], className)} {...rest}>
      {children}
    </Tag>
  )
}
