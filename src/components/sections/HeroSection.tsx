'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { Picture } from '@/components/elements/media/Picture'
import { Heading } from '@/components/elements/typography/Heading'
import { RotatingText } from '@/components/elements/typography/RotatingText'
import { Text } from '@/components/elements/typography/Text'
import { Container } from '@/components/structures/layout/Container'
import { HERO_CLAIMS, PHOTOS } from '@/declarations/content'
import { SECTION_ANCHORS } from '@/declarations/routes'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { HERO_STYLES } from '@/declarations/ui/variants'
import { Link } from '@/i18n/routing'
import { ConfigurationService } from '@/services/ConfigurationService'
import { LoggerService } from '@/services/LoggerService'
import { NavigationService } from '@/services/NavigationService'
import type { Styleable } from '@/types/common'
import type { MediaItem } from '@/types/content'
import type { RouteId } from '@/types/navigation'
import { cn } from '@/utils/classnames'

const { heroStillMs } = ConfigurationService.timings

export interface HeroSectionProps extends Styleable {
  // Route behind the leading action
  primaryRoute?: RouteId
  secondaryRoute?: RouteId
  image?: string
  // Footage and stills played one after another, dissolved on scroll when supplied
  slides?: MediaItem[]
}

/**
 * Opening section, the footage receding as the page takes over
 * @param {HeroSectionProps} props - Hero props
 * @return {JSX.Element} - Rendered hero
 */

export const HeroSection = ({
  primaryRoute,
  secondaryRoute,
  image = PHOTOS.hero,
  slides = [],
  className,
}: HeroSectionProps) => {
  const t = useTranslations('sections.hero')
  const actions = useTranslations('actions')
  const primary = primaryRoute ?? NavigationService.callToActionRoute()
  const claims = HERO_CLAIMS.map((claim) => t(`claims.${claim}`))

  const [index, setIndex] = useState(0)
  const clipRefs = useRef<(HTMLVideoElement | null)[]>([])

  // A lone slide loops, a sequence hands over to the next one
  const hasSequence = slides.length > 1
  const current = slides[index]

  // Only the shown clip runs, the others hold their bandwidth
  useEffect(() => {
    clipRefs.current.forEach((clip, slide) => {
      if (!clip) return

      if (slide !== index) {
        clip.pause()

        return
      }

      // Set on the node, not through the prop: React leaves the property false
      // on a hydrated <video>, and autoplay of an unmuted clip is refused
      clip.muted = true
      // Rewinding an unloaded clip throws, its position is already zero
      if (clip.readyState > 0) clip.currentTime = 0

      clip.play().catch((error: unknown) => LoggerService.warn('heroSequence.play', error))
    })
  }, [index])

  // Footage ends by itself, a still has to be timed out
  useEffect(() => {
    if (!hasSequence || current?.kind !== 'image') return undefined

    const timer = window.setTimeout(
      () => setIndex((slide) => (slide + 1) % slides.length),
      heroStillMs
    )

    return () => window.clearTimeout(timer)
  }, [current, hasSequence, index, slides.length])

  return (
    <section
      id={SECTION_ANCHORS.hero}
      className={cn(HERO_STYLES.frame, HERO_STYLES.offset, className)}>
      <div className={HERO_STYLES.plate} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.curtainMedia }}>
        {slides.length > 0 ? (
          slides.map((slide, position) => (
            <div
              key={slide.id}
              className={cn(
                HERO_STYLES.slide,
                position === index ? HERO_STYLES.slideActive : HERO_STYLES.slideIdle
              )}>
              {slide.kind === 'video' ? (
                <video
                  ref={(node) => {
                    clipRefs.current[position] = node
                  }}
                  className={HERO_STYLES.plateImage}
                  poster={image}
                  muted
                  loop={!hasSequence}
                  playsInline
                  preload={position === 0 ? 'auto' : 'metadata'}
                  aria-hidden="true"
                  onEnded={() => hasSequence && setIndex((position + 1) % slides.length)}>
                  <source src={slide.src} />
                </video>
              ) : (
                <Picture
                  src={slide.src}
                  alt={t(`items.${slide.translationKey}`)}
                  stretch
                  shadow={false}
                  reveal={false}
                  sizes="100vw"
                  className={cn(HERO_STYLES.still, position === index && HERO_STYLES.stillZoom)}
                />
              )}
            </div>
          ))
        ) : (
          <Picture
            src={image}
            alt={t('imageAlt')}
            stretch
            priority
            shadow={false}
            reveal={false}
            sizes="100vw"
            className={HERO_STYLES.plateImage}
          />
        )}
      </div>

      <div aria-hidden="true" className={HERO_STYLES.scrim} />

      {hasSequence && (
        <div className={HERO_STYLES.markers}>
          {slides.map((slide, position) => (
            <button
              key={slide.id}
              type="button"
              aria-current={position === index}
              aria-label={t('position', {
                position: String(position + 1),
                total: String(slides.length),
              })}
              className={cn(
                HERO_STYLES.marker,
                position === index ? HERO_STYLES.markerActive : HERO_STYLES.markerIdle
              )}
              onClick={() => setIndex(position)}
            />
          ))}
        </div>
      )}

      <Container>
        <div className={HERO_STYLES.content}>
          <Heading
            level={1}
            className={HERO_STYLES.headline}
            {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.sweep }}>
            {t('title')}
          </Heading>
          <div className="contents" {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.riseStagger }}>
            <Text appearance="lead" className={HERO_STYLES.lead}>
              {t.rich('description', {
                venue: (chunks) => (
                  <Link href={NavigationService.pathOf('contact')} className={HERO_STYLES.leadLink}>
                    {chunks}
                  </Link>
                ),
              })}
              <RotatingText phrases={claims} />
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
          </div>
        </div>
      </Container>
    </section>
  )
}
