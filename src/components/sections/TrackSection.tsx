'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import { IconButton } from '@/components/elements/actions/IconButton'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, TRACK_STYLES } from '@/declarations/ui/variants'
import type { TimelineItem } from '@/types/content'
import { cn } from '@/utils/classnames'

// Fraction of the viewport a single arrow press travels
const STEP_RATIO = 0.8

export interface TrackSectionProps {
  // Translation block under sections
  namespace: string
  items: TimelineItem[]
}

/**
 * Ordered protocol laid out left to right, scrolled at the reader's own pace
 * @param {TrackSectionProps} props - Track props
 * @return {JSX.Element} - Rendered section
 */

export const TrackSection = ({ namespace, items }: TrackSectionProps) => {
  const t = useTranslations(`sections.${namespace}`)
  const actions = useTranslations('actions')
  const viewportRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  // Progress is read off the scroller itself, so a drag and an arrow agree
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return undefined

    const read = () => {
      const travel = viewport.scrollWidth - viewport.clientWidth

      setProgress(travel <= 0 ? 1 : viewport.scrollLeft / travel)
    }

    read()
    viewport.addEventListener('scroll', read, { passive: true })

    return () => viewport.removeEventListener('scroll', read)
  }, [items])

  const scrollBy = (direction: number) => {
    const viewport = viewportRef.current
    if (!viewport) return

    viewport.scrollBy({ left: viewport.clientWidth * STEP_RATIO * direction, behavior: 'smooth' })
  }

  return (
    <Section anchor="sequence">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div className={TRACK_STYLES.frame}>
          <div
            ref={viewportRef}
            className={TRACK_STYLES.viewport}
            {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
            {items.map((item, index) => (
              <article key={item.id} className={TRACK_STYLES.step}>
                <div aria-hidden="true" className={TRACK_STYLES.rail}>
                  <span
                    className={cn(TRACK_STYLES.marker, index === 0 && TRACK_STYLES.markerActive)}
                  />
                  <span className={TRACK_STYLES.railLine} />
                </div>

                <div className={TRACK_STYLES.body}>
                  <span className={TRACK_STYLES.stamp}>{item.date}</span>
                  <h3 className={TRACK_STYLES.title}>{t(`items.${item.translationKey}.title`)}</h3>
                  <Text appearance="description" className={TRACK_STYLES.description}>
                    {t(`items.${item.translationKey}.description`)}
                  </Text>
                </div>
              </article>
            ))}
          </div>

          <div className={TRACK_STYLES.controls}>
            <span aria-hidden="true" className={TRACK_STYLES.progress}>
              <span
                className={TRACK_STYLES.progressBar}
                style={{ transform: `scaleX(${Math.max(progress, 0.06)})` }}
              />
            </span>

            <div className={TRACK_STYLES.actions}>
              <IconButton
                icon="arrowLeft"
                variant="outline"
                label={actions('previous')}
                onClick={() => scrollBy(-1)}
              />
              <IconButton
                icon="arrowRight"
                variant="outline"
                label={actions('next')}
                onClick={() => scrollBy(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
