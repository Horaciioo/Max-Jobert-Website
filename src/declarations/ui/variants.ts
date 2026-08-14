import {
  DISABLED,
  FOCUS_RING,
  LAYERS,
  SURFACES,
  SWEEP,
  TONE_SOFT,
  TRANSITION,
  TRANSITION_ALL,
  UNDERLINE,
} from '@/declarations/ui/tokens'
import type { Size, Tone } from '@/types/common'

/**
 * Button base styles
 * @type {string}
 */

export const BUTTON_BASE = `inline-flex items-center justify-center gap-2 rounded-xs font-display uppercase leading-none tracking-[0.08em] whitespace-nowrap ${TRANSITION} ${SWEEP} ${FOCUS_RING} ${DISABLED}`

/**
 * Button sizes, a step above the sans scale since the display face runs condensed
 * @type {Record<Size, string>}
 */

export const BUTTON_SIZES: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'h-14 px-8 text-xl',
}

/**
 * Button variants, the sweep before:bg carries the hover wash
 * @type {Object}
 */

export const BUTTON_VARIANTS = {
  primary: 'bg-primary text-primary-foreground before:bg-primary-hover',
  secondary: 'bg-surface-strong text-foreground before:bg-primary hover:text-primary-foreground',
  outline: 'border border-primary text-primary before:bg-primary hover:text-primary-foreground',
  ghost: 'text-foreground-muted before:bg-primary-soft hover:text-primary',
  link: 'text-primary underline-offset-4 hover:underline px-0 h-auto before:content-none',
  danger: 'bg-danger text-background before:bg-danger/80',
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
 * Typed-out phrase styles, the tail of a claim that keeps rewriting itself
 * @type {Object}
 */

export const ROTATING_TEXT_STYLES = {
  frame: 'inline-flex items-baseline gap-0.5 font-semibold text-primary',
  // Held on the baseline of the line it ends, never taller than the text
  caret: 'inline-block h-[0.95em] w-[0.09em] translate-y-[0.1em] animate-blink bg-primary',
} as const

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
  indicator: `h-4 w-4 shrink-0 text-foreground-subtle ${TRANSITION_ALL}`,
  // Icon renders a glyph, not a host element: the rotation comes as a class, not a data attribute
  indicatorOpen: 'rotate-180',
  // Collapsed height animates through grid-template-rows, the one way to ease to auto
  panel:
    'grid grid-rows-[0fr] transition-[grid-template-rows] duration-moderate ease-out motion-reduce:transition-none data-[open=true]:grid-rows-[1fr]',
  panelClip: 'overflow-hidden',
  panelBody: `px-5 pb-4 text-sm text-foreground-muted opacity-0 ${TRANSITION_ALL} group-data-[open=true]/panel:opacity-100`,
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
  // Explicit z-index: a sticky header with none paints behind later, positioned page content
  header: `sticky top-0 w-full px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 ${LAYERS.header}`,
  // Holds the mark and the bar side by side, centred as one assembly
  row: 'mx-auto flex max-w-container items-center gap-4 sm:gap-6',
  bar: 'flex h-16 flex-1 items-center justify-between gap-6 rounded-xs border border-border bg-surface px-5 shadow-bar sm:px-6',
  // Pages sit where the wordmark used to, now that the mark lives outside the bar
  list: 'hidden items-center gap-1 md:flex',
  link: `rounded-xs px-3 py-2 font-display text-lg uppercase leading-none tracking-[0.08em] text-foreground ${TRANSITION} ${FOCUS_RING} hover:text-primary`,
  linkActive: 'text-primary',
  // Pinned right even alone, the wide gap keeps the networks off the call to action
  actions: 'ml-auto flex items-center gap-8',
  // Last to earn room: the banner above the footer already carries the networks
  socials: 'hidden items-center gap-4 xl:flex',
  socialLink: `text-foreground ${TRANSITION} hover:text-primary`,
  mobileList: 'flex flex-col gap-1',
  mobileLink: `rounded-xs px-3 py-3 font-display text-xl uppercase leading-none tracking-[0.08em] text-foreground ${TRANSITION} hover:bg-primary-soft hover:text-primary`,
  // A grouped slot: the trigger sits in the bar, the panel floats under it
  menu: 'relative',
  menuTrigger: `flex items-center gap-1.5 rounded-xs px-3 py-2 font-display text-lg uppercase leading-none tracking-[0.08em] text-foreground ${TRANSITION} ${FOCUS_RING} hover:text-primary`,
  menuIndicator: `h-3.5 w-3.5 ${TRANSITION_ALL}`,
  menuIndicatorOpen: 'rotate-180',
  panel: `absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-4 ${TRANSITION_ALL}`,
  panelClosed: 'pointer-events-none -translate-y-1 opacity-0',
  panelOpen: 'translate-y-0 opacity-100',
  panelBody: `${SURFACES.glass} flex flex-col p-2 shadow-md`,
  panelLink: `rounded-xs px-3 py-2.5 font-display text-base uppercase leading-none tracking-[0.08em] text-foreground ${TRANSITION} hover:bg-primary-soft hover:text-primary`,
  // Groups become a labelled block once the drawer stacks them
  groupLabel: 'px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground-subtle',
  groupList: 'flex flex-col gap-1 border-l border-border pl-3',
  brand: `shrink-0 ${FOCUS_RING} rounded-xs`,
  brandSymbol: `flex h-9 w-9 items-center justify-center rounded-xs text-sm font-bold ${TONE_SOFT.primary}`,
} as const

