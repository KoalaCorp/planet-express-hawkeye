/**
 * TRUMPS
 *
 * H1-H6, basic links, lists, etc
 * Last layer we see type selectors
 */

import { createGlobalStyle } from "styled-components"

import tools from "./tools"

const TrumpsStyles = createGlobalStyle`
  .unscrolled {
    overflow: hidden;
  }

  .srOnly {
    ${tools.mixins.srOnly};
  }

  .srOnlyFocusable {
    ${tools.mixins.srOnlyFocusable};
  }

  .skipLink {
    ${tools.mixins.skipLink};
  }
`

export default TrumpsStyles
