'use client'

import { useLocale, useTranslations } from 'next-intl'

import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { STATS } from '@/declarations/content'
import {
  MOTION_ATTRIBUTE,
  MOTION_FORMAT_ATTRIBUTE,
  MOTION_NAMES,
  MOTION_VALUE_ATTRIBUTE,
} from '@/declarations/ui/motion'
import { BLOCK_STYLES, READOUT_STYLES } from '@/declarations/ui/variants'
import { FormatService } from '@/services/FormatService'
import type { StatItem } from '@/types/content'

export interface StatsSectionProps {
  items?: StatItem[]
}

/**
 * Track record, read off a rail rather than boxed in tiles
 * @param {StatsSectionProps} props - Stats props
 * @return {JSX.Element} - Rendered section
 */

export const StatsSection = ({ items = STATS }: StatsSectionProps) => {
  const t = useTranslations('sections.stats')
  const format = FormatService.for(useLocale())

  const render = (item: StatItem): string => {
    if (item.format === 'currency') return format.currency(item.value)
    if (item.format === 'percent') return format.percent(item.value)

    return format.number(item.value, 0)
  }

  return (
    <Section anchor="stats" spacing="md">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} />

        <div className={READOUT_STYLES.rail}>
          <span aria-hidden="true" className={READOUT_STYLES.line} />
          {items.map((item) => (
            <div key={item.id} className={READOUT_STYLES.cell}>
              <span aria-hidden="true" className={READOUT_STYLES.tick} />
              <p
                className={READOUT_STYLES.value}
                {...{
                  [MOTION_ATTRIBUTE]: MOTION_NAMES.count,
                  [MOTION_VALUE_ATTRIBUTE]: item.value,
                  [MOTION_FORMAT_ATTRIBUTE]: item.format,
                }}>
                {render(item)}
              </p>
              <p className={READOUT_STYLES.label}>{t(`items.${item.translationKey}.label`)}</p>
              <p className={READOUT_STYLES.note}>{t(`items.${item.translationKey}.note`)}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
