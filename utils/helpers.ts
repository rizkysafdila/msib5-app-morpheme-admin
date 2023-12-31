import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const $breakpoints = useBreakpoints(breakpointsTailwind)
export const isMobile = $breakpoints.smaller('sm') // only smaller than lg

export function toCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export function toPercentage(value: number) {
  return `${(value * 100).toFixed(2)}%`
}

export function toCapitalize(value: string) {
  return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())
}
