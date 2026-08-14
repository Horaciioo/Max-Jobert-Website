import { ConfigurationService } from '@/services/ConfigurationService'
import { bindWindowEvent, createStore } from '@/services/core/StoreService'
import { Service } from '@/structures/Service'
import { isBrowser } from '@/utils/guards'

export interface ScrollState {
  offset: number
  // Scroll threshold flag
  isScrolled: boolean
  direction: 'up' | 'down'
  // Travelled share of the scrollable length
  progress: number
  // Viewport share of the document length
  visibleRatio: number
}

const { scrollThresholdPx } = ConfigurationService.timings

const initialState: ScrollState = {
  offset: 0,
  isScrolled: false,
  direction: 'up',
  progress: 0,
  visibleRatio: 1,
}

// Scroll lock count
let lockCount = 0

// Length the document can still travel
const scrollableLength = (): number =>
  Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

const store = createStore<ScrollState>(initialState, {
  activate: (setState) => {
    if (!isBrowser()) return () => undefined

    let previous = window.scrollY

    const read = () => {
      const offset = window.scrollY
      const direction = offset > previous ? 'down' : 'up'
      const scrollable = scrollableLength()
      const { scrollHeight } = document.documentElement
      previous = offset

      setState({
        offset,
        isScrolled: offset > scrollThresholdPx,
        direction,
        progress: scrollable > 0 ? offset / scrollable : 0,
        visibleRatio: scrollHeight > 0 ? Math.min(1, window.innerHeight / scrollHeight) : 1,
      })
    }

    // A resize changes the travel just as much as a scroll does
    const releaseScroll = bindWindowEvent('scroll', read)
    const releaseResize = bindWindowEvent('resize', read)

    return () => {
      releaseScroll()
      releaseResize()
    }
  },
})

class ScrollServiceClass extends Service {
  store = store

  /**
   * Follow the scroll position
   * @return {ScrollState} - Offset, threshold flag and direction
   */

  use = (): ScrollState => store.use()

  /**
   * Scroll to top
   * @return {void}
   */

  toTop = (): void => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /**
   * Jump to a share of the travel
   * @param {number} progress - Ratio between zero and one
   * @return {void}
   */

  toProgress = (progress: number): void => {
    if (!isBrowser()) return

    const clamped = Math.min(1, Math.max(0, progress))
    window.scrollTo({ top: clamped * scrollableLength() })
  }

  /**
   * Lock scroll
   * @return {() => void} - Release
   */

  lock = (): (() => void) => {
    if (!isBrowser()) return () => undefined

    lockCount += 1
    document.body.style.overflow = 'hidden'

    return () => {
      lockCount = Math.max(0, lockCount - 1)
      if (lockCount === 0) document.body.style.overflow = ''
    }
  }

  /**
   * Scroll to anchor
   * @param {string} anchor - Anchor ID
   * @return {boolean} - Found
   */

  toAnchor = (anchor: string): boolean => {
    if (!isBrowser()) return false
    const target = document.getElementById(anchor)
    if (!target) return false

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return true
  }
}

// Scroll position
export const ScrollService = new ScrollServiceClass('scroll')
