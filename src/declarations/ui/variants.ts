import {
  DISABLED,
  FOCUS_RING,
  SURFACES,
  TONE_SOFT,
  TRANSITION,
  TRANSITION_ALL,
} from '@/declarations/ui/tokens'
import type { Size, Tone } from '@/types/common'

/**
 * Button base styles
 * @type {string}
 */

export const BUTTON_BASE = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight whitespace-nowrap ${TRANSITION_ALL} ${FOCUS_RING} ${DISABLED}`

/**
 * Button sizes
 * @type {Record<Size, string>}
 */

export const BUTTON_SIZES: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-8 text-base',
}

/**
 * Button variants, every hover lifts and glows, none draws a hard outline
 * @type {Object}
 */

export const BUTTON_VARIANTS = {
  primary:
    'bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5',
  secondary:
    'bg-surface-strong text-foreground shadow-xs hover:bg-surface-strong hover:text-primary hover:shadow-glow hover:-translate-y-0.5',
  outline:
    'border border-primary/40 text-primary hover:border-primary hover:bg-primary-soft hover:shadow-glow hover:-translate-y-0.5',
  ghost: 'text-foreground-muted hover:bg-primary-soft hover:text-primary',
  link: 'text-primary underline-offset-4 hover:underline px-0 h-auto',
  danger: 'bg-danger text-background hover:opacity-90 hover:-translate-y-0.5',
} as const

/**
 * Button variant name
 * @typedef {keyof typeof BUTTON_VARIANTS} ButtonVariant
 */

export type ButtonVariant = keyof typeof BUTTON_VARIANTS

/**
 * Button size name
 * @typedef {Size} ButtonSize
 */

export type ButtonSize = Size

/**
 * Icon button sizes
 * @type {Record<Size, string>}
 */

export const ICON_BUTTON_SIZES: Record<Size, string> = {
  sm: 'h-8 w-8 p-0',
  md: 'h-10 w-10 p-0',
  lg: 'h-12 w-12 p-0',
}

/**
 * Action icon size
 * @type {Record<Size, 'xs' | 'sm' | 'md'>}
 */

export const ACTION_ICON_SIZES: Record<Size, 'xs' | 'sm' | 'md'> = { sm: 'xs', md: 'sm', lg: 'md' }

/**
 * Icon button size
 * @type {Record<Size, 'sm' | 'md'>}
 */

export const ICON_BUTTON_ICON_SIZES: Record<Size, 'sm' | 'md'> = { sm: 'sm', md: 'sm', lg: 'md' }

/**
 * Badge base styles
 * @type {string}
 */

export const BADGE_BASE =
  'inline-flex items-center gap-1.5 rounded-pill font-medium whitespace-nowrap'

/**
 * Badge sizes
 * @type {Record<Size, string>}
 */

export const BADGE_SIZES: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-[0.6875rem]',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}

/**
 * Badge variants
 * @type {Object}
 */

export const BADGE_VARIANTS = {
  soft: TONE_SOFT,
  outline: {
    neutral: 'border border-border text-foreground-muted',
    primary: 'border border-primary/40 text-primary',
    accent: 'border border-accent/40 text-accent',
    success: 'border border-success/40 text-success',
    warning: 'border border-warning/40 text-warning',
    danger: 'border border-danger/40 text-danger',
    info: 'border border-info/40 text-info',
  },
} as const satisfies Record<string, Record<Tone, string>>

/**
 * Badge variant name
 * @typedef {keyof typeof BADGE_VARIANTS} BadgeVariant
 */

export type BadgeVariant = keyof typeof BADGE_VARIANTS

/**
 * Text styles
 * @type {Object}
 */

export const TEXT_STYLES = {
  // Bebas Neue takes the two loudest levels, Manrope carries everything below
  heroTitle:
    'font-display text-[clamp(3.25rem,12vw,10rem)] uppercase leading-[0.82] tracking-[0.005em] text-foreground',
  pageTitle:
    'font-display text-[clamp(2.5rem,7vw,5rem)] uppercase leading-[0.86] tracking-[0.012em] text-foreground',
  sectionTitle:
    'font-display text-[clamp(1.9rem,4.4vw,3.5rem)] uppercase leading-[0.9] tracking-[0.014em] text-foreground',
  blockTitle: 'text-lg font-bold tracking-tight text-foreground',
  lead: 'text-lg sm:text-xl text-foreground-muted leading-relaxed',
  body: 'text-base text-foreground leading-relaxed',
  description: 'text-sm sm:text-base text-foreground-muted leading-relaxed',
  meta: 'text-xs text-foreground-subtle',
  label: 'text-sm font-semibold text-foreground',
  overline: 'text-xs font-bold uppercase tracking-[0.22em] text-primary',
  // Years, steps and counters, condensed so figures stay compact
  figure: 'font-display text-2xl leading-none tracking-[0.04em] tabular-nums text-primary',
  code: 'font-mono text-xs text-foreground-muted',
} as const

/**
 * Text style name
 * @typedef {keyof typeof TEXT_STYLES} TextStyle
 */

export type TextStyle = keyof typeof TEXT_STYLES

/**
 * Heading styles
 * @type {Object}
 */

export const HEADING_STYLES = {
  1: TEXT_STYLES.pageTitle,
  2: TEXT_STYLES.sectionTitle,
  3: TEXT_STYLES.blockTitle,
  4: 'text-base font-bold tracking-tight text-foreground',
} as const

/**
 * Heading level name
 * @typedef {keyof typeof HEADING_STYLES} HeadingLevel
 */

export type HeadingLevel = keyof typeof HEADING_STYLES

/**
 * Field styles
 * @type {Object}
 */

export const FIELD_STYLES = {
  wrapper: 'flex flex-col gap-1.5',
  label: `${TEXT_STYLES.label} flex items-center gap-1`,
  required: 'text-danger',
  control: `w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-foreground-subtle ${TRANSITION} ${FOCUS_RING} ${DISABLED} hover:border-border-strong`,
  controlHeight: 'h-10',
  controlWithIcon: 'pl-10',
  textarea: 'min-h-32 py-2.5 resize-y',
  invalid: 'border-danger focus-visible:ring-danger/40',
  icon: 'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-foreground-subtle',
  hint: TEXT_STYLES.meta,
  error: 'text-xs text-danger',
  choice: `flex items-start gap-2.5 text-sm text-foreground cursor-pointer ${DISABLED}`,
  checkbox: `h-4 w-4 mt-0.5 shrink-0 rounded-xs border border-border-strong text-primary accent-primary ${FOCUS_RING}`,
  switchTrack: `relative h-6 w-11 shrink-0 rounded-pill border border-transparent bg-border-strong ${TRANSITION} ${FOCUS_RING} data-[checked=true]:bg-primary`,
  switchThumb:
    'block h-5 w-5 translate-x-0.5 rounded-pill bg-background shadow-xs transition-transform duration-base data-[checked=true]:translate-x-[1.375rem]',
  grid: 'grid grid-cols-1 gap-4 sm:grid-cols-2',
  wide: 'sm:col-span-2',
} as const

/**
 * Skeleton base styles
 * @type {string}
 */

export const SKELETON_BASE = 'surface-shimmer animate-shimmer rounded-md'

/**
 * Skeleton shapes
 * @type {Object}
 */

export const SKELETON_SHAPES = {
  line: 'h-3 w-full',
  title: 'h-6 w-2/5',
  text: 'h-3 w-3/4',
  row: 'h-12 w-full',
  card: 'h-40 w-full rounded-lg',
  avatar: 'h-10 w-10 rounded-pill',
  button: 'h-10 w-28',
} as const

/**
 * Skeleton shape name
 * @typedef {keyof typeof SKELETON_SHAPES} SkeletonShape
 */

export type SkeletonShape = keyof typeof SKELETON_SHAPES

/**
 * Page skeleton styles
 * @type {Object}
 */

export const PAGE_SKELETON_STYLES = {
  header: 'flex flex-col gap-3',
  title: 'h-8 w-1/3',
  description: 'h-4 w-2/3',
  block: `${SURFACES.card} p-5`,
} as const

/**
 * Empty state styles
 * @type {Object}
 */

export const EMPTY_STATE_STYLES = {
  frame: 'flex flex-col items-center justify-center gap-3 rounded-lg px-6 py-12 text-center',
  start: {
    frame: `${SURFACES.card} border-dashed`,
    iconTile: `flex h-12 w-12 items-center justify-center rounded-pill ${TONE_SOFT.primary}`,
    icon: 'h-6 w-6',
    figure: 'h-28 w-28 text-primary/70',
  },
  filter: {
    frame: SURFACES.inset,
    iconTile: `flex h-12 w-12 items-center justify-center rounded-pill ${TONE_SOFT.neutral}`,
    icon: 'h-6 w-6',
    figure: 'h-28 w-28 text-foreground-subtle',
  },
} as const

/**
 * Empty state variant name
 * @typedef {Exclude<keyof typeof EMPTY_STATE_STYLES, 'frame'>} EmptyStateVariant
 */

export type EmptyStateVariant = Exclude<keyof typeof EMPTY_STATE_STYLES, 'frame'>

/**
 * Alert styles
 * @type {Object}
 */

export const ALERT_STYLES = {
  frame: 'flex items-start gap-3 rounded-lg border p-4',
  icon: 'mt-0.5 h-5 w-5 shrink-0',
  content: 'flex flex-col gap-1',
  title: 'text-sm font-semibold',
  description: 'text-sm opacity-90',
} as const

/**
 * Spinner sizes
 * @type {Record<Size, string>}
 */

export const SPINNER_SIZES: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-9 w-9',
}

/**
 * Avatar sizes
 * @type {Record<Size, string>}
 */

export const AVATAR_SIZES: Record<Size, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
}

/**
 * Avatar pixel sizes
 * @type {Record<Size, number>}
 */

export const AVATAR_PIXELS: Record<Size, number> = { sm: 32, md: 40, lg: 56 }

/**
 * Avatar styles
 * @type {Object}
 */

export const AVATAR_STYLES = {
  frame: `flex shrink-0 items-center justify-center overflow-hidden rounded-pill font-semibold ${TONE_SOFT.primary}`,
  image: 'h-full w-full object-cover',
} as const

/**
 * Progress bar styles
 * @type {Object}
 */

export const PROGRESS_STYLES = {
  track: 'h-2 w-full overflow-hidden rounded-pill bg-surface-strong',
  bar: 'h-full rounded-pill transition-[width] duration-slow ease-out',
} as const

/**
 * Overlay styles
 * @type {Object}
 */

export const OVERLAY_STYLES = {
  backdrop: 'fixed inset-0 bg-overlay/50 backdrop-blur-sm animate-fade-in',
  centered: 'fixed inset-0 flex items-end justify-center p-4 sm:items-center',
  panel: `relative w-full ${SURFACES.raised} shadow-lg animate-slide-up`,
  panelSizes: {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
  } satisfies Record<Size, string>,
  header: 'flex items-start justify-between gap-4 border-b border-border px-5 py-4',
  body: 'px-5 py-4',
  footer: 'flex flex-wrap justify-end gap-2 border-t border-border px-5 py-4',
} as const

/**
 * Drawer styles
 * @type {Object}
 */

export const DRAWER_STYLES = {
  panel: `fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-background shadow-lg animate-slide-left`,
  header: OVERLAY_STYLES.header,
  body: 'flex-1 overflow-y-auto px-5 py-4',
} as const

/**
 * Tooltip styles
 * @type {Object}
 */

export const TOOLTIP_STYLES = {
  wrapper: 'relative inline-flex',
  bubble:
    'pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow-md transition-opacity duration-fast group-hover:opacity-100 group-focus-within:opacity-100',
} as const

/**
 * Tab styles
 * @type {Object}
 */

export const TABS_STYLES = {
  list: 'flex gap-1 overflow-x-auto border-b border-border',
  trigger: `-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-foreground-muted ${TRANSITION} ${FOCUS_RING} hover:text-foreground`,
  triggerActive: 'border-primary text-foreground',
  panel: 'pt-5 animate-fade-in',
} as const

/**
 * Accordion styles
 * @type {Object}
 */

export const ACCORDION_STYLES = {
  list: 'divide-y divide-border rounded-lg border border-border',
  item: 'group',
  trigger: `flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground ${TRANSITION} ${FOCUS_RING} hover:bg-surface`,
  indicator: `h-4 w-4 shrink-0 text-foreground-subtle ${TRANSITION_ALL} data-[open=true]:rotate-180`,
  panel: 'px-5 pb-4 text-sm text-foreground-muted animate-fade-in',
} as const

/**
 * Table styles
 * @type {Object}
 */

export const TABLE_STYLES = {
  scroller: 'w-full overflow-x-auto',
  table: 'w-full border-collapse text-left text-sm',
  headCell:
    'border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground-subtle',
  row: `border-b border-border last:border-0 ${TRANSITION} hover:bg-surface`,
  cell: 'px-4 py-3 text-foreground',
  empty: 'px-4 py-10 text-center',
} as const

/**
 * Pagination styles
 * @type {Object}
 */

export const PAGINATION_STYLES = {
  frame: 'flex flex-wrap items-center justify-between gap-3 pt-1',
  actions: 'flex gap-2',
} as const

/**
 * Navigation header styles
 * @type {Object}
 */

export const NAVIGATION_STYLES = {
  // Rides over the hero until the page starts moving
  header: `sticky top-0 w-full border-b border-transparent ${TRANSITION_ALL}`,
  headerScrolled: 'border-border bg-background/75 backdrop-blur-xl',
  bar: 'flex h-header items-center justify-between gap-6',
  list: 'hidden items-center gap-1 md:flex',
  link: `rounded-lg px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-foreground-muted ${TRANSITION} ${FOCUS_RING} hover:text-primary`,
  linkActive: 'text-primary',
  actions: 'flex items-center gap-2',
  mobileList: 'flex flex-col gap-1',
  mobileLink: `rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.18em] text-foreground-muted ${TRANSITION} hover:bg-primary-soft hover:text-primary`,
  brand: `flex items-center gap-3 ${FOCUS_RING} rounded-lg`,
  brandSymbol: `flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${TONE_SOFT.primary}`,
} as const

/**
 * Brand lockup styles
 * @type {Object}
 */

export const BRAND_STYLES = {
  // Sized like a team badge, the mark leads the bar
  mark: 'h-11 w-auto shrink-0 text-foreground sm:h-14',
  markCompact: 'h-9 w-auto shrink-0 text-foreground',
  name: 'font-display text-2xl uppercase leading-none tracking-[0.05em] text-foreground sm:text-[1.75rem]',
  bolt: 'text-primary',
} as const

/**
 * Language switcher styles
 * @type {Object}
 */

export const LANGUAGE_SWITCHER_STYLES = {
  frame: `relative inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 pl-2.5 pr-7 ${TRANSITION} hover:border-border-strong`,
  flag: 'text-base leading-none',
  // Transparent native control, the frame around it carries the styling
  select: `cursor-pointer appearance-none bg-transparent py-2 text-sm text-foreground-muted ${FOCUS_RING} hover:text-foreground`,
  indicator: 'pointer-events-none absolute right-2.5 text-foreground-subtle',
} as const

/**
 * Footer styles
 * @type {Object}
 */

export const FOOTER_STYLES = {
  frame: 'border-t border-border bg-surface/60',
  grid: 'grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4',
  columnTitle: 'mb-1 text-xs font-bold uppercase tracking-[0.2em] text-foreground-subtle',
  list: 'mt-4 flex flex-col gap-2.5',
  link: `text-sm text-foreground-muted ${TRANSITION} hover:text-primary`,
  bottom:
    'flex flex-col gap-3 border-t border-border py-7 sm:flex-row sm:items-center sm:justify-between',
  socials: `flex gap-3 pt-1 text-foreground-muted`,
} as const

/**
 * Toast styles
 * @type {Object}
 */

export const TOAST_STYLES = {
  region:
    'pointer-events-none fixed inset-x-0 bottom-0 flex flex-col items-center gap-2 p-4 sm:items-end',
  toast: `pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-md animate-slide-up`,
} as const

/**
 * Card styles
 * @type {Object}
 */

export const CARD_STYLES = {
  frame: `${SURFACES.card} ${TRANSITION_ALL} overflow-hidden`,
  interactive: 'hover:border-primary/45 hover:shadow-glow hover:-translate-y-1',
  body: 'flex flex-col gap-3 p-6',
  media: 'relative aspect-[4/3] w-full overflow-hidden bg-surface-strong',
  mediaImage: `h-full w-full object-cover ${TRANSITION_ALL} group-hover:scale-105`,
} as const

/**
 * Stat tile styles
 * @type {Object}
 */

export const STAT_STYLES = {
  frame: `${SURFACES.card} flex flex-col gap-1 p-5`,
  // Readouts are set in the data face, tabular so digits do not jump while counting
  value: 'font-mono text-4xl font-medium tabular-nums tracking-tight text-foreground',
  iconTile: `mb-2 flex h-11 w-11 items-center justify-center rounded-lg`,
} as const

/**
 * Section styles
 * @type {Object}
 */

export const SECTION_STYLES = {
  header: 'flex flex-col gap-4',
  headerCentered: 'mx-auto max-w-narrow text-center',
  body: 'mt-14',
} as const

/**
 * Layout utilities
 * @type {Object}
 */

export const LAYOUT = {
  page: 'flex min-h-screen flex-col',
  main: 'flex-1',
  container: 'mx-auto w-full px-4 sm:px-6 lg:px-8',
  sectionStack: 'flex flex-col gap-8',
  stack: 'flex flex-col',
  row: 'flex items-center',
  between: 'flex items-center justify-between gap-4',
  center: 'flex items-center justify-center',
  grid: 'grid',
  divider: 'h-px w-full bg-border',
  dividerVertical: 'w-px self-stretch bg-border',
  srOnly: 'sr-only',
} as const

/**
 * Procedural page backdrop styles
 * @type {Object}
 */

export const TEXTURE_BACKDROP_STYLES = {
  frame: 'texture-frame',
  grain: 'texture-grain',
} as const

/**
 * Button class generator
 * @param {Object} [options] - Requested appearance
 * @param {ButtonVariant} [options.variant] - Variant declared above
 * @param {Size} [options.size] - Size declared above
 * @param {boolean} [options.fullWidth] - Stretch flag
 * @return {string} - Class list
 */

export const buttonClass = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: { variant?: ButtonVariant; size?: Size; fullWidth?: boolean } = {}): string =>
  [BUTTON_BASE, BUTTON_SIZES[size], BUTTON_VARIANTS[variant], fullWidth ? 'w-full' : '']
    .filter(Boolean)
    .join(' ')

/**
 * Scroll-to-top button styles
 * @type {Object}
 */

export const SCROLL_TO_TOP_STYLES = {
  // Clears the sticky action bar on mobile
  button: `fixed bottom-20 right-6 shadow-md md:bottom-6 ${TRANSITION_ALL}`,
  hidden: 'pointer-events-none translate-y-3 opacity-0',
} as const

/**
 * Sticky action bar styles
 * @type {Object}
 */

export const STICKY_ACTION_BAR_STYLES = {
  frame:
    'fixed inset-x-0 bottom-0 border-t border-border bg-background/95 p-3 backdrop-blur pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden',
} as const

/**
 * Consent trigger and dialog styles
 * @type {Object}
 */

export const CONSENT_STYLES = {
  // Bottom-left, clear of ScrollToTop and the sticky action bar which both sit bottom-right
  trigger: `fixed bottom-24 left-5 flex h-14 w-14 items-center justify-center rounded-pill border border-border bg-surface shadow-md sm:bottom-8 sm:left-8 ${TRANSITION_ALL} ${FOCUS_RING} hover:scale-105`,
  triggerImage: 'h-full w-full object-contain drop-shadow-sm',
  body: 'flex flex-col gap-6',
  categories: 'flex flex-col divide-y divide-border border-y border-border',
  category: 'flex items-center gap-4 py-4',
  categoryIcon: `flex h-10 w-10 shrink-0 items-center justify-center rounded-pill ${TONE_SOFT.primary}`,
  categoryBody: 'flex flex-1 flex-col gap-1',
  categoryLabel: 'text-sm font-medium text-foreground',
  lock: 'text-xs uppercase tracking-wide text-primary',
} as const

/**
 * Appointment booking styles
 * @type {Object}
 */

export const BOOKING_STYLES = {
  // Capped width, so the calendar stays compact next to the wider slot grid
  frame: 'grid items-start gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]',
  calendar: 'flex flex-col gap-5',
  panel: `${SURFACES.card} p-5 sm:p-7`,
  monthBar: 'flex items-center justify-between gap-3 pb-6',
  monthLabel: 'font-display text-lg font-medium capitalize tracking-tight text-foreground',
  weekdays: 'grid grid-cols-7 gap-1 pb-3',
  weekday:
    'py-1 text-center text-[0.5625rem] font-medium uppercase tracking-[0.2em] text-foreground-subtle',
  days: 'grid grid-cols-7 gap-1',
  day: `flex aspect-square items-center justify-center rounded-sm text-sm tabular-nums text-foreground ${TRANSITION_ALL} ${FOCUS_RING} hover:bg-primary/20`,
  dayClosed: 'cursor-not-allowed text-foreground-subtle/35 hover:bg-transparent',
  daySelected: 'bg-primary text-primary-foreground hover:bg-primary',
  dayToday: 'ring-1 ring-inset ring-primary/50',
  // Fewer, larger cells - a schedule grid, not a dense keypad
  slots: 'grid grid-cols-2 gap-3 sm:grid-cols-3',
  slot: `rounded-md border border-border py-3.5 text-sm font-medium tabular-nums text-foreground ${TRANSITION_ALL} ${FOCUS_RING} hover:border-primary hover:text-primary`,
  slotSelected: 'border-primary bg-primary text-primary-foreground hover:text-primary-foreground',
  summary:
    'border-b border-border pb-4 font-display text-lg font-medium capitalize text-foreground',
} as const

// Section title without a colour, so the filled block can set its own ink
const BLOCK_TITLE_BASE =
  'font-display text-[clamp(1.9rem,4.4vw,3.5rem)] uppercase leading-[0.92] tracking-[0.014em]'

/**
 * Filled title block, the identity's slash cutting its trailing edge
 * @type {Object}
 */

export const BLOCK_STYLES = {
  frame: 'slash-block inline-flex max-w-full items-center px-5 py-2 sm:px-8 sm:py-3',
  tone: 'bg-foreground',
  toneAccent: 'bg-primary',
  // Colourless base, the block behind it decides the ink
  title: `${BLOCK_TITLE_BASE} text-background`,
  titleAccent: `${BLOCK_TITLE_BASE} text-primary-foreground`,
  // Header stack, no eyebrow above the block
  header: 'flex flex-col items-start gap-6',
  headerCentered: 'items-center text-center',
  description: `${TEXT_STYLES.lead} max-w-2xl`,
  // Gap between a section heading and the block it introduces
  stack: 'flex flex-col gap-12 sm:gap-16',
} as const

/**
 * Photography treatment, cut on the slash angle and graded to the brand
 * @type {Object}
 */

export const MEDIA_STYLES = {
  frame: 'slash-media relative overflow-hidden',
  frameReverse: 'slash-media-reverse relative overflow-hidden',
  duotone: 'duotone',
  image: `h-full w-full object-cover ${TRANSITION_ALL}`,
  // Blue block offset behind a portrait, the mark's shadow
  shadow: 'slash-media absolute -bottom-5 -right-5 -z-10 h-full w-full bg-primary/25',
} as const

/**
 * Opening section styles
 * @type {Object}
 */

export const HERO_STYLES = {
  frame: 'relative flex min-h-[100svh] flex-col justify-end overflow-hidden',
  // Sits under the sticky header so the bar rides over the picture
  offset: '-mt-header pt-header',
  plate: 'absolute inset-0',
  plateImage: 'h-full w-full object-cover object-[68%_center]',
  // Two washes, dark enough for the headline and light enough to keep the frame
  scrim: 'absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent',
  scrimSide: 'absolute inset-0 bg-gradient-to-r from-background via-background/35 to-transparent',
  content: 'relative flex flex-col items-start gap-7 pb-28 pt-44 sm:pb-36',
  headline: `${TEXT_STYLES.heroTitle} max-w-4xl`,
  lead: 'max-w-xl',
  actions: 'flex flex-wrap items-center gap-4',
  // Scroll invitation, held at the foot of the picture
  cue: 'flex items-center gap-4 pt-6 text-foreground-subtle',
  cueLine: 'h-12 w-px bg-gradient-to-b from-primary to-transparent',
  cueLabel: 'text-xs font-bold uppercase tracking-[0.28em]',
} as const

/**
 * Qualification card styles
 * @type {Object}
 */

export const CREDENTIAL_STYLES = {
  grid: 'grid gap-5 md:grid-cols-3',
  card: `${SURFACES.card} ${TRANSITION_ALL} group relative flex flex-col gap-5 overflow-hidden p-7 hover:border-primary/45 hover:shadow-glow hover:-translate-y-1`,
  head: 'flex items-start justify-between gap-4',
  iconTile: 'flex h-12 w-12 items-center justify-center rounded-lg',
  year: TEXT_STYLES.figure,
  title: 'font-display text-2xl uppercase leading-none tracking-[0.02em] text-foreground',
  issuer: 'text-xs font-semibold uppercase tracking-[0.16em] text-foreground-subtle',
} as const

/**
 * Result card styles, a picture doing the talking
 * @type {Object}
 */

export const OUTCOME_STYLES = {
  grid: 'grid gap-8 md:grid-cols-3',
  // Every other card drops, so the row reads as a slope
  card: 'group flex flex-col gap-6 md:even:mt-14',
  media: 'aspect-[4/5] w-full',
  body: 'flex flex-col gap-3',
  head: 'flex items-center gap-3',
  iconTile: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${TONE_SOFT.primary}`,
  title: 'font-display text-3xl uppercase leading-none tracking-[0.02em] text-foreground',
} as const

