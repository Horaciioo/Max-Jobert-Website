'use client'

import { useTranslations } from 'next-intl'

import { Icon } from '@/components/elements/media/Icon'
import { Picture } from '@/components/elements/media/Picture'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { OUTCOMES } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES, MOTION_VALUE_ATTRIBUTE } from '@/declarations/ui/motion'
import { BLOCK_STYLES, MEDIA_STYLES, OUTCOME_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { OutcomeItem } from '@/types/content'
import { cn } from '@/utils/classnames'

const { md } = ConfigurationService.viewport.breakpoints

// Seconds between two neighbouring cards, so the row never drifts in lockstep
const FLOAT_OFFSET_SECONDS = 0.9

export interface OutcomeSectionProps {
  items?: OutcomeItem[]
}

/**
 * What a client actually leaves with
 * @param {OutcomeSectionProps} props - Outcome props
 * @return {JSX.Element} - Rendered section
 */

export const OutcomeSection = ({ items = OUTCOMES }: OutcomeSectionProps) => {
  const t = useTranslations('sections.outcomes')

  return (
    <Section anchor="features" spacing="lg">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div className={OUTCOME_STYLES.grid}>
          {items.map((item, index) => (
            <article
              key={item.id}
              className={OUTCOME_STYLES.card}
              {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
              <div
                className={cn(OUTCOME_STYLES.media, MEDIA_STYLES.frame, MEDIA_STYLES.duotone)}
                {...{
                  [MOTION_ATTRIBUTE]: MOTION_NAMES.float,
                  [MOTION_VALUE_ATTRIBUTE]: index * FLOAT_OFFSET_SECONDS,
                }}>
                <Picture
                  src={item.image}
                  alt={t(`items.${item.translationKey}.imageAlt`)}
                  stretch
                  sizes={`(max-width: ${md}px) 100vw, 33vw`}
                />
              </div>

              <div className={OUTCOME_STYLES.body}>
                <div className={OUTCOME_STYLES.head}>
                  <span className={OUTCOME_STYLES.iconTile}>
                    <Icon name={item.icon} size="sm" />
                  </span>
                  <h3 className={OUTCOME_STYLES.title}>
                    {t(`items.${item.translationKey}.title`)}
                  </h3>
                </div>
                <Text appearance="description">
                  {t(`items.${item.translationKey}.description`)}
                </Text>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
