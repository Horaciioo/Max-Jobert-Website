/**
 * Media query every effect is gated behind
 * @type {string}
 */

export const MOTION_ALLOWED_QUERY = '(prefers-reduced-motion: no-preference)'

/**
 * Attribute carrying the effect name
 * @type {string}
 */

export const MOTION_ATTRIBUTE = 'data-motion'

/**
 * Attribute carrying the effect argument
 * @type {string}
 */

export const MOTION_VALUE_ATTRIBUTE = 'data-motion-value'

/**
 * Attribute naming how a counted value is written out
 * @type {string}
 */

export const MOTION_FORMAT_ATTRIBUTE = 'data-motion-format'

/**
 * Class opting the document into pre-hidden motion states
 * @type {string}
 */

export const MOTION_READY_CLASS = 'motion-ready'

/**
 * Class dropping the pre-hidden states once every effect is wired
 * @type {string}
 */

export const MOTION_ARMED_CLASS = 'motion-armed'

// Curves, named by the feel they carry
const EASE = {
  // Long tail, the block settles rather than stops
  settle: 'power3.out',
  // Symmetrical, for anything scrubbed by the scroll
  linear: 'none',
  // Breathing loop
  swell: 'sine.inOut',
} as const

/**
 * Enter effects, played once when the element reaches the viewport
 * @type {Object}
 */

export const ENTER_EFFECTS = {
  // Text and blocks travelling up into place
  rise: {
    from: { y: 56, opacity: 0 },
    to: { y: 0, opacity: 1 },
    durationSeconds: 0.95,
    ease: EASE.settle,
    staggerSeconds: 0,
    childrenOnly: false,
  },
  // Same travel, applied to direct children one after another
  riseStagger: {
    from: { y: 44, opacity: 0 },
    to: { y: 0, opacity: 1 },
    durationSeconds: 0.85,
    ease: EASE.settle,
    staggerSeconds: 0.09,
    childrenOnly: true,
  },
  // Opacity only, for anything already in its final position
  fade: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    durationSeconds: 1.1,
    ease: EASE.settle,
    staggerSeconds: 0,
    childrenOnly: false,
  },
  // Headlines, uncovered left to right
  sweep: {
    from: { clipPath: 'inset(0 100% 0 0)', x: -32, opacity: 0 },
    to: { clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1 },
    durationSeconds: 0.9,
    ease: EASE.settle,
    staggerSeconds: 0,
    childrenOnly: false,
  },
  // Sideways entrance, for a rail marker
  slide: {
    from: { x: -36, opacity: 0 },
    to: { x: 0, opacity: 1 },
    durationSeconds: 0.8,
    ease: EASE.settle,
    staggerSeconds: 0,
    childrenOnly: false,
  },
  // Mirror of slide, for a block hung on the opposite side
  slideReverse: {
    from: { x: 36, opacity: 0 },
    to: { x: 0, opacity: 1 },
    durationSeconds: 0.8,
    ease: EASE.settle,
    staggerSeconds: 0,
    childrenOnly: false,
  },
  // The rail drawing itself in from its origin
  draw: {
    from: { scaleY: 0, transformOrigin: 'top center' },
    to: { scaleY: 1 },
    durationSeconds: 1.4,
    ease: EASE.settle,
    staggerSeconds: 0,
    childrenOnly: false,
  },
} as const

/**
 * Enter effect name
 * @typedef {keyof typeof ENTER_EFFECTS} EnterEffect
 */

export type EnterEffect = keyof typeof ENTER_EFFECTS

/**
 * Scroll position that fires an enter effect
 * @type {string}
 */

export const ENTER_TRIGGER = 'top 88%'

/**
 * Page hand-over, the whole content uncovered left to right on arrival
 * @type {Object}
 */

export const INTRO_EFFECT = {
  from: { clipPath: 'inset(0 100% 0 0)' },
  to: { clipPath: 'inset(0 0% 0 0)' },
  durationSeconds: 0.2,
  ease: EASE.settle,
  // Dropped once played, a lasting clip would trap fixed descendants
  clearProperties: 'clipPath',
} as const

/**
 * Counter roll-up, target read from the value attribute
 * @type {Object}
 */

export const COUNT_EFFECT = {
  durationSeconds: 2.2,
  ease: EASE.settle,
} as const

/**
 * Idle drift, for pictures that should not sit perfectly still
 * @type {Object}
 */

export const FLOAT_EFFECT = {
  offsetPixels: 14,
  durationSeconds: 5.5,
  ease: EASE.swell,
} as const

/**
 * Scroll-linked depth, travel in pixels read from the value attribute
 * @type {Object}
 */

export const PARALLAX_EFFECT = {
  defaultTravelPixels: 90,
  ease: EASE.linear,
  scrub: 0.6,
} as const

/**
 * Rail filling itself as the reader descends, tied to the scroll rather than played once
 * @type {Object}
 */

export const TRACE_EFFECT = {
  // Height, not scaleY: a scaled rail would squash the marker riding at its end
  from: { height: '0%' },
  to: { height: '100%' },
  ease: EASE.linear,
  start: 'top 62%',
  end: 'bottom 78%',
  scrub: 0.4,
} as const

/**
 * Hero hand-off, the footage recedes while the page takes over
 * @type {Object}
 */

export const CURTAIN_EFFECT = {
  start: 'top top',
  // Ends before the section leaves, so what follows arrives legible
  end: 'bottom 30%',
  ease: EASE.linear,
  scrub: 0.5,
  media: { scale: 1.2, opacity: 0.1, filter: 'blur(16px)' },
  overlay: { opacity: 0, y: -40 },
  // Brackets keep opening outwards while the footage dissolves
  frame: { scale: 1.4, opacity: 0 },
} as const

/**
 * Effect names accepted by the motion attribute
 * @type {Object}
 */

export const MOTION_NAMES = {
  rise: 'rise',
  riseStagger: 'riseStagger',
  fade: 'fade',
  sweep: 'sweep',
  slide: 'slide',
  slideReverse: 'slideReverse',
  draw: 'draw',
  trace: 'trace',
  count: 'count',
  float: 'float',
  parallax: 'parallax',
  curtainMedia: 'curtainMedia',
  curtainOverlay: 'curtainOverlay',
  curtainFrame: 'curtainFrame',
} as const

/**
 * Motion effect name
 * @typedef {(typeof MOTION_NAMES)[keyof typeof MOTION_NAMES]} MotionName
 */

export type MotionName = (typeof MOTION_NAMES)[keyof typeof MOTION_NAMES]

/**
 * Boot script hiding animated blocks before the first paint
 * @return {string} - Inline script body
 */

export const buildMotionBootScript = (): string =>
  // An unsupported query matches nothing, so blocks stay visible rather than hidden
  `(function(){try{if(window.matchMedia('${MOTION_ALLOWED_QUERY}').matches){document.documentElement.classList.add('${MOTION_READY_CLASS}')}}catch(error){}})()`
