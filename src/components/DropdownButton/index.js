import React from "react"
import PropTypes from "prop-types"

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
    <button className="dropdown__button" onClick={handleOnClick}>
      {props.children}
    </button>
  )
}

export default DropdownButton

DropdownButton.propTypes = {
  children: PropTypes.string,
  handleOnClick: PropTypes.func,
}
