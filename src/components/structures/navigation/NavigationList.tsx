import { Icon } from '@/components/elements/media/Icon'
import { NavigationMenu } from '@/components/structures/navigation/NavigationMenu'
import { NAVIGATION_STYLES } from '@/declarations/ui/variants'
import { Link } from '@/i18n/routing'
import type { Direction, Styleable } from '@/types/common'
import type { NavigationEntry } from '@/types/navigation'
import { cn } from '@/utils/classnames'

export interface NavigationListProps extends Styleable {
  entries: NavigationEntry[]
  direction?: Direction
  withIcons?: boolean
  onNavigate?: () => void
}

/**
 * Navigation list
 * @param {NavigationListProps} props - Navigation list props
 * @return {JSX.Element} - Rendered list
 */

export const NavigationList = ({
  entries,
  direction = 'horizontal',
  withIcons = false,
  onNavigate,
  className,
}: NavigationListProps) => {
  const isVertical = direction === 'vertical'

  const renderLink = (entry: NavigationEntry) => (
    <Link
      href={entry.href ?? '/'}
      onClick={onNavigate}
      aria-current={entry.isActive ? 'page' : undefined}
      className={cn(
        'flex items-center gap-2',
        isVertical ? NAVIGATION_STYLES.mobileLink : NAVIGATION_STYLES.link,
        entry.isActive && NAVIGATION_STYLES.linkActive
      )}>
      {withIcons && entry.icon && <Icon name={entry.icon} size="sm" />}
      {entry.label}
    </Link>
  )

  return (
    <ul
      className={cn(isVertical ? NAVIGATION_STYLES.mobileList : NAVIGATION_STYLES.list, className)}>
      {entries.map((entry) => {
        // A stacked drawer has room to spell the group out, a bar does not
        if (entry.children && isVertical) {
          return (
            <li key={entry.id}>
              <p className={NAVIGATION_STYLES.groupLabel}>{entry.label}</p>
              <ul className={NAVIGATION_STYLES.groupList}>
                {entry.children.map((child) => (
                  <li key={child.id}>{renderLink(child)}</li>
                ))}
              </ul>
            </li>
          )
        }

        return (
          <li key={entry.id}>
            {entry.children ? (
              <NavigationMenu entry={entry} onNavigate={onNavigate} />
            ) : (
              renderLink(entry)
            )}
          </li>
        )
      })}
    </ul>
  )
}
