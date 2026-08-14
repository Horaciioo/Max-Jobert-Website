import type { ReactNode } from 'react'

import { MotionStage } from '@/components/layout/MotionStage'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SocialBanner } from '@/components/layout/SocialBanner'
import { TexturePageBackdrop } from '@/components/layout/TexturePageBackdrop'
import { NotificationRegion } from '@/components/structures/feedback/NotificationRegion'
import { ScrollBar } from '@/components/structures/navigation/ScrollBar'
import { ScrollToTop } from '@/components/structures/navigation/ScrollToTop'
import { StickyActionBar } from '@/components/structures/navigation/StickyActionBar'
import { BACKDROPS } from '@/declarations/content'
import { LAYOUT } from '@/declarations/ui/variants'
import { ConfigurationService } from '@/services/ConfigurationService'
import { cn } from '@/utils/classnames'

export interface SiteLayoutProps {
  children: ReactNode
}

const hasStickyActionBar = ConfigurationService.isEnabled('stickyActionBar')

/**
 * Site layout
 * @param {SiteLayoutProps} props - Site layout props
 * @return {JSX.Element} - Rendered layout
 */

export const SiteLayout = ({ children }: SiteLayoutProps) => (
  <div className={LAYOUT.page}>
    <TexturePageBackdrop src={BACKDROPS.main} />
    <SiteHeader />
    <main className={cn(LAYOUT.main, hasStickyActionBar && 'pb-20 md:pb-0')}>{children}</main>
    {ConfigurationService.isEnabled('socialBanner') && <SocialBanner />}
    <SiteFooter />
    {ConfigurationService.isEnabled('scrollToTop') && <ScrollToTop />}
    {ConfigurationService.isEnabled('scrollBar') && <ScrollBar />}
    {ConfigurationService.isEnabled('notifications') && <NotificationRegion />}
    {hasStickyActionBar && <StickyActionBar />}
    <MotionStage />
  </div>
)
