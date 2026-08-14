'use client'

import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { Picture } from '@/components/elements/media/Picture'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Container } from '@/components/structures/layout/Container'
import { PHOTOS } from '@/declarations/content'
import { SECTION_ANCHORS } from '@/declarations/routes'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, CALL_TO_ACTION_STYLES } from '@/declarations/ui/variants'
import { NavigationService } from '@/services/NavigationService'
import type { Styleable } from '@/types/common'
import type { RouteId } from '@/types/navigation'
import { cn } from '@/utils/classnames'

export interface CallToActionSectionProps extends Styleable {
  route?: RouteId
  image?: string
}

/**
 * Closing ask, over a full-bleed picture
 * @param {CallToActionSectionProps} props - CTA section props
 * @return {JSX.Element} - Rendered section
 */

export const CallToActionSection = ({
  route,
  image = PHOTOS.floor,
  className,
}: CallToActionSectionProps) => {
  const t = useTranslations('sections.callToAction')
  const actions = useTranslations('actions')
  const target = route ?? NavigationService.callToActionRoute()

  return (
    <section
      id={SECTION_ANCHORS.callToAction}
      className={cn(CALL_TO_ACTION_STYLES.frame, className)}>
      <div className={CALL_TO_ACTION_STYLES.plate}>
        <Picture
          src={image}
          alt={t('imageAlt')}
          stretch
          shadow={false}
          reveal={false}
          sizes="100vw"
          className={CALL_TO_ACTION_STYLES.plateImage}
        />
      </div>
      <div aria-hidden="true" className={CALL_TO_ACTION_STYLES.scrim} />

      <Container>
        <div className={CALL_TO_ACTION_STYLES.body}>
          <div className={BLOCK_STYLES.stack}>
            <SectionHeading title={t('title')} description={t('description')} appearance="media" />
          </div>
          <div {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
            <ActionLink route={target} size="lg" icon="arrowRight" iconPosition="right">
              {actions(NavigationService.ctaActionOf(target))}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
