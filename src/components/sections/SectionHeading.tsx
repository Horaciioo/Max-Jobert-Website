import { Text } from '@/components/elements/typography/Text'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES } from '@/declarations/ui/variants'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

export interface SectionHeadingProps extends Styleable {
  title: string
  description?: string
  // Accent blocks are reserved for the pages that sell
  accent?: boolean
  centered?: boolean
}

/**
 * Section heading, set inside a filled block
 * @param {SectionHeadingProps} props - Heading props
 * @return {JSX.Element} - Rendered heading
 */

export const SectionHeading = ({
  title,
  description,
  accent = false,
  centered = false,
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(BLOCK_STYLES.header, centered && BLOCK_STYLES.headerCentered, className)}
    {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
    <h2 className={cn(BLOCK_STYLES.frame, accent ? BLOCK_STYLES.toneAccent : BLOCK_STYLES.tone)}>
      <span className={accent ? BLOCK_STYLES.titleAccent : BLOCK_STYLES.title}>{title}</span>
    </h2>
    {description && <Text className={BLOCK_STYLES.description}>{description}</Text>}
  </div>
)
