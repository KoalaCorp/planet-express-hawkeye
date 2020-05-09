import styled from "styled-components"
import { rgba } from "polished"

import Icon from "../Icon"

export default {
  Button: styled.button`
    color: ${(props) => rgba(props.theme.settings.colors.palette.primary, 0.6)};
    background: ${(props) => rgba(props.theme.settings.colors.dark, 0.04)};
    text-align: left;
    padding: 0 5rem 0 3rem;
    display: flex;
    align-items: center;
    height: 6rem;
    position: relative;
    font-size: 2.4rem;
    width: 100%;

    &:hover {
      color: ${(props) =>
        rgba(props.theme.settings.colors.palette.primary, 0.8)};
    }

    ${Icon} {
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.8rem;
      transition: transform 300ms;
    }
  `,
}
