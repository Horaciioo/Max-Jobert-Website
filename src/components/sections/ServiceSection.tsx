'use client'

import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { Picture } from '@/components/elements/media/Picture'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { SERVICES } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, MEDIA_STYLES, SERVICE_STYLES } from '@/declarations/ui/variants'
import { NavigationService } from '@/services/NavigationService'
import type { ServiceItem } from '@/types/content'
import { cn } from '@/utils/classnames'

export interface ServiceSectionProps {
  items?: ServiceItem[]
}

/**
 * Services on offer, one editorial row each
 * @param {ServiceSectionProps} props - Service props
 * @return {JSX.Element} - Rendered section
 */

export const ServiceSection = ({ items = SERVICES }: ServiceSectionProps) => {
  const t = useTranslations('sections.services')
  const callToAction = NavigationService.callToActionRoute()

  return (
    <Section anchor="programs">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div className={SERVICE_STYLES.list}>
          {items.map((item, index) => (
            <article
              key={item.id}
              className={SERVICE_STYLES.row}
              {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
              <span className={SERVICE_STYLES.index}>{String(index + 1).padStart(2, '0')}</span>

              <div className={SERVICE_STYLES.body}>
                <h3 className={SERVICE_STYLES.title}>{t(`items.${item.translationKey}.title`)}</h3>
                <Text appearance="description" className={SERVICE_STYLES.description}>
                  {t(`items.${item.translationKey}.description`)}
                </Text>
                <div className={SERVICE_STYLES.action}>
                  <ActionLink route={callToAction} icon="arrowRight" iconPosition="right">
                    {t('discuss')}
                  </ActionLink>
                </div>
              </div>

              <div className={cn(MEDIA_STYLES.frame, SERVICE_STYLES.media)}>
                <Picture
                  src={item.image}
                  alt={t(`items.${item.translationKey}.imageAlt`)}
                  stretch
                  shadow={false}
                  reveal={false}
                  sizes="20rem"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
