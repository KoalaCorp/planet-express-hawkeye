/**
 * SETTINGS
 * Globally-available settings
 * Config switches
 * Brand colours
 */

import { rgba } from "polished"

const colors = {
  palette: {
    primary: "#281E1E",
    secondary: "#FF7238",
    tertiary: "#F4F2EE",
  },
  light: "#FFF",
  dark: "#000",
  valid: "#7ED321",
  error: "#FF3838",
}

const settings = {
  breakpoints: {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 840,
    xl: 1024,
    xxl: 1200,
    xxxl: 1440,
  },

  typography: {
    base: "'Clear Sans', Arial, sans-serif",
  },

  colors: {
    ...colors,

    components: {
      dropdown: {
        button: {
          default: {
            bg: rgba(colors.dark, 0.04),
            color: rgba(colors.palette.primary, 0.6),
          },
          hover: {
            bg: rgba(colors.dark, 0.1),
            color: colors.palette.primary,
          },
        },
        menu: {
          bg: "#EFEDE9",
        },
      },
    },
  },
}

export default settings
