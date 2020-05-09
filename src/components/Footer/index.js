import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import tools from "../../assets/styles/tools"

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  text-align: center;

  @media ${tools.devices.lg} {
    text-align: left;
    display: flex;
  }
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

const Footer = () => {
  return (
    <StyledFooter>
      <Navigation>
        <li>
          <Link to="/about">about the project</Link>
        </li>
        <li>
          <Link to="/team">about the team</Link>
        </li>
      </Navigation>

      <License>
        this project is under a{" "}
        <a
          href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          title="GNU General Public License v3.0"
          rel="license external noopener noreferrer"
        >
          GNU General Public License v3.0
        </a>{" "}
        license
      </License>
    </StyledFooter>
  )
}

export default Footer
