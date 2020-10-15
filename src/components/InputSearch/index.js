import styled from "styled-components"
import { rgba } from "polished"

const InputSearch = styled.input.attrs(() => ({
  type: "search",
}))`
  border: 0;
  color: ${(props) => props.theme.settings.colors.palette.primary};

  &::placeholder {
    font-style: italic;
    color: ${(props) => rgba(props.theme.settings.colors.palette.primary, 0.4)};
  }
`

export default InputSearch