/**
 * Brand lockup styles
 * @type {Object}
 */

export const BRAND_STYLES = {
  // Default height, the caller overrides it with a mark class
  lockup: 'flex h-12 items-center gap-2',
  // Standalone beside the bar, deliberately taller than it
  mark: 'h-20 w-auto shrink-0 sm:h-28',
  markCompact: 'h-12 w-auto shrink-0',
  // Takes its height from the lockup, never a size of its own
  image: 'h-full w-auto object-contain',
  name: 'font-display text-2xl uppercase leading-none tracking-[0.05em] text-foreground sm:text-[1.75rem]',
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
  image: 'texture-image',
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
 * Overlay scroll bar styles, the native one being hidden by globals.css
 * @type {Object}
 */

export const SCROLL_BAR_STYLES = {
  // Fixed and click-through, so no layout ever reserves room for it
  track: `pointer-events-none fixed inset-y-2 right-1.5 w-2.5 ${LAYERS.scrollBar}`,
  // The only visible part, the track itself never shows
  thumb:
    'pointer-events-none absolute inset-x-0 cursor-grab rounded-pill bg-foreground-subtle opacity-0 transition-opacity duration-base ease-out',
  // Grabbable only once seen, an invisible thumb would still swallow edge clicks
  thumbVisible: 'pointer-events-auto opacity-40',
  thumbDragging: 'cursor-grabbing opacity-70',
} as const

/**
 * Social banner styles, a full-bleed band of network icons
 * @type {Object}
 */

export const SOCIAL_BANNER_STYLES = {
  // Blue ground, the gradient only lifts the edges by a hair
  frame:
    'bg-primary bg-gradient-to-r from-media-foreground/10 via-transparent to-media-foreground/10',
  // Spread across the container rail rather than bunched in the middle
  row: 'flex flex-wrap items-center justify-between gap-8 py-8 sm:gap-12',
  link: `text-primary-foreground ${TRANSITION_ALL} ${FOCUS_RING} hover:scale-110 hover:opacity-80`,
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
 * Section heading appearance, the block fill deciding its own ink
 * @type {Object}
 */

export const HEADING_APPEARANCES = {
  plain: {
    block: BLOCK_STYLES.tone,
    title: BLOCK_STYLES.title,
    description: BLOCK_STYLES.description,
  },
  accent: {
    block: BLOCK_STYLES.toneAccent,
    title: BLOCK_STYLES.titleAccent,
    description: BLOCK_STYLES.description,
  },
  // Set over a photograph: media ink, and a shorter measure so the words stay off the subject
  media: {
    block: BLOCK_STYLES.toneAccent,
    title: BLOCK_STYLES.titleAccent,
    description: 'text-base leading-relaxed text-media-foreground/85 max-w-xl sm:text-lg',
  },
} as const

/**
 * Section heading appearance name
 * @typedef {keyof typeof HEADING_APPEARANCES} HeadingAppearance
 */

export type HeadingAppearance = keyof typeof HEADING_APPEARANCES

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
  // Slides stack, only the current one is opaque
  slide: `absolute inset-0 overflow-hidden ${TRANSITION_ALL} duration-slow`,
  slideActive: 'opacity-100',
  slideIdle: 'opacity-0',
  still: 'h-full w-full',
  // Only set once the still is on show, or the zoom would run out of sight
  stillZoom: 'animate-slow-zoom',
  // Held clear of the right edge, centred on the footage
  markers: 'absolute right-[1.2rem] top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3',
  marker: `h-3 w-3 ${TRANSITION_ALL} ${FOCUS_RING} hover:scale-125`,
  markerActive: 'bg-media-foreground',
  markerIdle: 'bg-media-foreground/40',
  // Darkens the footage under the words, whatever the footage happens to show
  scrim: 'absolute inset-0 bg-gradient-to-t from-overlay/90 via-overlay/55 to-overlay/25',
  content: 'relative flex flex-col items-start gap-7 pb-28 pt-44 sm:pb-36',
  // Media ink, not theme ink: the words sit on footage, not on the page
  headline: `${TEXT_STYLES.heroTitle} max-w-4xl text-media-foreground`,
  lead: 'max-w-2xl text-media-foreground/85',
  // Plain until pointed at, the rule only grows on hover
  leadLink: `font-semibold text-media-foreground ${TRANSITION} ${UNDERLINE} ${FOCUS_RING} after:bottom-0 after:bg-media-foreground hover:text-primary hover:after:bg-primary`,
  actions: 'flex flex-wrap items-center gap-4',
} as const

/**
 * Unfinished page notice styles
 * @type {Object}
 */

export const DEVELOPMENT_STYLES = {
  frame: `${SURFACES.card} flex flex-col items-center gap-5 border-dashed px-6 py-20 text-center sm:py-28`,
  iconTile: `flex h-16 w-16 items-center justify-center rounded-pill ${TONE_SOFT.warning}`,
  title:
    'font-display text-4xl uppercase leading-none tracking-[0.02em] text-foreground sm:text-5xl',
  description: `${TEXT_STYLES.lead} max-w-xl`,
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
 * Ways of being followed, three panels sharing one rail
 * @type {Object}
 */

export const MODE_STYLES = {
  grid: 'grid gap-8 md:grid-cols-3',
  // Every other card drops, so the row reads as a slope rather than a shelf
  card: 'group flex flex-col gap-6 md:even:mt-14',
  media: 'aspect-[4/5] w-full',
  body: 'flex flex-col gap-3',
  head: 'flex items-center gap-3',
  index: `${TEXT_STYLES.figure} text-xl`,
  marker: `h-3 w-3 shrink-0 rotate-45 bg-primary ${TRANSITION_ALL} group-hover:scale-125`,
  title: 'font-display text-3xl uppercase leading-none tracking-[0.02em] text-foreground',
} as const

/**
 * Services on offer, one editorial row each
 * @type {Object}
 */

export const SERVICE_STYLES = {
  list: 'flex flex-col divide-y divide-border border-y border-border',
  row: `group relative grid items-center gap-6 py-10 ${TRANSITION_ALL} lg:grid-cols-[6rem_minmax(0,1fr)_minmax(0,20rem)] lg:gap-10 lg:hover:bg-primary-soft lg:hover:px-8`,
  index: `${TEXT_STYLES.figure} text-4xl`,
  body: 'flex flex-col items-start gap-3',
  title:
    'font-display text-3xl uppercase leading-none tracking-[0.02em] text-foreground sm:text-4xl',
  description: `${TEXT_STYLES.description} max-w-2xl`,
  // Held grey and faint: an untouched row recedes without disappearing
  media: `relative hidden aspect-[4/3] w-full overflow-hidden opacity-40 grayscale ${TRANSITION_ALL} duration-slow group-hover:opacity-100 group-hover:grayscale-0 lg:block`,
  // Wiped in from the left on hover. Left open below lg, where nothing hovers
  action:
    'mt-2 transition-[clip-path] duration-moderate ease-out lg:[clip-path:inset(0_100%_0_0)] lg:group-focus-within:[clip-path:inset(0_0_0_0)] lg:group-hover:[clip-path:inset(0_0_0_0)]',
} as const

/**
 * Ordered protocol, read left to right rather than top to bottom
 * @type {Object}
 */

export const TRACK_STYLES = {
  frame: 'flex flex-col gap-8',
  // Bleeds past the container rail, so the last step is clearly not the last pixel
  viewport:
    'flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  step: 'flex w-[78%] shrink-0 snap-start flex-col gap-5 sm:w-[46%] lg:w-[30%]',
  // The rule runs through the square, which sits on it rather than beside it
  rail: 'relative flex items-center',
  railLine: 'h-px flex-1 bg-border-strong',
  marker: `h-3.5 w-3.5 shrink-0 rotate-45 ${TRANSITION_ALL} bg-border-strong`,
  markerActive: 'bg-primary shadow-beam',
  body: 'flex flex-col gap-3 pr-4',
  stamp: `${TEXT_STYLES.figure} text-3xl`,
  title: 'font-display text-2xl uppercase leading-none tracking-[0.02em] text-foreground',
  description: TEXT_STYLES.description,
  controls: 'flex items-center justify-between gap-6',
  // Progress of the scroller itself, the only affordance a trackpad user needs
  progress: 'relative block h-px flex-1 bg-border',
  progressBar:
    'absolute inset-0 origin-left bg-primary transition-transform duration-base ease-out',
  actions: 'flex gap-2',
} as const

/**
 * Coaching format styles
 * @type {Object}
 */

export const PROGRAM_STYLES = {
  // The ribbon overhangs by 0.75rem into the container gutter, which is wider and never clipped
  grid: 'grid gap-7 lg:grid-cols-3',
  // isolate is load-bearing: it lets the -z-10 wash paint over the card background, under the copy
  card: `${SURFACES.card} ${TRANSITION_ALL} group relative isolate flex flex-col gap-7 p-8 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-glow sm:p-10`,
  cardFeatured: 'border-primary/50 shadow-glow lg:-translate-y-4',
  // Only on the featured card, spent well before the list starts
  wash: 'pointer-events-none absolute inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-primary-soft to-transparent',
  head: 'flex flex-col gap-4',
  title: 'font-display text-4xl uppercase leading-none tracking-[0.02em] text-foreground',
  // The section-heading motif, shrunk to a rule that anchors the title
  titleRule: 'slash-block h-1 w-14 bg-primary',
  included: 'flex flex-1 flex-col gap-3.5 border-t border-border pt-7',
  includedRow: 'flex items-start gap-3 text-sm text-foreground-muted',
  includedIcon: 'mt-0.5 h-4 w-4 shrink-0 text-primary',
  // Ribbon wrapped over the right edge, the darker fold under the overhang carries the relief
  ribbon: 'pointer-events-none absolute -right-4 top-8 z-10 flex flex-col items-end',
  ribbonFace:
    'bg-gradient-to-r from-primary-hover to-primary py-7 pl-3 pr-3.5 font-display text-base uppercase leading-none tracking-[0.22em] text-primary-foreground shadow-lg [writing-mode:vertical-rl]',
  ribbonFold: 'h-4 w-4 bg-primary-hover [clip-path:polygon(0_0,100%_0,0_100%)]',
} as const

/**
 * Closing band styles, a full-bleed picture behind the last ask
 * @type {Object}
 */

export const CALL_TO_ACTION_STYLES = {
  frame: 'relative isolate overflow-hidden',
  plate: 'absolute inset-0 -z-10',
  plateImage: 'h-full w-full object-cover',
  // Without it the picture decides the contrast, and it never picks the same one twice
  scrim: 'absolute inset-0 -z-10 bg-gradient-to-r from-overlay/90 via-overlay/70 to-overlay/40',
  body: 'flex flex-col items-start gap-6 py-24 sm:py-32',
} as const

// Corner radius of a trail turn, and the dashed rule drawing it
const TRAIL_STROKE = 'border-dashed border-border-strong'

/**
 * Alternating trail styles, each step hung opposite the previous one
 * @type {Object}
 */

export const ZIGZAG_STYLES = {
  // Holds the spine, which is absolute and spans every step
  frame: 'relative',
  // Runs down the gutter between the two columns, never over the copy
  spine:
    'pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block',
  // Height driven by the scroll, so the filled part follows the reader down
  spineFill: 'absolute inset-x-0 top-0 h-0 bg-primary',
  // Rides at the end of the fill, unsquashed because the fill grows by height
  spineHead:
    'absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary shadow-beam',
  list: 'flex flex-col',
  step: 'flex flex-col',
  // Media first on a phone, the reading order is restored from the medium breakpoint up
  row: 'grid items-center gap-8 md:grid-cols-2 md:gap-16',
  rowReversed: 'md:[&>*:first-child]:order-2',
  body: 'flex flex-col items-start gap-4',
  stamp: `${TEXT_STYLES.figure} text-4xl sm:text-5xl`,
  title:
    'font-display text-3xl uppercase leading-none tracking-[0.02em] text-foreground sm:text-4xl',
  description: 'max-w-prose',
  // isolate is load-bearing: without it the offset block sinks under the page backdrop
  media: 'relative isolate',
  mediaFrame: 'aspect-[4/5] w-full sm:aspect-[4/3] md:aspect-[4/5]',
  // Blue block offset behind the picture, the mark's shadow
  mediaShadow: 'slash-media absolute -bottom-4 -right-4 -z-10 h-full w-full bg-primary/20',
  // Two half boxes: the first drops then runs to mid-width, the second finishes and drops again
  trail: 'relative hidden h-28 w-full md:block',
  trailHead: `absolute top-0 h-1/2 border-b-2 ${TRAIL_STROKE}`,
  trailTail: `absolute top-1/2 h-1/2 border-t-2 ${TRAIL_STROKE}`,
  trailHeadForward: 'left-1/4 right-1/2 rounded-bl-[2.5rem] border-l-2',
  trailTailForward: 'left-1/2 right-1/4 rounded-tr-[2.5rem] border-r-2',
  trailHeadReversed: 'left-1/2 right-1/4 rounded-br-[2.5rem] border-r-2',
  trailTailReversed: 'left-1/4 right-1/2 rounded-tl-[2.5rem] border-l-2',
  // Stacked layout has nowhere to zigzag, the trail becomes a plain drop
  trailCompact: `mx-auto block h-16 w-0 border-l-2 ${TRAIL_STROKE} md:hidden`,
} as const

/**
 * Rate driver styles, what makes the amount move
 * @type {Object}
 */

export const RATE_STYLES = {
  grid: 'grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3',
  cell: `bg-surface ${TRANSITION_ALL} flex flex-col gap-3 p-7 hover:bg-primary-soft`,
  index: `${TEXT_STYLES.figure} text-xl`,
  title: 'font-display text-2xl uppercase leading-none tracking-[0.02em] text-foreground',
} as const

/**
 * Contact styles, a location card facing the form
 * @type {Object}
 */

export const CONTACT_STYLES = {
  grid: 'grid items-start gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]',
  aside: 'flex flex-col gap-6',
  // The venue picture is a ground, not a subject: dimmed, and cropped from the top
  venue: 'relative isolate flex min-h-[19rem] flex-col justify-end overflow-hidden p-7 sm:p-9',
  // Picture nests its own img, the crop has to reach it through the wrapper
  venueImage: 'absolute inset-0 -z-10 h-full w-full [&_img]:object-top',
  venueScrim:
    'absolute inset-0 -z-10 bg-gradient-to-t from-overlay/95 via-overlay/80 to-overlay/55',
  venueName: 'font-display text-3xl uppercase leading-none tracking-[0.02em] text-media-foreground',
  venueAddress: 'text-sm leading-relaxed text-media-foreground/80',
  venueActions: 'mt-6 flex flex-wrap gap-3',
  channels:
    'grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-1',
  channel: `bg-surface ${TRANSITION_ALL} flex items-center gap-4 p-5 hover:bg-primary-soft`,
  channelIcon: `flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${TONE_SOFT.primary}`,
  channelBody: 'flex min-w-0 flex-col',
  channelLabel: 'text-xs font-bold uppercase tracking-[0.18em] text-foreground-subtle',
  channelValue: `truncate text-base font-semibold text-foreground ${TRANSITION} group-hover:text-primary`,
  form: `${SURFACES.card} p-6 sm:p-9`,
} as const

// Screen ratio and bezel of a modern handset, kept in one place
const DEVICE_RATIO = 'aspect-[9/19.5]'

/**
 * Handset shell styles, drawn rather than composited from a bitmap
 * @type {Object}
 */

export const DEVICE_STYLES = {
  frame: `relative mx-auto w-full max-w-[17.5rem] ${DEVICE_RATIO} rounded-[2.75rem] bg-foreground p-[0.55rem] shadow-lg`,
  // Thin light rim, what separates the shell from the page behind it
  rim: 'pointer-events-none absolute inset-0 rounded-[2.75rem] ring-1 ring-inset ring-media-foreground/15',
  screen: 'relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background',
  // Notch, painted in the shell colour so it reads as a cut in the glass
  notch:
    'absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground sm:h-7 sm:w-32',
  scroller: 'h-full w-full overflow-hidden pt-8',
  button:
    'pointer-events-none absolute -right-[0.15rem] top-[7.5rem] h-14 w-[0.15rem] rounded-r-sm bg-foreground',
} as const

/**
 * Skeleton spreadsheet styles, nomenclature legible and values withheld
 * @type {Object}
 */

export const SHEET_STYLES = {
  frame: 'flex flex-col gap-3 px-2.5 pb-6',
  block: 'flex flex-col overflow-hidden border border-primary/30',
  caption:
    'bg-primary px-2 py-1.5 text-center text-[0.5rem] font-bold uppercase tracking-[0.14em] text-primary-foreground',
  head: 'grid divide-x divide-primary/25 bg-primary/15',
  headCell:
    'truncate px-1 py-1 text-center text-[0.4375rem] font-bold uppercase tracking-[0.06em] text-primary',
  body: 'divide-y divide-border',
  row: 'grid divide-x divide-border',
  cell: 'flex items-center px-1 py-[0.3125rem]',
  // The only content ever shown: a bar where a value would sit
  value: 'h-1.5 w-full rounded-pill',
  // First column of a labelled block reads as a heading, still without a word in it
  label: 'w-3/4 bg-primary/30 bg-none',
} as const

/**
 * Sheet column counts, the grid template a block asks for
 * @type {Object}
 */

export const SHEET_COLUMNS = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
} as const

/**
 * Sheet column count
 * @typedef {keyof typeof SHEET_COLUMNS} SheetColumnCount
 */

export type SheetColumnCount = keyof typeof SHEET_COLUMNS

/**
 * Method screens styles, one handset per tracking sheet
 * @type {Object}
 */

export const METHOD_STYLES = {
  frame: 'grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-20',
  // Fans the handsets out from one point, so only the chosen one reads in full.
  // Overflow is clipped: a far card leaving the frame is the point of a fan
  deck: 'relative mx-auto flex h-[32rem] w-full max-w-2xl items-center justify-center overflow-hidden',
  card: `absolute w-[13rem] origin-bottom ${TRANSITION_ALL} duration-slow ${FOCUS_RING}`,
  // Idle cards answer the pointer by lifting slightly out of the fan
  cardIdle: 'cursor-pointer hover:-translate-y-3 hover:opacity-80 hover:blur-0',
  panel: 'flex flex-col items-start gap-6',
  stamp: `${TEXT_STYLES.figure} text-xl`,
  title:
    'font-display text-3xl uppercase leading-none tracking-[0.02em] text-foreground sm:text-4xl',
  description: `${TEXT_STYLES.description} max-w-md`,
  // The squares of the identity, reused as the deck selector
  markers: 'flex items-center gap-4 pt-2',
  marker: `h-3 w-3 rotate-45 ${TRANSITION_ALL} ${FOCUS_RING} hover:scale-125`,
  markerActive: 'bg-primary shadow-beam',
  markerIdle: 'bg-border-strong',
  markerLabel: 'sr-only',
} as const

/**
 * Resting place of a fanned card, keyed by its distance from the front one
 * @type {Object}
 */

export const DECK_SLOTS = {
  '-2': 'z-10 -translate-x-[10rem] -rotate-[22deg] scale-[0.82] opacity-30 blur-[2px]',
  '-1': 'z-20 -translate-x-[6rem] -rotate-[12deg] scale-90 opacity-50 blur-[1px]',
  '0': 'z-30 translate-x-0 rotate-0 scale-100 opacity-100 blur-0',
  '1': 'z-20 translate-x-[6rem] rotate-[12deg] scale-90 opacity-50 blur-[1px]',
  '2': 'z-10 translate-x-[10rem] rotate-[22deg] scale-[0.82] opacity-30 blur-[2px]',
} as const

/**
 * Furthest slot a card can reach, anything beyond rests there
 * @type {number}
 */

export const DECK_REACH = 2

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
