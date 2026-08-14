'use client'

import { useTranslations } from 'next-intl'

import { Picture } from '@/components/elements/media/Picture'
import { Grid } from '@/components/structures/layout/Grid'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Section } from '@/components/structures/layout/Section'
import { GALLERY } from '@/declarations/content'
import { BLOCK_STYLES, CARD_STYLES } from '@/declarations/ui/variants'
import type { MediaItem } from '@/types/content'

export interface GallerySectionProps {
  items?: MediaItem[]
}

/**
 * Gallery section
 * @param {GallerySectionProps} props - Gallery section props
 * @return {JSX.Element} - Rendered section
 */

export const GallerySection = ({ items = GALLERY }: GallerySectionProps) => {
  const t = useTranslations('sections.gallery')

  return (
    <Section anchor="gallery">
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} />
        <Grid columns={3}>
          {items.map((item) => (
            <Picture
              key={item.id}
              src={item.src}
              alt={t(`items.${item.translationKey}`)}
              ratio="landscape"
              className={CARD_STYLES.frame}
            />
          ))}
        </Grid>
      </div>
    </Section>
  )
}
