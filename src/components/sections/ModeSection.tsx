'use client'

import { useTranslations } from 'next-intl'

import { Picture } from '@/components/elements/media/Picture'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { SERVICE_MODES } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES, MOTION_VALUE_ATTRIBUTE } from '@/declarations/ui/motion'
import { BLOCK_STYLES, MEDIA_STYLES, MODE_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { ModeItem } from '@/types/content'
import { cn } from '@/utils/classnames'

const { md } = ConfigurationService.viewport.breakpoints

// Seconds between two neighbouring cards, so the row never drifts in lockstep
const FLOAT_OFFSET_SECONDS = 0.9

export interface ModeSectionProps {
  items?: ModeItem[]
}

/**
 * Ways of being followed, one cut picture each
 * @param {ModeSectionProps} props - Mode props
 * @return {JSX.Element} - Rendered section
 */

export const ModeSection = ({ items = SERVICE_MODES }: ModeSectionProps) => {
  const t = useTranslations('sections.modes')

  return (
    <Section anchor="features">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} appearance="accent" />

        <div className={MODE_STYLES.grid}>
          {items.map((item, index) => (
            <article
              key={item.id}
              className={MODE_STYLES.card}
              {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
              <div
                className={cn(MODE_STYLES.media, MEDIA_STYLES.frame)}
                {...{
                  [MOTION_ATTRIBUTE]: MOTION_NAMES.float,
                  [MOTION_VALUE_ATTRIBUTE]: index * FLOAT_OFFSET_SECONDS,
                }}>
                <Picture
                  src={item.image}
                  alt={t(`items.${item.translationKey}.imageAlt`)}
                  stretch
                  shadow={false}
                  reveal={false}
                  sizes={`(max-width: ${md}px) 100vw, 33vw`}
                />
              </div>

              <div className={MODE_STYLES.body}>
                <div className={MODE_STYLES.head}>
                  <span aria-hidden="true" className={MODE_STYLES.marker} />
                  <span className={MODE_STYLES.index}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={MODE_STYLES.title}>{t(`items.${item.translationKey}.title`)}</h3>
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
