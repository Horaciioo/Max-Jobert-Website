'use client'

import { useTranslations } from 'next-intl'

import { Icon } from '@/components/elements/media/Icon'
import { Text } from '@/components/elements/typography/Text'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { CREDENTIALS } from '@/declarations/content'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { TONE_SOFT } from '@/declarations/ui/tokens'
import { BLOCK_STYLES, CREDENTIAL_STYLES } from '@/declarations/ui/variants'
import type { CredentialItem } from '@/types/content'
import { cn } from '@/utils/classnames'

export interface CredentialSectionProps {
  items?: CredentialItem[]
}

/**
 * Qualifications held, the claim the method rests on
 * @param {CredentialSectionProps} props - Credential props
 * @return {JSX.Element} - Rendered section
 */

export const CredentialSection = ({ items = CREDENTIALS }: CredentialSectionProps) => {
  const t = useTranslations('sections.credentials')

  return (
    <Section anchor="credentials">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div
          className={CREDENTIAL_STYLES.grid}
          {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
          {items.map((item) => (
            <article key={item.id} className={CREDENTIAL_STYLES.card}>
              <div className={CREDENTIAL_STYLES.head}>
                <span className={cn(CREDENTIAL_STYLES.iconTile, TONE_SOFT[item.tone ?? 'primary'])}>
                  <Icon name={item.icon} size="md" />
                </span>
                <span className={CREDENTIAL_STYLES.year}>{item.year}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={CREDENTIAL_STYLES.title}>
                  {t(`items.${item.translationKey}.title`)}
                </h3>
                <p className={CREDENTIAL_STYLES.issuer}>
                  {t(`items.${item.translationKey}.issuer`)}
                </p>
              </div>
              <Text appearance="description">{t(`items.${item.translationKey}.description`)}</Text>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
