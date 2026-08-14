'use client'

import { useTranslations } from 'next-intl'

import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { RATE_FACTORS } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, RATE_STYLES } from '@/declarations/ui/variants'
import type { FactorItem } from '@/types/content'

export interface RateSectionProps {
  items?: FactorItem[]
}

/**
 * What makes a quoted amount move
 * @param {RateSectionProps} props - Rate props
 * @return {JSX.Element} - Rendered section
 */

export const RateSection = ({ items = RATE_FACTORS }: RateSectionProps) => {
  const t = useTranslations('sections.rates')

  return (
    <Section anchor="rates">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} appearance="accent" />

        <div className={RATE_STYLES.grid} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
          {items.map((item, index) => (
            <article key={item.id} className={RATE_STYLES.cell}>
              <span className={RATE_STYLES.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={RATE_STYLES.title}>{t(`items.${item.translationKey}.title`)}</h3>
              <Text appearance="description">{t(`items.${item.translationKey}.description`)}</Text>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
