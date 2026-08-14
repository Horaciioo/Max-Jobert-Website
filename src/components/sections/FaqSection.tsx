'use client'

import { useTranslations } from 'next-intl'

import { Accordion } from '@/components/structures/overlays/Accordion'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { BLOCK_STYLES } from '@/declarations/ui/variants'
import { FAQ } from '@/declarations/content'
import type { FaqItem } from '@/types/content'

export interface FaqSectionProps {
  items?: FaqItem[]
}

/**
 * FAQ section
 * @param {FaqSectionProps} props - FAQ section props
 * @return {JSX.Element} - Rendered section
 */

export const FaqSection = ({ items = FAQ }: FaqSectionProps) => {
  const t = useTranslations('sections.faq')

  return (
    <Section anchor="faq" width="narrow">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} />
        <Accordion
          name="faq"
          entries={items.map((item) => ({
            id: item.id,
            title: t(`items.${item.translationKey}.question`),
            content: t(`items.${item.translationKey}.answer`),
          }))}
        />
      </div>
    </Section>
  )
}
