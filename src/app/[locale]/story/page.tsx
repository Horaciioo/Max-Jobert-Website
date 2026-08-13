import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { CredentialSection } from '@/components/sections/CredentialSection'
import { SequenceSection } from '@/components/sections/SequenceSection'
import { PageHeader } from '@/components/structures/layout/PageHeader'
import { Breadcrumb } from '@/components/structures/navigation/Breadcrumb'
import { MILESTONES, PHOTOS } from '@/declarations/content'
import { NavigationService } from '@/services/NavigationService'
import { Page } from '@/structures/Page'
import type { PageRenderContext } from '@/structures/Page'

export interface StoryPageProps {
  params: Promise<{ locale: string }>
}

class StoryPage extends Page {
  constructor() {
    super('story')
  }

  render({ translate, breadcrumb }: PageRenderContext): ReactNode {
    return (
      <>
        <PageHeader
          title={translate('label')}
          description={translate('metaDescription')}
          breadcrumb={breadcrumb}
        />
        <SequenceSection namespace="milestones" items={MILESTONES} image={PHOTOS.portrait} />
        <CredentialSection />
        <CallToActionSection />
      </>
    )
  }
}

const page = new StoryPage()

/**
 * Generate page metadata
 * @param {StoryPageProps} props - Page props
 * @return {Promise<Metadata>} - Metadata for the page
 */

export const generateMetadata = async ({ params }: StoryPageProps): Promise<Metadata> => {
  const { locale } = await params

  return page.metadata({ locale, translate: await getTranslations() })
}

/**
 * Story page
 * @return {Promise<JSX.Element>} - Rendered page
 */

export default async function StoryPageRoute() {
  const navigationTranslate = await getTranslations()

  return page.render({
    translate: await getTranslations('routes.story'),
    breadcrumb: (
      <Breadcrumb
        entries={NavigationService.breadcrumbOf('story', navigationTranslate)}
        label={navigationTranslate('navigation.breadcrumb')}
      />
    ),
  })
}
