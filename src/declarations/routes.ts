import type { RouteDeclaration } from '@/types/navigation'

/**
 * Site routes
 * @type {Object}
 */

export const ROUTES = {
  home: { path: '/', icon: 'home' },
  story: { path: '/story', icon: 'medal' },
  programs: { path: '/programs', icon: 'target' },
  method: { path: '/method', icon: 'protocol' },
  faq: { path: '/faq', icon: 'info' },
  bookAppointment: { path: '/booking', icon: 'calendar', ctaAction: 'bookAppointment' },
  contact: { path: '/contact', icon: 'mail', ctaAction: 'contact' },
  thankYou: { path: '/thank-you', icon: 'success', indexable: false },
  legalNotice: { path: '/legal-notice', icon: 'scale' },
  privacyPolicy: { path: '/privacy-policy', icon: 'shield' },
  showcase: { path: '/showcase', icon: 'sparkles', ctaAction: 'showcase', indexable: false },
} as const satisfies Record<string, RouteDeclaration>

/**
 * Section anchors
 * @type {Object}
 */

export const SECTION_ANCHORS = {
  hero: 'hero',
  credentials: 'credentials',
  stats: 'stats',
  analysis: 'analysis',
  sequence: 'sequence',
  programs: 'programs',
  features: 'features',
  gallery: 'gallery',
  pricing: 'pricing',
  rates: 'rates',
  booking: 'booking',
  comparisons: 'comparisons',
  testimonials: 'testimonials',
  faq: 'faq',
  callToAction: 'call-to-action',
  development: 'development',
} as const