/**
 * Track record rail styles
 * @type {Object}
 */

export const READOUT_STYLES = {
  rail: 'relative grid gap-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6',
  line: 'pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block',
  cell: 'relative flex flex-col gap-2 lg:pl-6 lg:pt-10',
  tick: 'absolute left-0 top-0 hidden h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-primary shadow-beam lg:block',
  value:
    'font-display text-[clamp(3.25rem,6vw,5rem)] leading-[0.85] tracking-[0.02em] tabular-nums text-foreground',
  label: 'text-sm font-semibold text-foreground',
  note: 'text-xs uppercase tracking-[0.16em] text-foreground-subtle',
} as const

/**
 * Tagged sequence styles, a chronology or an ordered protocol
 * @type {Object}
 */

export const SEQUENCE_STYLES = {
  // The portrait rides beside the rail once the column has room for it
  split: 'grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]',
  portrait: 'relative order-first lg:order-none lg:sticky lg:top-32',
  list: 'relative flex flex-col gap-10 pl-9 sm:gap-14 sm:pl-16',
  rail: 'absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-primary via-border-strong to-transparent sm:left-3',
  item: 'group relative flex flex-col gap-2',
  marker:
    'absolute -left-9 top-1.5 flex h-4 w-4 rotate-45 items-center justify-center bg-background shadow-beam ring-1 ring-primary sm:-left-16',
  markerFill: `h-2 w-2 bg-primary ${TRANSITION_ALL} group-hover:scale-125`,
  stamp: `${TEXT_STYLES.figure} block`,
  title:
    'font-display text-2xl uppercase leading-none tracking-[0.02em] text-foreground sm:text-3xl',
  body: `${TEXT_STYLES.description} max-w-2xl`,
} as const

