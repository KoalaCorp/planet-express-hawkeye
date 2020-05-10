import React from "react"
import { Link } from "react-router-dom"

import Styled from "./styled"

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Navigation>
        <li>
          <Link to="/about">about the project</Link>
        </li>
        <li>
          <Link to="/team">about the team</Link>
        </li>
      </Styled.Navigation>

      <Styled.License>
        this project is under a{" "}
        <a
          href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          title="GNU General Public License v3.0"
          rel="license external noopener noreferrer"
        >
          GNU General Public License v3.0
        </a>{" "}
        license
      </Styled.License>
    </Styled.Footer>
  )
}

export default Footer
