import styled from "styled-components"
import { rgba } from "polished"

import tools from "../../assets/styles/tools"

import Icon from "../Icon"

const Button = styled.button`
  color: ${(props) => rgba(props.theme.settings.colors.palette.primary, 0.6)};
  background-color: ${(props) => rgba(props.theme.settings.colors.dark, 0.04)};
  transition: background-color 300ms, color 300ms;
  text-align: left;
  display: flex;
  align-items: center;
  height: 6rem;
  position: relative;
  width: 100%;
  height: 6rem;
  font-size: 2.4rem;
  padding: 0 5rem 0 3rem;

  &:hover {
    color: ${(props) => rgba(props.theme.settings.colors.palette.primary, 0.8)};
  }

  ${Icon} {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    transition: transform 300ms;

    @media ${tools.devices.md} {
      right: 2rem;
    }
  }
`

export default { Button }
