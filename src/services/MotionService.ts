import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  COUNT_EFFECT,
  CURTAIN_EFFECT,
  ENTER_EFFECTS,
  ENTER_TRIGGER,
  FLOAT_EFFECT,
  INTRO_EFFECT,
  MOTION_ALLOWED_QUERY,
  MOTION_ARMED_CLASS,
  MOTION_ATTRIBUTE,
  MOTION_FORMAT_ATTRIBUTE,
  MOTION_NAMES,
  MOTION_READY_CLASS,
  MOTION_VALUE_ATTRIBUTE,
  PARALLAX_EFFECT,
  TRACE_EFFECT,
} from '@/declarations/ui/motion'
import type { EnterEffect, MotionName } from '@/declarations/ui/motion'
import { FormatService } from '@/services/FormatService'
import { Service } from '@/structures/Service'

// Every animated node opts in through the attribute
const SELECTOR = `[${MOTION_ATTRIBUTE}]`

// Counters roll up to a whole number
const COUNT_FRACTION_DIGITS = 0

let isRegistered = false

class MotionServiceClass extends Service {
  /**
   * Wire every declared effect under a root
   * @param {HTMLElement | null} root - Scanned subtree
   * @return {() => void} - Teardown
   */

  mount = (root: HTMLElement | null): (() => void) => {
    if (!root) return () => undefined

    return this.guard(
      'mount',
      () => undefined,
      () => {
        // ScrollTrigger touches the document, register it on first client mount
        if (!isRegistered) {
          gsap.registerPlugin(ScrollTrigger)
          isRegistered = true
        }

        const media = gsap.matchMedia()

        // Everything below is skipped outright when motion is not wanted
        media.add(MOTION_ALLOWED_QUERY, () => {
          const context = gsap.context(() => {
            root.querySelectorAll<HTMLElement>(SELECTOR).forEach((element) => {
              this.applyTo(element)
            })
          }, root)

          // Every effect now holds its own state inline, the CSS pre-hide can go
          document.documentElement.classList.add(MOTION_ARMED_CLASS)

          // Positions are stale after a client navigation, and a trigger that
          // never fires leaves its block held at the pre-hidden opacity
          ScrollTrigger.refresh()

          return () => context.revert()
        })

        return () => media.revert()
      }
    )
  }

  /**
   * Uncover a freshly rendered page, left to right
   * @param {HTMLElement | null} element - Page region
   * @return {void}
   */

  introduce = (element: HTMLElement | null): void => {
    if (!element) return

    this.guard('introduce', undefined, () => {
      if (!window.matchMedia(MOTION_ALLOWED_QUERY).matches) return

      gsap.fromTo(element, INTRO_EFFECT.from, {
        ...INTRO_EFFECT.to,
        duration: INTRO_EFFECT.durationSeconds,
        ease: INTRO_EFFECT.ease,
        clearProps: INTRO_EFFECT.clearProperties,
      })
    })
  }

  /**
   * Route one node to its effect
   * @param {HTMLElement} element - Animated node
   * @return {void}
   */

  private applyTo(element: HTMLElement): void {
    const name = element.getAttribute(MOTION_ATTRIBUTE) as MotionName | null
    if (!name) return

    if (name === MOTION_NAMES.count) return this.playCount(element)
    if (name === MOTION_NAMES.float) return this.playFloat(element)
    if (name === MOTION_NAMES.parallax) return this.playParallax(element)
    if (name === MOTION_NAMES.trace) return this.playTrace(element)

    if (name === MOTION_NAMES.curtainMedia) return this.playCurtain(element, CURTAIN_EFFECT.media)
    if (name === MOTION_NAMES.curtainOverlay)
      return this.playCurtain(element, CURTAIN_EFFECT.overlay)
    if (name === MOTION_NAMES.curtainFrame) return this.playCurtain(element, CURTAIN_EFFECT.frame)

    this.playEnter(element, name as EnterEffect)
  }

  /**
   * Travel a block, or its children, into place
   * @param {HTMLElement} element - Animated node
   * @param {EnterEffect} name - Declared effect
   * @return {void}
   */

  private playEnter(element: HTMLElement, name: EnterEffect): void {
    const effect = ENTER_EFFECTS[name]
    if (!effect) return this.logger.warn('playEnter', { name })

    const targets = effect.childrenOnly ? Array.from(element.children) : element

    gsap.fromTo(targets, effect.from, {
      ...effect.to,
      duration: effect.durationSeconds,
      ease: effect.ease,
      stagger: effect.staggerSeconds,
      scrollTrigger: { trigger: element, start: ENTER_TRIGGER, once: true },
    })
  }

