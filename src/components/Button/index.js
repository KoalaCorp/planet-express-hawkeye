import styled, { css } from "styled-components"
import { rgba } from "polished"

const Button = styled.button`
  background-color: ${(props) =>
    rgba(props.theme.settings.colors.palette.secondary, 0.9)};
  transition: background-color 600ms, box-shadow 300ms;
  color: ${(props) => props.theme.settings.colors.light};

  &:hover {
    background-color: ${(props) =>
      props.theme.settings.colors.palette.secondary};
    box-shadow: 0 0.1rem 0.6rem rgba(0 0 0 / 25%);
  }

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `}
`

export default Button
