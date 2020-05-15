import styled from "styled-components"
import { rgba } from "polished"

import Icon from "../Icon"

const DropdownError = styled.div`
  background-color: ${(props) => rgba(props.theme.settings.colors.error, 0.8)};
  color: ${(props) => props.theme.settings.colors.light};
  padding: 1rem 1.8rem;
  font-size: 1.4rem;
  display: flex;
  flex: 0 0 100%;
  order: 1;

  ${Icon} {
    margin-right: 1rem;
    font-weight: 700;
    font-size: 2.3rem;
  }
`

export default { DropdownError }
