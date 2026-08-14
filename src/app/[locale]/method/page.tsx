import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { CredentialSection } from '@/components/sections/CredentialSection'
import { FeatureSection } from '@/components/sections/FeatureSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { TrackSection } from '@/components/sections/TrackSection'
import { PageHeader } from '@/components/structures/layout/PageHeader'
import { Breadcrumb } from '@/components/structures/navigation/Breadcrumb'
import { ASSESSMENT_STEPS } from '@/declarations/content'
import { NavigationService } from '@/services/NavigationService'
import { Page } from '@/structures/Page'
import type { PageRenderContext } from '@/structures/Page'

export interface MethodPageProps {
  params: Promise<{ locale: string }>
}

class MethodPage extends Page {
  constructor() {
    super('method')
  }

  render({ translate, breadcrumb }: PageRenderContext): ReactNode {
    return (
      <>
        <PageHeader
          title={translate('label')}
          description={translate('metaDescription')}
          breadcrumb={breadcrumb}
        />
        <FeatureSection />
        <TrackSection namespace="protocol" items={ASSESSMENT_STEPS} />
        <MethodSection />
        <CredentialSection />
        <CallToActionSection />
      </>
    )
  }
}

const page = new MethodPage()

/**
 * Generate page metadata
 * @param {MethodPageProps} props - Page props
 * @return {Promise<Metadata>} - Metadata for the page
 */

export const generateMetadata = async ({ params }: MethodPageProps): Promise<Metadata> => {
  const { locale } = await params

  return page.metadata({ locale, translate: await getTranslations() })
}

/**
 * Method page
 * @return {Promise<JSX.Element>} - Rendered page
 */

export default async function MethodPageRoute() {
  const navigationTranslate = await getTranslations()

  return page.render({
    translate: await getTranslations('routes.method'),
    breadcrumb: (
      <Breadcrumb
        entries={NavigationService.breadcrumbOf('method', navigationTranslate)}
        label={navigationTranslate('navigation.breadcrumb')}
      />
    ),
  })
}
