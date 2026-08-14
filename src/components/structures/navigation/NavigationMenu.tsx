'use client'

import { useState } from 'react'

import { Icon } from '@/components/elements/media/Icon'
import { NAVIGATION_STYLES } from '@/declarations/ui/variants'
import { Link } from '@/i18n/routing'
import { NamingService } from '@/services/NamingService'
import type { Styleable } from '@/types/common'
import type { NavigationEntry } from '@/types/navigation'
import { cn } from '@/utils/classnames'

export interface NavigationMenuProps extends Styleable {
  entry: NavigationEntry
  onNavigate?: () => void
}

/**
 * Grouped navigation slot, opening on hover and on focus
 * @param {NavigationMenuProps} props - Menu props
 * @return {JSX.Element} - Rendered menu
 */

export const NavigationMenu = ({ entry, onNavigate, className }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = NamingService.toDomId('navigation', entry.id, 'panel')
  const children = entry.children ?? []

  return (
    <div
      className={cn(NAVIGATION_STYLES.menu, className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      // Tabbing through the panel keeps it open, leaving it closes it again
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setIsOpen(false)
      }}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={cn(
          NAVIGATION_STYLES.menuTrigger,
          entry.isActive && NAVIGATION_STYLES.linkActive
        )}
        onClick={() => setIsOpen((open) => !open)}>
        {entry.label}
        <Icon
          name="chevronDown"
          size="xs"
          className={cn(
            NAVIGATION_STYLES.menuIndicator,
            isOpen && NAVIGATION_STYLES.menuIndicatorOpen
          )}
        />
      </button>

      <div
        id={panelId}
        inert={!isOpen}
        className={cn(
          NAVIGATION_STYLES.panel,
          isOpen ? NAVIGATION_STYLES.panelOpen : NAVIGATION_STYLES.panelClosed
        )}>
        <div className={NAVIGATION_STYLES.panelBody}>
          {children.map((child) => (
            <Link
              key={child.id}
              href={child.href ?? '/'}
              aria-current={child.isActive ? 'page' : undefined}
              className={cn(
                NAVIGATION_STYLES.panelLink,
                child.isActive && NAVIGATION_STYLES.linkActive
              )}
              onClick={() => {
                setIsOpen(false)
                onNavigate?.()
              }}>
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
