import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { BookingSection } from '@/components/sections/BookingSection'
import { TrackSection } from '@/components/sections/TrackSection'
import { PageHeader } from '@/components/structures/layout/PageHeader'
import { Breadcrumb } from '@/components/structures/navigation/Breadcrumb'
import { ASSESSMENT_STEPS } from '@/declarations/content'
import { NavigationService } from '@/services/NavigationService'
import { Page } from '@/structures/Page'
import type { PageRenderContext } from '@/structures/Page'

export interface BookAppointmentPageProps {
  params: Promise<{ locale: string }>
}

class BookAppointmentPage extends Page {
  constructor() {
    super('bookAppointment')
  }

  render({ translate, breadcrumb }: PageRenderContext): ReactNode {
    return (
      <>
        <PageHeader
          title={translate('label')}
          description={translate('metaDescription')}
          breadcrumb={breadcrumb}
        />
        <TrackSection namespace="protocol" items={ASSESSMENT_STEPS} />
        <BookingSection />
      </>
    )
  }
}

const page = new BookAppointmentPage()

/**
 * Generate page metadata
 * @param {BookAppointmentPageProps} props - Page props
 * @return {Promise<Metadata>} - Metadata for the page
 */

export const generateMetadata = async ({ params }: BookAppointmentPageProps): Promise<Metadata> => {
  const { locale } = await params

  return page.metadata({ locale, translate: await getTranslations() })
}

/**
 * Free assessment booking page
 * @return {Promise<JSX.Element>} - Rendered page
 */

export default async function BookAppointmentPageRoute() {
  const navigationTranslate = await getTranslations()

  return page.render({
    translate: await getTranslations('routes.bookAppointment'),
    breadcrumb: (
      <Breadcrumb
        entries={NavigationService.breadcrumbOf('bookAppointment', navigationTranslate)}
        label={navigationTranslate('navigation.breadcrumb')}
      />
    ),
  })
}
