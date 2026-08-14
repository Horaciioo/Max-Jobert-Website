import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { OutcomeSection } from '@/components/sections/OutcomeSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { HERO_SEQUENCE, PHOTOS } from '@/declarations/content'
import { Page } from '@/structures/Page'

export interface HomePageProps {
  params: Promise<{ locale: string }>
}

class HomePage extends Page {
  constructor() {
    super('home')
  }

  render(): ReactNode {
    return (
      <>
        <HeroSection image={PHOTOS.heroPoster} slides={HERO_SEQUENCE} />
        <MethodSection />
        <OutcomeSection />
        <TestimonialSection />
        <CallToActionSection />
      </>
    )
  }
}

const page = new HomePage()

/**
 * Generate page metadata
 * @param {HomePageProps} props - Page props
 * @return {Promise<Metadata>} - Metadata for the page
 */

export const generateMetadata = async ({ params }: HomePageProps): Promise<Metadata> => {
  const { locale } = await params

  return page.metadata({ locale, translate: await getTranslations() })
}

/**
 * Landing page
 * @return {ReactNode} - Page
 */

export default function HomePageRoute() {
  return page.render()
}
