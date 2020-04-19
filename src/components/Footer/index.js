import React from "react"

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__navigation">
        <li>
          <Link to="/about">about the project</Link>
        </li>
        <li>
          <Link to="/team">about the team</Link>
        </li>
      </ul>

      <div className="footer__license">
        this project is under a{" "}
        <a
          href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          title="GNU General Public License v3.0"
          rel="license external noopener noreferrer"
        >
          GNU General Public License v3.0
        </a>{" "}
        license
      </div>
    </footer>
  )
}

export default Footer
