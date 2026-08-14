'use client'

import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { FormRenderer } from '@/components/elements/forms/FormRenderer'
import { Icon } from '@/components/elements/media/Icon'
import { Picture } from '@/components/elements/media/Picture'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { LocationMap } from '@/components/structures/layout/LocationMap'
import { Section } from '@/components/structures/layout/Section'
import { PHOTOS } from '@/declarations/content'
import type { IconName } from '@/declarations/ui/icons'
import { MOTION_ATTRIBUTE, MOTION_NAMES } from '@/declarations/ui/motion'
import { BLOCK_STYLES, CONTACT_STYLES, MEDIA_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import { NavigationService } from '@/services/NavigationService'
import { cn } from '@/utils/classnames'

const { identity } = ConfigurationService
const { address } = identity

// Reachable channels, each one a single tap away
const CHANNELS: { id: string; icon: IconName; value: string; href: string }[] = [
  {
    id: 'email',
    icon: 'mail',
    value: identity.email,
    href: NavigationService.mailtoOf(identity.email),
  },
  {
    id: 'phone',
    icon: 'phone',
    value: identity.phone,
    href: NavigationService.telOf(identity.phone),
  },
]

/**
 * Contact section, the venue facing the form
 * @return {JSX.Element} - Rendered section
 */

export const ContactSection = () => {
  const t = useTranslations('sections.contact')
  const actions = useTranslations('actions')

  return (
    <Section>
      <div className={BLOCK_STYLES.stack}>
        <SectionHeading title={t('title')} description={t('description')} />

        <div className={CONTACT_STYLES.grid}>
          <div className={CONTACT_STYLES.aside}>
            <div
              className={cn(MEDIA_STYLES.frame, CONTACT_STYLES.venue)}
              {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
              <Picture
                src={PHOTOS.venue}
                alt={t('venue.imageAlt')}
                stretch
                shadow={false}
                reveal={false}
                sizes="(max-width: 1024px) 100vw, 26rem"
                className={CONTACT_STYLES.venueImage}
              />
              <span aria-hidden="true" className={CONTACT_STYLES.venueScrim} />

              <p className={CONTACT_STYLES.venueName}>{address.venue}</p>
              <p className={CONTACT_STYLES.venueAddress}>
                {address.street}
                <br />
                {`${address.postalCode} ${address.city}`}
              </p>
              <div className={CONTACT_STYLES.venueActions}>
                <ActionLink href={NavigationService.mapDirectionsUrlOf(address)} icon="location">
                  {actions('getDirections')}
                </ActionLink>
              </div>
            </div>

            <ul className={CONTACT_STYLES.channels} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.fade }}>
              {CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <a href={channel.href} className={cn('group', CONTACT_STYLES.channel)}>
                    <span className={CONTACT_STYLES.channelIcon}>
                      <Icon name={channel.icon} size="sm" />
                    </span>
                    <span className={CONTACT_STYLES.channelBody}>
                      <span className={CONTACT_STYLES.channelLabel}>
                        {t(`channels.${channel.id}`)}
                      </span>
                      <span className={CONTACT_STYLES.channelValue}>{channel.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {ConfigurationService.isEnabled('locationMap') && (
              <LocationMap title={t('map.title')} />
            )}
          </div>

          <div className={CONTACT_STYLES.form} {...{ [MOTION_ATTRIBUTE]: MOTION_NAMES.rise }}>
            <FormRenderer id="contact" />
          </div>
        </div>
      </div>
    </Section>
  )
}
