'use client'

import { useTranslations } from 'next-intl'

import { BrandMark } from '@/components/layout/BrandMark'
import { Icon } from '@/components/elements/media/Icon'
import { Text } from '@/components/elements/typography/Text'
import { Container } from '@/components/structures/layout/Container'
import type { IconName } from '@/declarations/ui/icons'
import { BRAND_STYLES, FOOTER_STYLES } from '@/declarations/ui/variants'
import { Link, usePathname } from '@/i18n/routing'
import { ConfigurationService } from '@/services/ConfigurationService'
import { NavigationService } from '@/services/NavigationService'

const { identity } = ConfigurationService

/**
 * Site footer
 * @return {JSX.Element} - Rendered footer
 */

export const SiteFooter = () => {
  const pathname = usePathname()
  const t = useTranslations()
  const navigation = useTranslations('navigation')
  const columns = NavigationService.footerColumns({ pathname, translate: t })
  const socials = ConfigurationService.socialLinks()

  return (
    <footer className={FOOTER_STYLES.frame}>
      <Container>
        <div className={FOOTER_STYLES.grid}>
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-3">
              <BrandMark name="footer" className={BRAND_STYLES.markCompact} />
              <span className={BRAND_STYLES.name}>{ConfigurationService.site.name}</span>
            </span>
            <Text appearance="description">{navigation('tagline')}</Text>
            {socials.length > 0 && (
              <div className={FOOTER_STYLES.socials}>
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.id}
                    className={FOOTER_STYLES.link}>
                    <Icon name={social.id as IconName} size="sm" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns.map((column) => (
            <nav key={column.id} aria-label={navigation(`footer.${column.id}`)}>
              <p className={FOOTER_STYLES.columnTitle}>{navigation(`footer.${column.id}`)}</p>
              <ul className={FOOTER_STYLES.list}>
                {column.entries.map((entry) => (
                  <li key={entry.id}>
                    <Link href={entry.href} className={FOOTER_STYLES.link}>
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className={FOOTER_STYLES.columnTitle}>{navigation('footer.contact')}</p>
            <ul className={FOOTER_STYLES.list}>
              <li>
                <a href={NavigationService.mailtoOf(identity.email)} className={FOOTER_STYLES.link}>
                  {identity.email}
                </a>
              </li>
              <li>
                <a href={NavigationService.telOf(identity.phone)} className={FOOTER_STYLES.link}>
                  {identity.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={FOOTER_STYLES.bottom}>
          <Text appearance="meta">
            {navigation('copyright', {
              years: ConfigurationService.copyrightYears(),
              name: ConfigurationService.site.name,
            })}
          </Text>
        </div>
      </Container>
    </footer>
  )
}
