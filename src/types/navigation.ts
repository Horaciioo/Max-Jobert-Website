import type { ActionName } from '@/declarations/naming'
import type { ROUTES } from '@/declarations/routes'
import type { IconName } from '@/declarations/ui/icons'
import type { RegistryKey } from '@/types/common'

/**
 * Declared route identifier
 * @typedef {RegistryKey<typeof ROUTES>} RouteId
 */

export type RouteId = RegistryKey<typeof ROUTES>

/**
 * Route declaration
 * @typedef RouteDeclaration
 * @property {string} path - Route path
 * @property {IconName} [icon] - Navigation icon
 * @property {boolean} [indexable] - Sitemap indexing
 * @property {ActionName} [ctaAction] - Label when used as a CTA target
 */

export interface RouteDeclaration {
  // Route path
  path: string
  icon?: IconName
  // Sitemap indexing
  indexable?: boolean
  // CTA label action
  ctaAction?: ActionName
}

/**
 * Navigation group declaration
 * @typedef NavigationGroupDeclaration
 * @property {string} id - Group ID
 * @property {RouteId[]} routes - Grouped routes
 */

export interface NavigationGroupDeclaration {
  id: string
  routes: RouteId[]
}

/**
 * Header slot, a route or a group of routes
 * @typedef {RouteId | NavigationGroupDeclaration} HeaderEntryDeclaration
 */

export type HeaderEntryDeclaration = RouteId | NavigationGroupDeclaration

/**
 * Navigation entry
 * @typedef NavigationEntry
 * @property {string} id - Route or group ID
 * @property {string} [href] - Pathname
 * @property {string} label - Display label
 * @property {IconName} [icon] - Navigation icon
 * @property {boolean} isActive - Current route flag
 * @property {NavigationEntry[]} [children] - Grouped entries
 */

export interface NavigationEntry {
  id: string
  // Absent on a group, which opens instead of navigating
  href?: string
  label: string
  icon?: IconName
  isActive: boolean
  children?: RouteNavigationEntry[]
}

/**
 * Navigation entry standing for a route, so always navigable
 * @typedef RouteNavigationEntry
 * @property {string} href - Pathname
 */

export interface RouteNavigationEntry extends NavigationEntry {
  href: string
}

/**
 * Breadcrumb entry
 * @typedef BreadcrumbEntry
 * @property {string} href - Link target
 * @property {string} label - Display text
 */

export interface BreadcrumbEntry {
  href: string
  label: string
}

/**
 * Postal address
 * @typedef PostalAddress
 * @property {string} street - Street line
 * @property {string} postalCode - Postal code
 * @property {string} city - City
 * @property {string} country - Country code
 * @property {string} [venue] - Place name
 */

export interface PostalAddress {
  street: string
  postalCode: string
  city: string
  country: string
  // Named place at that address, put first in a map query
  venue?: string
}
