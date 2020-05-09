/**
 * BASE
 * Unclassed HTML elements
 * H1-H6, basic links, lists, etc
 * Last layer we see type selectors
 */

import { createGlobalStyle } from "styled-components"
import { rgba } from "polished"

const BaseStyles = createGlobalStyle`
  ul {
    padding: 0;
    margin: 0;
  }

  input[type="checkbox"] {
    &:not(:disabled) {
      cursor: pointer;
    }
  }

  a {
    font-weight: 700;
    color: ${(props) =>
      rgba(props.theme.settings.colors.palette.secondary, 0.8)};

    &:hover {
      color: ${(props) => props.theme.settings.colors.palette.secondary};
    }
  }

  button {
    border: 0;
    outline: 0;
    padding: 0;
    
    &:not(:disabled) {
      cursor: pointer;
    }
  }

  label:not(:disabled) {
    cursor: pointer;
  }
`

export default BaseStyles
