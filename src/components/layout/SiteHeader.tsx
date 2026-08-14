'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { ActionLink } from '@/components/elements/actions/ActionLink'
import { IconButton } from '@/components/elements/actions/IconButton'
import { Icon } from '@/components/elements/media/Icon'
import { Logo } from '@/components/elements/media/Logo'
import { NavigationList } from '@/components/structures/navigation/NavigationList'
import { Drawer } from '@/components/structures/overlays/Drawer'
import type { IconName } from '@/declarations/ui/icons'
import { BRAND_STYLES, NAVIGATION_STYLES } from '@/declarations/ui/variants'
import { Link, usePathname } from '@/i18n/routing'
import { ConfigurationService } from '@/services/ConfigurationService'
import { NavigationService } from '@/services/NavigationService'

/**
 * Site header
 * @return {JSX.Element} - Rendered header
 */

export const SiteHeader = () => {
  const pathname = usePathname()
  const t = useTranslations()
  const navigation = useTranslations('navigation')
  const actions = useTranslations('actions')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const entries = NavigationService.headerEntries({ pathname, translate: t })
  const callToAction = NavigationService.callToActionRoute()
  const socials = ConfigurationService.socialLinks()

  return (
    <header className={NAVIGATION_STYLES.header}>
      <div className={NAVIGATION_STYLES.row}>
        <Link href={NavigationService.pathOf('home')} className={NAVIGATION_STYLES.brand}>
          <Logo withName={false} className={BRAND_STYLES.mark} />
        </Link>

        <div className={NAVIGATION_STYLES.bar}>
          {/* No sweep here: the effect leaves a clip-path behind, which would cut the group panel off */}
          <nav aria-label={navigation('primary')} className={NAVIGATION_STYLES.list}>
            <NavigationList entries={entries} />
          </nav>

          <div className={NAVIGATION_STYLES.actions}>
            {socials.length > 0 && (
              <div className={NAVIGATION_STYLES.socials}>
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.id}
                    className={NAVIGATION_STYLES.socialLink}>
                    <Icon name={social.id as IconName} size="lg" />
                  </a>
                ))}
              </div>
            )}
            <ActionLink route={callToAction} size="md" className="hidden lg:inline-flex">
              {actions(callToAction)}
            </ActionLink>
            <IconButton
              icon="menu"
              label={actions('open')}
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      <Drawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        name="navigation"
        title={navigation('primary')}
        closeLabel={actions('close')}>
        <NavigationList
          entries={entries}
          direction="vertical"
          withIcons
          onNavigate={() => setIsMenuOpen(false)}
        />
        <div className="mt-6 flex flex-col gap-3">
          <ActionLink route={callToAction} fullWidth>
            {actions(callToAction)}
          </ActionLink>
        </div>
      </Drawer>
    </header>
  )
}