  /**
   * Roll a readout up to its declared value
   * @param {HTMLElement} element - Counter node
   * @return {void}
   */

  private playCount(element: HTMLElement): void {
    const target = Number(element.getAttribute(MOTION_VALUE_ATTRIBUTE))
    if (Number.isNaN(target)) return this.logger.warn('playCount', { target })

    const format = FormatService.for(document.documentElement.lang)
    const shape = element.getAttribute(MOTION_FORMAT_ATTRIBUTE)
    const counter = { value: 0 }

    // Percentages and amounts must roll up in their own notation
    const write = (value: number): string => {
      if (shape === 'percent') return format.percent(value)
      if (shape === 'currency') return format.currency(value)

      return format.number(value, COUNT_FRACTION_DIGITS)
    }

    gsap.to(counter, {
      value: target,
      duration: COUNT_EFFECT.durationSeconds,
      ease: COUNT_EFFECT.ease,
      scrollTrigger: { trigger: element, start: ENTER_TRIGGER, once: true },
      onUpdate: () => {
        element.textContent = write(counter.value)
      },
    })
  }

  /**
   * Keep a picture breathing on its own
   * @param {HTMLElement} element - Floating node
   * @return {void}
   */

  private playFloat(element: HTMLElement): void {
    // Neighbours declare a delay so a row never drifts in lockstep
    const declared = Number(element.getAttribute(MOTION_VALUE_ATTRIBUTE))

    gsap.to(element, {
      y: FLOAT_EFFECT.offsetPixels,
      duration: FLOAT_EFFECT.durationSeconds,
      ease: FLOAT_EFFECT.ease,
      delay: Number.isNaN(declared) ? 0 : declared,
      repeat: -1,
      yoyo: true,
    })
  }

  /**
   * Fill a rail as the reader descends past it
   * @param {HTMLElement} element - Rail fill
   * @return {void}
   */

  private playTrace(element: HTMLElement): void {
    // The track behind it spans the whole list, and so decides the range
    const trigger = element.parentElement ?? element

    gsap.fromTo(element, TRACE_EFFECT.from, {
      ...TRACE_EFFECT.to,
      ease: TRACE_EFFECT.ease,
      scrollTrigger: {
        trigger,
        start: TRACE_EFFECT.start,
        end: TRACE_EFFECT.end,
        scrub: TRACE_EFFECT.scrub,
      },
    })
  }

  /**
   * Offset a node against the page scroll
   * @param {HTMLElement} element - Parallax node
   * @return {void}
   */

  private playParallax(element: HTMLElement): void {
    const declared = Number(element.getAttribute(MOTION_VALUE_ATTRIBUTE))
    const travel = Number.isNaN(declared) ? PARALLAX_EFFECT.defaultTravelPixels : declared

    gsap.fromTo(
      element,
      { y: -travel / 2 },
      {
        y: travel / 2,
        ease: PARALLAX_EFFECT.ease,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: PARALLAX_EFFECT.scrub,
        },
      }
    )
  }

  /**
   * Hand the hero over to the page as it scrolls away
   * @param {HTMLElement} element - Layer of the hero
   * @param {gsap.TweenVars} to - Declared end state
   * @return {void}
   */

  private playCurtain(element: HTMLElement, to: gsap.TweenVars): void {
    // The whole section drives the hand-off, not the layer itself
    const trigger = element.closest('section') ?? element

    gsap.to(element, {
      ...to,
      ease: CURTAIN_EFFECT.ease,
      scrollTrigger: {
        trigger,
        start: CURTAIN_EFFECT.start,
        end: CURTAIN_EFFECT.end,
        scrub: CURTAIN_EFFECT.scrub,
      },
    })
  }

  /**
   * Reveal everything rather than leave the page blank
   * @param {string} method - Failing method
   * @param {unknown} error - Caught error
   * @return {void}
   */

  protected override onError(method: string, error: unknown): void {
    super.onError(method, error)
    document.documentElement.classList.remove(MOTION_READY_CLASS)
    document.documentElement.classList.add(MOTION_ARMED_CLASS)
  }
}

// Declarative scroll and enter animations
export const MotionService = new MotionServiceClass('motion')
