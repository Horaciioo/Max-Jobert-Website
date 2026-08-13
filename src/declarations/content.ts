import type {
  ComparisonItem,
  CredentialItem,
  FaqItem,
  FeatureItem,
  MediaItem,
  OutcomeItem,
  ProgramItem,
  StatItem,
  TestimonialItem,
  TimelineItem,
} from '@/types/content'

/**
 * Placeholder image
 * @type {string}
 */

export const PLACEHOLDER_IMAGE = '/images/placeholder.svg'

/**
 * Project photography
 * @type {Object}
 */

export const PHOTOS = {
  hero: '/images/training-hero.jpg',
  strength: '/images/strength.jpg',
  conditioning: '/images/conditioning.jpg',
  coaching: '/images/coaching.jpg',
  portrait: '/images/portrait.jpg',
  floor: '/images/floor.jpg',
} as const

/**
 * Qualifications held
 * @type {CredentialItem[]}
 */

export const CREDENTIALS: CredentialItem[] = [
  { id: 'fitness', translationKey: 'fitness', year: '2018', icon: 'certificate', tone: 'primary' },
  { id: 'science', translationKey: 'science', year: '2020', icon: 'medal', tone: 'accent' },
  { id: 'strength', translationKey: 'strength', year: '2022', icon: 'strength', tone: 'info' },
]

/**
 * Results a client comes for
 * @type {OutcomeItem[]}
 */

export const OUTCOMES: OutcomeItem[] = [
  { id: 'strength', translationKey: 'strength', icon: 'strength', image: PHOTOS.strength },
  {
    id: 'conditioning',
    translationKey: 'conditioning',
    icon: 'conditioning',
    image: PHOTOS.conditioning,
  },
  { id: 'technique', translationKey: 'technique', icon: 'target', image: PHOTOS.coaching },
]

/**
 * Method pillars
 * @type {FeatureItem[]}
 */

export const FEATURES: FeatureItem[] = [
  { id: 'assessment', translationKey: 'assessment', icon: 'protocol', tone: 'primary' },
  { id: 'individual', translationKey: 'individual', icon: 'target', tone: 'accent' },
  { id: 'technique', translationKey: 'technique', icon: 'strength', tone: 'info' },
  { id: 'load', translationKey: 'load', icon: 'load', tone: 'success' },
  { id: 'progression', translationKey: 'progression', icon: 'chart', tone: 'warning' },
  { id: 'longevity', translationKey: 'longevity', icon: 'conditioning', tone: 'neutral' },
]

/**
 * Track record readouts
 * @type {StatItem[]}
 */

export const STATS: StatItem[] = [
  { id: 'athletes', translationKey: 'athletes', value: 120, format: 'count', icon: 'users' },
  { id: 'sessions', translationKey: 'sessions', value: 2400, format: 'count', icon: 'timer' },
  { id: 'retention', translationKey: 'retention', value: 0.92, format: 'percent', icon: 'chart' },
  { id: 'seasons', translationKey: 'seasons', value: 8, format: 'count', icon: 'medal' },
]

/**
 * Coaching formats
 * @type {ProgramItem[]}
 */

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'individual',
    translationKey: 'individual',
    icon: 'strength',
    tone: 'primary',
    includedKeys: ['assessment', 'plan', 'sessions', 'adjustments'],
  },
  {
    id: 'performance',
    translationKey: 'performance',
    icon: 'chart',
    tone: 'accent',
    featured: true,
    includedKeys: ['assessment', 'plan', 'sessions', 'testing', 'report'],
  },
  {
    id: 'remote',
    translationKey: 'remote',
    icon: 'path',
    tone: 'info',
    includedKeys: ['assessment', 'plan', 'checkin', 'adjustments'],
  },
]

/**
 * Career milestones
 * @type {TimelineItem[]}
 */

export const MILESTONES: TimelineItem[] = [
  { id: 'sport', translationKey: 'sport', date: '2014', icon: 'target' },
  { id: 'fitness', translationKey: 'fitness', date: '2018', icon: 'certificate' },
  { id: 'science', translationKey: 'science', date: '2020', icon: 'medal' },
  { id: 'analysis', translationKey: 'analysis', date: '2021', icon: 'video' },
  { id: 'strength', translationKey: 'strength', date: '2022', icon: 'strength' },
  { id: 'studio', translationKey: 'studio', date: '2024', icon: 'intensity' },
]

/**
 * Free assessment protocol
 * @type {TimelineItem[]}
 */

export const ASSESSMENT_STEPS: TimelineItem[] = [
  { id: 'intake', translationKey: 'intake', date: '01', icon: 'protocol' },
  { id: 'measure', translationKey: 'measure', date: '02', icon: 'load' },
  { id: 'movement', translationKey: 'movement', date: '03', icon: 'strength' },
  { id: 'plan', translationKey: 'plan', date: '04', icon: 'path' },
]

/**
 * Testimonials
 * @type {TestimonialItem[]}
 */

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 'beginner', translationKey: 'beginner', rating: 5 },
  { id: 'competitor', translationKey: 'competitor', rating: 5 },
  { id: 'returning', translationKey: 'returning', rating: 5 },
]

/**
 * FAQ items
 * @type {FaqItem[]}
 */

export const FAQ: FaqItem[] = [
  { id: 'assessment', translationKey: 'assessment' },
  { id: 'level', translationKey: 'level' },
  { id: 'place', translationKey: 'place' },
  { id: 'rhythm', translationKey: 'rhythm' },
  { id: 'nutrition', translationKey: 'nutrition' },
  { id: 'cancel', translationKey: 'cancel' },
]

/**
 * Response and delivery promises
 * @type {FeatureItem[]}
 */

export const PROMISES: FeatureItem[] = [
  { id: 'response', translationKey: 'response', icon: 'clock', tone: 'primary' },
  { id: 'delivery', translationKey: 'delivery', icon: 'send', tone: 'accent' },
]

/**
 * Before and after pairs
 * @type {ComparisonItem[]}
 */

export const COMPARISONS: ComparisonItem[] = [
  {
    id: 'posture',
    translationKey: 'posture',
    before: { src: PHOTOS.coaching, width: 1600, height: 1067 },
    after: { src: PHOTOS.strength, width: 1600, height: 1067 },
  },
  {
    id: 'endurance',
    translationKey: 'endurance',
    before: { src: PHOTOS.conditioning, width: 1600, height: 2400 },
    after: { src: PHOTOS.floor, width: 1800, height: 2700 },
  },
]

/**
 * Session gallery
 * @type {MediaItem[]}
 */

export const GALLERY: MediaItem[] = [
  { id: 'strength', src: PHOTOS.strength, translationKey: 'strength' },
  { id: 'conditioning', src: PHOTOS.conditioning, translationKey: 'conditioning' },
  { id: 'coaching', src: PHOTOS.coaching, translationKey: 'coaching' },
  { id: 'portrait', src: PHOTOS.portrait, translationKey: 'portrait' },
  { id: 'floor', src: PHOTOS.floor, translationKey: 'floor' },
  { id: 'hero', src: PHOTOS.hero, translationKey: 'hero' },
]

/**
 * Legal page sections
 * @type {Object}
 */

export const LEGAL_SECTIONS = {
  legalNotice: ['publisher', 'hosting', 'property', 'liability'],
  privacyPolicy: ['collection', 'purpose', 'retention', 'rights', 'cookies', 'contact'],
} as const

/**
 * Legal page name
 * @typedef {keyof typeof LEGAL_SECTIONS} LegalPage
 */

export type LegalPage = keyof typeof LEGAL_SECTIONS
