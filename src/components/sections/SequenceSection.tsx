'use client'

import { useTranslations } from 'next-intl'

import { Picture } from '@/components/elements/media/Picture'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, MEDIA_STYLES, SEQUENCE_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { TimelineItem } from '@/types/content'
import { cn } from '@/utils/classnames'

const { lg } = ConfigurationService.viewport.breakpoints

export interface SequenceSectionProps {
  // Translation block under sections
  namespace: string
  items: TimelineItem[]
  // Portrait held alongside the rail, when the page has one to show
  image?: string
}

/**
 * Marked moments hung off a rail, for a chronology or an ordered protocol
 * @param {SequenceSectionProps} props - Sequence props
 * @return {JSX.Element} - Rendered section
 */

export const SequenceSection = ({ namespace, items, image }: SequenceSectionProps) => {
  const t = useTranslations(`sections.${namespace}`)

  const rail = (
    <ol className={SEQUENCE_STYLES.list}>
      <span
        aria-hidden="true"
        className={SEQUENCE_STYLES.rail}
        {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.draw }}
      />
      {items.map((item) => (
        <li
          key={item.id}
          className={SEQUENCE_STYLES.item}
          {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.slide }}>
          <span aria-hidden="true" className={SEQUENCE_STYLES.marker}>
            <span className={SEQUENCE_STYLES.markerFill} />
          </span>
          <span className={SEQUENCE_STYLES.stamp}>{item.date}</span>
          <h3 className={SEQUENCE_STYLES.title}>{t(`items.${item.translationKey}.title`)}</h3>
          <Text appearance="description" className={SEQUENCE_STYLES.body}>
            {t(`items.${item.translationKey}.description`)}
          </Text>
        </li>
      ))}
    </ol>
  )

  return (
    <Section anchor="sequence">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        {image ? (
          <div className={SEQUENCE_STYLES.split}>
            {rail}
            <div className={SEQUENCE_STYLES.portrait}>
              <span aria-hidden="true" className={MEDIA_STYLES.shadow} />
              <div
                className={cn(MEDIA_STYLES.frameReverse, 'aspect-[4/5]')}
                {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.parallax }}>
                <Picture
                  src={image}
                  alt={t('imageAlt')}
                  stretch
                  shadow={false}
                  reveal={false}
                  sizes={`(max-width: ${lg}px) 100vw, 40vw`}
                />
              </div>
            </div>
          </div>
        ) : (
          rail
        )}
      </div>
    </Section>
  )
}
