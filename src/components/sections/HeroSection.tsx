'use client'

import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { Picture } from '@/components/elements/media/Picture'
import { Heading } from '@/components/elements/typography/Heading'
import { Text } from '@/components/elements/typography/Text'
import { Container } from '@/components/structures/layout/Container'
import { PHOTOS } from '@/declarations/content'
import { SECTION_ANCHORS } from '@/declarations/routes'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { HERO_STYLES } from '@/declarations/ui/variants'
import { NavigationService } from '@/services/NavigationService'
import type { Styleable } from '@/types/common'
import type { RouteId } from '@/types/navigation'
import { cn } from '@/utils/classnames'

export interface HeroSectionProps extends Styleable {
  // Route behind the leading action
  primaryRoute?: RouteId
  secondaryRoute?: RouteId
  image?: string
  // Looping footage, dissolved on scroll when supplied
  video?: string
}

/**
 * Opening section, the picture receding as the page takes over
 * @param {HeroSectionProps} props - Hero props
 * @return {JSX.Element} - Rendered hero
 */

export const HeroSection = ({
  primaryRoute,
  secondaryRoute,
  image = PHOTOS.hero,
  video,
  className,
}: HeroSectionProps) => {
  const t = useTranslations('sections.hero')
  const actions = useTranslations('actions')
  const primary = primaryRoute ?? NavigationService.callToActionRoute()

  return (
    <section
      id={SECTION_ANCHORS.hero}
      className={cn(HERO_STYLES.frame, HERO_STYLES.offset, className)}>
      <div className={HERO_STYLES.plate} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.curtainMedia }}>
        {video ? (
          <video
            className={HERO_STYLES.plateImage}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true">
            <source src={video} />
          </video>
        ) : (
          <Picture
            src={image}
            alt={t('imageAlt')}
            stretch
            priority
            sizes="100vw"
            className={HERO_STYLES.plateImage}
          />
        )}
        <span aria-hidden="true" className={HERO_STYLES.scrim} />
        <span aria-hidden="true" className={HERO_STYLES.scrimSide} />
      </div>

      <Container>
        <div className={HERO_STYLES.content} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
          <Heading level={1} className={HERO_STYLES.headline}>
            {t('title')}
          </Heading>
          <Text appearance="lead" className={HERO_STYLES.lead}>
            {t('description')}
          </Text>
          <div className={HERO_STYLES.actions}>
            <ActionLink route={primary} size="lg" icon="arrowRight" iconPosition="right">
              {actions(NavigationService.ctaActionOf(primary))}
            </ActionLink>
            {secondaryRoute && (
              <ActionLink route={secondaryRoute} variant="outline" size="lg">
                {t('secondaryAction')}
              </ActionLink>
            )}
          </div>
          <div className={HERO_STYLES.cue}>
            <span aria-hidden="true" className={HERO_STYLES.cueLine} />
            <span className={HERO_STYLES.cueLabel}>{t('cue')}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
