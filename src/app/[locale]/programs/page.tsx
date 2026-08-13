import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FeatureSection } from '@/components/sections/FeatureSection'
import { ProgramSection } from '@/components/sections/ProgramSection'
import { PageHeader } from '@/components/structures/layout/PageHeader'
import { Breadcrumb } from '@/components/structures/navigation/Breadcrumb'
import { NavigationService } from '@/services/NavigationService'
import { Page } from '@/structures/Page'
import type { PageRenderContext } from '@/structures/Page'

export interface ProgramsPageProps {
  params: Promise<{ locale: string }>
}

class ProgramsPage extends Page {
  constructor() {
    super('programs')
  }

  render({ translate, breadcrumb }: PageRenderContext): ReactNode {
    return (
      <>
        <PageHeader
          title={translate('label')}
          description={translate('metaDescription')}
          breadcrumb={breadcrumb}
        />
        <ProgramSection />
        <FeatureSection />
        <FaqSection />
        <CallToActionSection />
      </>
    )
  }
}

const page = new ProgramsPage()

/**
 * Generate page metadata
 * @param {ProgramsPageProps} props - Page props
 * @return {Promise<Metadata>} - Metadata for the page
 */

export const generateMetadata = async ({ params }: ProgramsPageProps): Promise<Metadata> => {
  const { locale } = await params

  return page.metadata({ locale, translate: await getTranslations() })
}

/**
 * Programs page
 * @return {Promise<JSX.Element>} - Rendered page
 */

export default async function ProgramsPageRoute() {
  const navigationTranslate = await getTranslations()

  return page.render({
    translate: await getTranslations('routes.programs'),
    breadcrumb: (
      <Breadcrumb
        entries={NavigationService.breadcrumbOf('programs', navigationTranslate)}
        label={navigationTranslate('navigation.breadcrumb')}
      />
    ),
  })
}
