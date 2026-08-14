'use client'

import { useTranslations } from 'next-intl'

import { Picture } from '@/components/elements/media/Picture'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, MEDIA_STYLES, ZIGZAG_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { TimelineItem } from '@/types/content'
import { cn } from '@/utils/classnames'

const { md } = ConfigurationService.viewport.breakpoints

export interface ZigzagSectionProps {
  // Translation block under sections
  namespace: string
  items: TimelineItem[]
}

/**
 * Alternating trail, each step hung opposite the previous one
 * @param {ZigzagSectionProps} props - Zigzag props
 * @return {JSX.Element} - Rendered section
 */

export const ZigzagSection = ({ namespace, items }: ZigzagSectionProps) => {
  const t = useTranslations(`sections.${namespace}`)

  return (
    <Section anchor="sequence">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div className={ZIGZAG_STYLES.frame}>
          <span aria-hidden="true" className={ZIGZAG_STYLES.spine}>
            <span
              className={ZIGZAG_STYLES.spineFill}
              {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.trace }}>
              <span className={ZIGZAG_STYLES.spineHead} />
            </span>
          </span>

          <ol className={ZIGZAG_STYLES.list}>
            {items.map((item, index) => {
              // Odd steps swap sides, which also decides where their trail lands
              const isReversed = index % 2 === 1
              const isLast = index === items.length - 1

              return (
                <li key={item.id} className={ZIGZAG_STYLES.step}>
                  <article
                    className={cn(ZIGZAG_STYLES.row, isReversed && ZIGZAG_STYLES.rowReversed)}>
                    <div
                      className={ZIGZAG_STYLES.body}
                      {...{
                        [MOTION_ATTRIBUTE]: isReversed
                          ? MOTION_NAMES.slideReverse
                          : MOTION_NAMES.slide,
                      }}>
                      <span className={ZIGZAG_STYLES.stamp}>{item.date}</span>
                      <h3 className={ZIGZAG_STYLES.title}>
                        {t(`items.${item.translationKey}.title`)}
                      </h3>
                      <Text appearance="description" className={ZIGZAG_STYLES.description}>
                        {t(`items.${item.translationKey}.description`)}
                      </Text>
                    </div>

                    {item.image && (
                      <div
                        className={ZIGZAG_STYLES.media}
                        {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
                        <span aria-hidden="true" className={ZIGZAG_STYLES.mediaShadow} />
                        <div
                          className={cn(
                            isReversed ? MEDIA_STYLES.frameReverse : MEDIA_STYLES.frame,
                            ZIGZAG_STYLES.mediaFrame
                          )}>
                          <Picture
                            src={item.image}
                            alt={t(`items.${item.translationKey}.imageAlt`)}
                            stretch
                            shadow={false}
                            reveal={false}
                            sizes={`(max-width: ${md}px) 100vw, 45vw`}
                          />
                        </div>
                      </div>
                    )}
                  </article>

                  {!isLast && (
                    <>
                      <span
                        aria-hidden="true"
                        className={ZIGZAG_STYLES.trail}
                        {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.fade }}>
                        <span
                          className={cn(
                            ZIGZAG_STYLES.trailHead,
                            isReversed
                              ? ZIGZAG_STYLES.trailHeadReversed
                              : ZIGZAG_STYLES.trailHeadForward
                          )}
                        />
                        <span
                          className={cn(
                            ZIGZAG_STYLES.trailTail,
                            isReversed
                              ? ZIGZAG_STYLES.trailTailReversed
                              : ZIGZAG_STYLES.trailTailForward
                          )}
                        />
                      </span>
                      <span aria-hidden="true" className={ZIGZAG_STYLES.trailCompact} />
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </Section>
  )
}
