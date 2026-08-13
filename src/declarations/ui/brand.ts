/**
 * Monogram drawing box
 * @type {string}
 */

export const BRAND_VIEW_BOX = '2 -6 94 82'

/**
 * Monogram geometry, mirrors public/logos/monogram.svg
 * @type {Object}
 */

export const BRAND_PATHS = {
  // Initial
  letter: 'M11 64 L16 18 L27 46 L38 18 L43 64',
  // Second initial
  initial: 'M85 18 L80 50 C78 60 67 63 60 56',
  // Bolt
  bolt: 'M80 2 L58 40 L70 39 L48 74 L78 33 L66 34 Z',
} as const

/**
 * Bolt gradient
 * @type {Array<{ offset: string; color: string }>}
 */

export const BRAND_GRADIENT_STOPS = [
  { offset: '0', color: 'rgb(var(--color-accent))' },
  { offset: '0.55', color: 'rgb(var(--color-primary))' },
  { offset: '1', color: 'rgb(var(--color-info))' },
] as const

/**
 * Stroke weight shared by both letterforms
 * @type {number}
 */

export const BRAND_STROKE_WIDTH = 9.5

/**
 * Knockout weight separating the bolt from the letterform underneath
 * @type {number}
 */

export const BRAND_CUT_WIDTH = 6
