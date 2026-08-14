import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHeader } from '@/components/structures/layout/PageHeader'
import { Breadcrumb } from '@/components/structures/navigation/Breadcrumb'
import { NavigationService } from '@/services/NavigationService'
import { Page } from '@/structures/Page'
import type { PageRenderContext } from '@/structures/Page'

export interface FaqPageProps {
  params: Promise<{ locale: string }>
}

class FaqPage extends Page {
  constructor() {
    super('faq')
  }

  render({ translate, breadcrumb }: PageRenderContext): ReactNode {
    return (
      <>
        <PageHeader
          title={translate('label')}
          description={translate('metaDescription')}
          breadcrumb={breadcrumb}
        />
        <FaqSection />
        <CallToActionSection />
      </>
    )
  }
}

const page = new FaqPage()

/**
 * Generate page metadata
 * @param {FaqPageProps} props - Page props
 * @return {Promise<Metadata>} - Metadata for the page
 */

export const generateMetadata = async ({ params }: FaqPageProps): Promise<Metadata> => {
  const { locale } = await params

  return page.metadata({ locale, translate: await getTranslations() })
}

/**
 * FAQ page
 * @return {Promise<JSX.Element>} - Rendered page
 */

export default async function FaqPageRoute() {
  const navigationTranslate = await getTranslations()

  return page.render({
    translate: await getTranslations('routes.faq'),
    breadcrumb: (
      <Breadcrumb
        entries={NavigationService.breadcrumbOf('faq', navigationTranslate)}
        label={navigationTranslate('navigation.breadcrumb')}
      />
    ),
  })
}