/**
 * Coaching format styles
 * @type {Object}
 */

export const PROGRAM_STYLES = {
  grid: 'grid gap-6 lg:grid-cols-3',
  card: `${SURFACES.card} ${TRANSITION_ALL} relative flex flex-col gap-6 p-7 hover:border-primary/45 hover:shadow-glow hover:-translate-y-1 sm:p-9`,
  cardFeatured: 'border-primary/45 shadow-glow lg:-translate-y-3',
  head: 'flex flex-col gap-4',
  iconTile: 'flex h-12 w-12 items-center justify-center rounded-lg',
  title: 'font-display text-3xl uppercase leading-none tracking-[0.02em] text-foreground',
  included: 'flex flex-1 flex-col gap-3 border-t border-border pt-6',
  includedRow: 'flex items-start gap-3 text-sm text-foreground-muted',
  includedIcon: 'mt-0.5 h-4 w-4 shrink-0 text-primary',
  badge: 'absolute right-7 top-8 text-xs font-bold uppercase tracking-[0.16em] text-primary',
} as const

/**
 * Closing band styles, a full-bleed picture behind the last ask
 * @type {Object}
 */

export const CALL_TO_ACTION_STYLES = {
  frame: 'relative isolate overflow-hidden',
  plate: 'absolute inset-0 -z-10',
  plateImage: 'h-full w-full object-cover',
  scrim:
    'absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/55',
  body: 'flex flex-col items-start gap-6 py-24 sm:py-32',
} as const

