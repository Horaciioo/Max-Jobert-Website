import { Text } from '@/components/elements/typography/Text'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, HEADING_APPEARANCES } from '@/declarations/ui/variants'
import type { HeadingAppearance } from '@/declarations/ui/variants'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

export interface SectionHeadingProps extends Styleable {
  title: string
  description?: string
  // Declared appearance, media being reserved for a title set over a photograph
  appearance?: HeadingAppearance
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
  appearance = 'plain',
  centered = false,
  className,
}: SectionHeadingProps) => {
  const styles = HEADING_APPEARANCES[appearance]

  return (
    <div className={cn(BLOCK_STYLES.header, centered && BLOCK_STYLES.headerCentered, className)}>
      <h2
        className={cn(BLOCK_STYLES.frame, styles.block)}
        {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.sweep }}>
        <span className={styles.title}>{title}</span>
      </h2>
      {description && <Text className={styles.description}>{description}</Text>}
    </div>
  )
}
