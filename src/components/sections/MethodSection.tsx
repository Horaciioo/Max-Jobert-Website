'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { SkeletonSheet } from '@/components/structures/data/SkeletonSheet'
import { DeviceFrame } from '@/components/structures/layout/DeviceFrame'
import { Section } from '@/components/structures/layout/Section'
import { METHOD_SCREENS } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, DECK_REACH, DECK_SLOTS, METHOD_STYLES } from '@/declarations/ui/variants'
import type { ScreenItem } from '@/types/content'
import { cn } from '@/utils/classnames'

export interface MethodSectionProps {
  items?: ScreenItem[]
}

/**
 * Tracking sheets fanned out, the chosen one brought to the front
 * @param {MethodSectionProps} props - Method props
 * @return {JSX.Element} - Rendered section
 */

export const MethodSection = ({ items = METHOD_SCREENS }: MethodSectionProps) => {
  const t = useTranslations('sections.method')
  const [activeIndex, setActiveIndex] = useState(0)

  const active = items[activeIndex] ?? items[0]

  // Distance from the front card, clamped so a long deck still has a last slot
  const slotOf = (index: number): string => {
    const offset = Math.max(-DECK_REACH, Math.min(DECK_REACH, index - activeIndex))

    return DECK_SLOTS[String(offset) as keyof typeof DECK_SLOTS]
  }

  if (!active) return null

  return (
    <Section anchor="analysis" spacing="lg">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div className={METHOD_STYLES.frame}>
          <div className={METHOD_STYLES.deck} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.fade }}>
            {items.map((item, index) => {
              const scope = `items.${item.translationKey}`
              const isActive = index === activeIndex

              return (
                <button
                  key={item.id}
                  type="button"
                  // The front card is the content, not a control
                  tabIndex={isActive ? -1 : 0}
                  aria-hidden={isActive}
                  aria-label={t(`${scope}.title`)}
                  className={cn(
                    METHOD_STYLES.card,
                    slotOf(index),
                    !isActive && METHOD_STYLES.cardIdle
                  )}
                  onClick={() => setActiveIndex(index)}>
                  <DeviceFrame label={t(`${scope}.title`)}>
                    <SkeletonSheet blocks={item.blocks} translate={(key) => t(`${scope}.${key}`)} />
                  </DeviceFrame>
                </button>
              )
            })}
          </div>

          <div className={METHOD_STYLES.panel} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
            <span className={METHOD_STYLES.stamp}>
              {`${String(activeIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`}
            </span>
            <h3 className={METHOD_STYLES.title}>{t(`items.${active.translationKey}.title`)}</h3>
            <Text appearance="description" className={METHOD_STYLES.description}>
              {t(`items.${active.translationKey}.description`)}
            </Text>

            <div className={METHOD_STYLES.markers}>
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-current={index === activeIndex}
                  className={cn(
                    METHOD_STYLES.marker,
                    index === activeIndex ? METHOD_STYLES.markerActive : METHOD_STYLES.markerIdle
                  )}
                  onClick={() => setActiveIndex(index)}>
                  <span className={METHOD_STYLES.markerLabel}>
                    {t(`items.${item.translationKey}.title`)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
