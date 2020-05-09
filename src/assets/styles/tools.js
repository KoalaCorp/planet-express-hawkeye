/**
 * TOOLS
 * Globally-available tools.
 * Public mixins
 * Helper functions
 */

import { css } from "styled-components"

import settings from "./settings"

const devices = {
  xs: `(min-width: ${settings.breakpoints.xs}px)`,
  sm: `(min-width: ${settings.breakpoints.sm}px)`,
  md: `(min-width: ${settings.breakpoints.md}px)`,
  lg: `(min-width: ${settings.breakpoints.lg}px)`,
  xl: `(min-width: ${settings.breakpoints.xl}px)`,
}

const srOnly = css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`

const srOnlyFocusable = css`
  &:not(:focus) {
    ${srOnly};
  }
`

const skipLink = css`
  ${srOnly};
  ${srOnlyFocusable};
`

const tools = {
  devices,
  mixins: {
    srOnly,
    srOnlyFocusable,
    skipLink,
  },
}

export default tools
