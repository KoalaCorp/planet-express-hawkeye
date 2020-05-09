/**
 * GENERIC
 * Ground zero styles
 * Low-specificity, far-reaching
 * Normalize
 */

import { createGlobalStyle } from "styled-components"
import { rgba } from "polished"
import { normalize } from "styled-normalize"

const GenericStyles = createGlobalStyle`
  ${normalize}

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    font-family: ${(props) => props.theme.settings.typography.base};
    letter-spacing: 0.12rem;
    line-height: 1.5;
    word-spacing: 0.16rem;
    color: ${(props) => props.theme.settings.colors.palette.primary};
    background-color: ${(props) =>
      rgba(props.theme.settings.colors.palette.tertiary, 0.6)};
  }
`

export default GenericStyles
