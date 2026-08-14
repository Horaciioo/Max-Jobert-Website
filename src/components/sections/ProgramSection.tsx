'use client'

import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { Icon } from '@/components/elements/media/Icon'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { PROGRAMS } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, PROGRAM_STYLES } from '@/declarations/ui/variants'
import { NavigationService } from '@/services/NavigationService'
import type { ProgramItem } from '@/types/content'
import { cn } from '@/utils/classnames'

export interface ProgramSectionProps {
  items?: ProgramItem[]
}

/**
 * Coaching formats on offer
 * @param {ProgramSectionProps} props - Program props
 * @return {JSX.Element} - Rendered section
 */

export const ProgramSection = ({ items = PROGRAMS }: ProgramSectionProps) => {
  const t = useTranslations('sections.programs')
  const actions = useTranslations('actions')
  const callToAction = NavigationService.callToActionRoute()

  return (
    <Section anchor="programs">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} appearance="accent" />

        <div className={PROGRAM_STYLES.grid} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
          {items.map((item) => (
            <article
              key={item.id}
              className={cn(PROGRAM_STYLES.card, item.featured && PROGRAM_STYLES.cardFeatured)}>
              {item.featured && (
                <>
                  <span aria-hidden="true" className={PROGRAM_STYLES.wash} />
                  <span className={PROGRAM_STYLES.ribbon}>
                    <span className={PROGRAM_STYLES.ribbonFace}>{t('featured')}</span>
                    <span aria-hidden="true" className={PROGRAM_STYLES.ribbonFold} />
                  </span>
                </>
              )}

              <div className={PROGRAM_STYLES.head}>
                <h3 className={PROGRAM_STYLES.title}>{t(`items.${item.translationKey}.name`)}</h3>
                <span aria-hidden="true" className={PROGRAM_STYLES.titleRule} />
                <Text appearance="description">
                  {t(`items.${item.translationKey}.description`)}
                </Text>
              </div>

              <ul className={PROGRAM_STYLES.included}>
                {item.includedKeys.map((key) => (
                  <li key={key} className={PROGRAM_STYLES.includedRow}>
                    <Icon name="check" size="sm" className={PROGRAM_STYLES.includedIcon} />
                    {t(`included.${key}`)}
                  </li>
                ))}
              </ul>

              <ActionLink
                route={callToAction}
                variant={item.featured ? 'primary' : 'outline'}
                fullWidth>
                {actions(NavigationService.ctaActionOf(callToAction))}
              </ActionLink>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
