import { Bebas_Neue, Manrope } from 'next/font/google'

// Running copy
const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Condensed caps, the loud voice of the brand
const display = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

/**
 * Font CSS variables
 * @type {string}
 */

export const FONT_VARIABLES = `${sans.variable} ${display.variable}`
