'use client'

import { useTranslations } from 'next-intl'

import { Alert } from '@/components/elements/feedback/Alert'
import { Icon } from '@/components/elements/media/Icon'
import { Text } from '@/components/elements/typography/Text'
import { Section } from '@/components/structures/layout/Section'
import { DEVELOPMENT_STYLES } from '@/declarations/ui/variants'
import type { Styleable } from '@/types/common'

export interface DevelopmentSectionProps extends Styleable {
  // Slim band above finished content, instead of a whole placeholder page
  compact?: boolean
}

/**
 * Unfinished page notice
 * @param {DevelopmentSectionProps} props - Notice props
 * @return {JSX.Element} - Rendered notice
 */

export const DevelopmentSection = ({ compact = false, className }: DevelopmentSectionProps) => {
  const t = useTranslations('sections.development')

  if (compact) {
    return (
      <Section spacing="sm" className={className}>
        <Alert tone="warning" title={t('title')} description={t('description')} icon="protocol" />
      </Section>
    )
  }

  return (
    <Section anchor="development" spacing="lg" className={className}>
      <div className={DEVELOPMENT_STYLES.frame}>
        <span className={DEVELOPMENT_STYLES.iconTile}>
          <Icon name="protocol" size="lg" />
        </span>
        <p className={DEVELOPMENT_STYLES.title}>{t('title')}</p>
        <Text className={DEVELOPMENT_STYLES.description}>{t('description')}</Text>
      </div>
    </Section>
  )
}