/**
 * Before/after comparison carousel styles
 * @type {Object}
 */

export const COMPARISON_STYLES = {
  frame: 'flex flex-col gap-8',
  viewportWrapper: 'relative',
  // Padding shows a sliver of the next pair, so the eye anticipates it
  viewport:
    'flex snap-x snap-mandatory scroll-smooth overflow-x-auto px-[7%] [scrollbar-width:none] sm:px-[18%] [&::-webkit-scrollbar]:hidden',
  slide: 'w-[86%] shrink-0 snap-center px-1.5 sm:w-[64%]',
  card: `mx-auto max-w-4xl ${SURFACES.glass} p-6 sm:p-10 ${TRANSITION_ALL}`,
  // Only the centred pair reads at full scale
  cardActive: 'scale-100 opacity-100',
  cardInactive: 'scale-[0.94] opacity-55',
  pair: 'grid gap-5 sm:grid-cols-2 sm:gap-8',
  panel:
    'relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-strong',
  panelLabel:
    'absolute left-5 top-5 text-[0.5625rem] font-medium uppercase tracking-[0.3em] text-foreground-subtle',
  caption: 'mt-8 flex flex-col gap-3 border-t border-border pt-7',
  captionTitle: 'font-display text-xl font-medium text-foreground',
  controls: 'flex items-center justify-between gap-6',
  dots: 'flex flex-1 items-center gap-2.5',
  dot: `h-px flex-1 bg-border-strong ${TRANSITION_ALL} ${FOCUS_RING} rounded-pill hover:bg-primary/60`,
  dotActive: 'h-0.5 bg-primary',
  counter: 'text-[0.625rem] uppercase tracking-[0.28em] tabular-nums text-foreground-subtle',
  // Floats over the pair itself, not in the control row below
  arrow: `${SURFACES.glass} absolute top-1/2 z-10 -translate-y-1/2 rounded-pill text-primary hover:text-primary-hover ${TRANSITION_ALL}`,
  arrowLeft: 'left-2 sm:left-4',
  arrowRight: 'right-2 sm:right-4',
} as const
