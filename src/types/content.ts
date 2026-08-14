import type { IconName } from '@/declarations/ui/icons'
import type { Identifiable, Tone, TranslationKey } from '@/types/common'

/**
 * Media item
 * @typedef MediaItem
 * @property {string} src - Image source
 * @property {TranslationKey} translationKey - Alternative text key
 * @property {number} [width] - Image width
 * @property {number} [height] - Image height
 * @property {'image' | 'video'} [kind] - Media nature
 */

export interface MediaItem extends Identifiable {
  src: string
  // Alternative text key
  translationKey: TranslationKey
  width?: number
  height?: number
  // Media nature, a still unless stated
  kind?: 'image' | 'video'
}

/**
 * Feature item
 * @typedef FeatureItem
 * @property {TranslationKey} translationKey - Title key
 * @property {IconName} icon - Display icon
 * @property {Tone} [tone] - Icon tone
 */

export interface FeatureItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
  tone?: Tone
}

/**
 * Statistic item
 * @typedef StatItem
 * @property {TranslationKey} translationKey - Label key
 * @property {number} value - Raw value
 * @property {'count' | 'currency' | 'percent'} [format] - Value format type
 * @property {IconName} [icon] - Display icon
 */

export interface StatItem extends Identifiable {
  translationKey: TranslationKey
  value: number
  // Value format type
  format?: 'count' | 'currency' | 'percent'
  icon?: IconName
}

/**
 * Declared picture, intrinsic size included
 * @typedef ImageAsset
 * @property {string} src - Public path
 * @property {number} width - Intrinsic width
 * @property {number} height - Intrinsic height
 */

export interface ImageAsset {
  src: string
  width: number
  height: number
}

/**
 * Testimonial item
 * @typedef TestimonialItem
 * @property {TranslationKey} translationKey - Quote key
 * @property {number} [rating] - Star rating
 * @property {string} [avatar] - Author image
 */

export interface TestimonialItem extends Identifiable {
  translationKey: TranslationKey
  rating?: number
  avatar?: string
}

/**
 * FAQ item
 * @typedef FaqItem
 * @property {TranslationKey} translationKey - Answer key
 */

export interface FaqItem extends Identifiable {
  translationKey: TranslationKey
}

/**
 * Before and after pair
 * @typedef ComparisonItem
 * @property {TranslationKey} translationKey - Caption key
 * @property {ImageAsset} before - Starting picture
 * @property {ImageAsset} after - Finished picture
 */

export interface ComparisonItem extends Identifiable {
  translationKey: TranslationKey
  before: ImageAsset
  after: ImageAsset
}

/**
 * Pricing item
 * @typedef PricingItem
 * @property {TranslationKey} translationKey - Plan name key
 * @property {number} amountCents - Amount in cents
 * @property {'once' | 'month' | 'year'} [period] - Billing period
 * @property {boolean} [featured] - Highlight flag
 * @property {TranslationKey[]} includedKeys - Included features
 */

export interface PricingItem extends Identifiable {
  translationKey: TranslationKey
  // Amount in cents
  amountCents: number
  period?: 'once' | 'month' | 'year'
  featured?: boolean
  includedKeys: TranslationKey[]
}

/**
 * Timeline item
 * @typedef TimelineItem
 * @property {TranslationKey} translationKey - Event description key
 * @property {string} date - Event date
 * @property {IconName} [icon] - Milestone icon
 * @property {string} [image] - Step picture
 */

export interface TimelineItem extends Identifiable {
  translationKey: TranslationKey
  date: string
  icon?: IconName
  // Shown opposite the step on an alternating trail
  image?: string
}

/**
 * Driver making a quoted amount move
 * @typedef FactorItem
 * @property {TranslationKey} translationKey - Driver key
 * @property {IconName} icon - Display icon
 */

export interface FactorItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
}

/**
 * Way of being followed, before any single service is picked
 * @typedef ModeItem
 * @property {TranslationKey} translationKey - Mode key
 * @property {IconName} icon - Display icon
 * @property {string} image - Illustrating picture
 */

export interface ModeItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
  image: string
}

/**
 * Service on offer
 * @typedef ServiceItem
 * @property {TranslationKey} translationKey - Service key
 * @property {IconName} icon - Display icon
 * @property {string} image - Illustrating picture
 */

export interface ServiceItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
  image: string
}

/**
 * Skeleton spreadsheet block, nomenclature only
 * @typedef SheetBlock
 * @property {TranslationKey[]} columnKeys - Header labels
 * @property {number} rows - Withheld row count
 * @property {boolean} [labelled] - Label first column
 */

export interface SheetBlock extends Identifiable {
  columnKeys: TranslationKey[]
  // Withheld rows, drawn as shimmering bars
  rows: number
  // First column drawn as a label column, like the sheet it stands for
  labelled?: boolean
}

/**
 * Tracking sheet shown inside a handset
 * @typedef ScreenItem
 * @property {TranslationKey} translationKey - Screen name key
 * @property {IconName} icon - Display icon
 * @property {SheetBlock[]} blocks - Sheet structure
 */

export interface ScreenItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
  blocks: SheetBlock[]
}

/**
 * Qualification held by the coach
 * @typedef CredentialItem
 * @property {TranslationKey} translationKey - Qualification key
 * @property {string} year - Year obtained
 * @property {IconName} icon - Display icon
 * @property {Tone} [tone] - Icon tone
 */

export interface CredentialItem extends Identifiable {
  translationKey: TranslationKey
  // Year obtained
  year: string
  icon: IconName
  tone?: Tone
}

/**
 * Coaching format on offer
 * @typedef ProgramItem
 * @property {TranslationKey} translationKey - Format name key
 * @property {IconName} icon - Display icon
 * @property {TranslationKey[]} includedKeys - What the format covers
 * @property {boolean} [featured] - Highlight flag
 * @property {Tone} [tone] - Icon tone
 */

export interface ProgramItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
  includedKeys: TranslationKey[]
  featured?: boolean
  tone?: Tone
}

/**
 * Result a client comes for, carried by its own picture
 * @typedef OutcomeItem
 * @property {TranslationKey} translationKey - Outcome key
 * @property {IconName} icon - Display icon
 * @property {string} image - Picture path
 */

export interface OutcomeItem extends Identifiable {
  translationKey: TranslationKey
  icon: IconName
  image: string
}
