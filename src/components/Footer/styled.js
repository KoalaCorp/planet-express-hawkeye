import styled, { css } from "styled-components"

import tools from "../../assets/styles/tools"

const Footer = styled.footer`
  text-align: center;
  background: ${(props) => props.theme.settings.colors.palette.tertiary};
  padding: 2rem;
  min-height: 6rem;

  @media ${tools.devices.lg} {
    text-align: left;
    display: flex;
    align-items: center;
  }

  ${(props) =>
    props.srOnly &&
    css`
      ${tools.mixins.srOnly};
    `}
`

const Navigation = styled.ul`
  list-style: none;

  @media ${tools.devices.lg} {
    flex: 1;
  }

  li {
    display: inline;
    margin-right: 2rem;
  }
`

const License = styled.div`
  margin-top: 2rem;

  @media ${tools.devices.lg} {
    margin-top: 0;
  }
`

export default { Footer, Navigation, License }
