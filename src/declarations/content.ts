import type {
  ComparisonItem,
  CredentialItem,
  FactorItem,
  FaqItem,
  FeatureItem,
  MediaItem,
  OutcomeItem,
  ModeItem,
  ProgramItem,
  ScreenItem,
  ServiceItem,
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
  // First frame of the opening clip, held while the footage buffers
  heroPoster: '/images/hero-poster.jpg',
  strength: '/images/strength.jpg',
  conditioning: '/images/conditioning.jpg',
  coaching: '/images/coaching.jpg',
  portrait: '/images/portrait.jpg',
  floor: '/images/training-hero.jpg',
  venue: '/images/basic-fit-pic.jpg',
} as const

/**
 * Page backdrops
 * @type {Object}
 */

export const BACKDROPS = {
  main: '/images/background/main.png',
} as const

/**
 * Opening footage, played one clip after another
 * @type {MediaItem[]}
 */

export const HERO_SEQUENCE: MediaItem[] = [
  { id: 'opening', src: '/videos/home/second-slide.mp4', translationKey: 'opening', kind: 'video' },
  { id: 'still', src: PHOTOS.strength, translationKey: 'still', kind: 'image' },
  { id: 'closing', src: '/videos/home/latest-slide.mp4', translationKey: 'closing', kind: 'video' },
]

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
  {
    id: 'sport',
    translationKey: 'sport',
    date: '2014',
    icon: 'target',
    image: PHOTOS.conditioning,
  },
  {
    id: 'fitness',
    translationKey: 'fitness',
    date: '2018',
    icon: 'certificate',
    image: PHOTOS.coaching,
  },
  { id: 'science', translationKey: 'science', date: '2020', icon: 'medal', image: PHOTOS.portrait },
  { id: 'analysis', translationKey: 'analysis', date: '2021', icon: 'video', image: PHOTOS.hero },
  {
    id: 'strength',
    translationKey: 'strength',
    date: '2022',
    icon: 'strength',
    image: PHOTOS.strength,
  },
  { id: 'studio', translationKey: 'studio', date: '2024', icon: 'intensity', image: PHOTOS.venue },
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
 * Ways of being followed
 * @type {ModeItem[]}
 */

export const SERVICE_MODES: ModeItem[] = [
  { id: 'online', translationKey: 'online', icon: 'path', image: PHOTOS.heroPoster },
  { id: 'onsite', translationKey: 'onsite', icon: 'strength', image: PHOTOS.strength },
  { id: 'hybrid', translationKey: 'hybrid', icon: 'conditioning', image: PHOTOS.conditioning },
]

/**
 * Services on offer
 * @type {ServiceItem[]}
 */

export const SERVICES: ServiceItem[] = [
  { id: 'session', translationKey: 'session', icon: 'strength', image: PHOTOS.coaching },
  { id: 'nutrition', translationKey: 'nutrition', icon: 'chart', image: PHOTOS.portrait },
  { id: 'athletic', translationKey: 'athletic', icon: 'medal', image: PHOTOS.hero },
]

/**
 * What makes a quoted amount move
 * @type {FactorItem[]}
 */

export const RATE_FACTORS: FactorItem[] = [
  { id: 'rhythm', translationKey: 'rhythm', icon: 'timer' },
  { id: 'format', translationKey: 'format', icon: 'target' },
  { id: 'duration', translationKey: 'duration', icon: 'calendar' },
  { id: 'goal', translationKey: 'goal', icon: 'chart' },
  { id: 'follow', translationKey: 'follow', icon: 'path' },
  { id: 'place', translationKey: 'place', icon: 'location' },
]

/**
 * Rotating end of the opening claim
 * @type {string[]}
 */

export const HERO_CLAIMS: string[] = [
  'program',
  'attention',
  'schedule',
  'nutrition',
  'remote',
  'session',
]

/**
 * Tracking sheets, shown as handset screens
 * @type {ScreenItem[]}
 */

export const METHOD_SCREENS: ScreenItem[] = [
  {
    id: 'roadmap',
    translationKey: 'roadmap',
    icon: 'path',
    blocks: [
      { id: 'profile', columnKeys: ['firstName', 'startedOn', 'age'], rows: 1 },
      { id: 'goals', columnKeys: ['goal'], rows: 4 },
      {
        id: 'roadmap',
        columnKeys: ['date', 'weight', 'phase', 'training', 'nutrition'],
        rows: 13,
        labelled: true,
      },
    ],
  },
  {
    id: 'training',
    translationKey: 'training',
    icon: 'strength',
    blocks: [
      {
        id: 'volume',
        columnKeys: ['muscle', 'direct', 'indirect', 'total'],
        rows: 7,
        labelled: true,
      },
      { id: 'session', columnKeys: ['order', 'exercise', 'sets', 'reps', 'rest'], rows: 7 },
      { id: 'correction', columnKeys: ['reps', 'load', 'note'], rows: 4 },
    ],
  },
  {
    id: 'nutrition',
    translationKey: 'nutrition',
    icon: 'chart',
    blocks: [
      {
        id: 'intake',
        columnKeys: ['day', 'protein', 'carbs', 'fat', 'calories'],
        rows: 7,
        labelled: true,
      },
      { id: 'biofeedback', columnKeys: ['stress', 'sleep', 'digestion', 'hunger'], rows: 7 },
      { id: 'measures', columnKeys: ['weight', 'waist', 'hip', 'arm'], rows: 3 },
    ],
  },
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
