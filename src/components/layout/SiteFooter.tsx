'use client'

import { useTranslations } from 'next-intl'

import { Logo } from '@/components/elements/media/Logo'
import { Text } from '@/components/elements/typography/Text'
import { Container } from '@/components/structures/layout/Container'
import { LanguageSwitcher } from '@/components/structures/navigation/LanguageSwitcher'
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

  return (
    <footer className={FOOTER_STYLES.frame}>
      <Container>
        <div className={FOOTER_STYLES.grid}>
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-3">
              <Logo withName={false} className={BRAND_STYLES.markCompact} />
              <span className={BRAND_STYLES.name}>{ConfigurationService.site.name}</span>
            </span>
            <Text appearance="description">{navigation('tagline')}</Text>
            {ConfigurationService.isEnabled('languageSwitcher') && <LanguageSwitcher />}
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
