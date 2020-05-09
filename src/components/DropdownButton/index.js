import React from "react"
import PropTypes from "prop-types"

import Styled from "./styled"
import Icon from "../Icon"

import { faCaretUp } from "@fortawesome/free-solid-svg-icons"

const DropdownButton = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault()

    const dropdown = e.target.parentElement

    dropdown.classList.contains("dropdown--collapsed")
      ? dropdown.classList.remove("dropdown--collapsed")
      : dropdown.classList.add("dropdown--collapsed")

    if (props.handleOnClick) {
      props.handleOnClick()
    }
  }

  return (
    <Styled.Button className="dropdown__button" onClick={handleOnClick}>
      {props.children}
      <Icon icon={faCaretUp} />
    </Styled.Button>
  )
}

export default DropdownButton

DropdownButton.propTypes = {
  children: PropTypes.string,
  handleOnClick: PropTypes.func,
}
