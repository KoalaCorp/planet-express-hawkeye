import styled, { css } from "styled-components"
import { rgba } from "polished"

import Icon from "../Icon"
import DropdownMenu from "../DropdownMenu/styled"
import DropdownButton from "../DropdownButton/styled"

const SourcesDropdown = styled.div`
  position: relative;

  ${(props) =>
    props.collapsed &&
    css`
      ${DropdownMenu.DropdownMenu} {
        display: none;
      }

      ${Icon} {
        transform: translateY(-50%) rotate(180deg);
      }
    `}

  ${(props) =>
    !props.hasSelectedSources &&
    !props.loadingSources &&
    css`
      ${DropdownButton.Button} {
        color: ${(props) => props.theme.settings.colors.error};
        background: ${(props) => rgba(props.theme.settings.colors.error, 0.1)};
        box-shadow: inset 0 0 0 0.2rem
          ${(props) => props.theme.settings.colors.error};
      }
    `}
`

export default { SourcesDropdown }
