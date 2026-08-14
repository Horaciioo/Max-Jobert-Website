'use client'

import { useTranslations } from 'next-intl'

import { Icon } from '@/components/elements/media/Icon'
import { Container } from '@/components/structures/layout/Container'
import type { IconName } from '@/declarations/ui/icons'
import { SOCIAL_BANNER_STYLES } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import type { Styleable } from '@/types/common'
import { cn } from '@/utils/classnames'

/**
 * Social banner, networks reduced to their glyph
 * @param {Styleable} props - Banner props
 * @return {JSX.Element | null} - Rendered banner
 */

export const SocialBanner = ({ className }: Styleable) => {
  const navigation = useTranslations('navigation')
  const socials = ConfigurationService.socialLinks()

  if (socials.length === 0) return null

  return (
    <aside aria-label={navigation('socials')} className={cn(SOCIAL_BANNER_STYLES.frame, className)}>
      <Container>
        <div className={SOCIAL_BANNER_STYLES.row}>
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.id}
              className={SOCIAL_BANNER_STYLES.link}>
              <Icon name={social.id as IconName} size="xl" />
            </a>
          ))}
        </div>
      </Container>
    </aside>
  )
}
