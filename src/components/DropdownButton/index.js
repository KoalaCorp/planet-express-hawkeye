import React from "react"
import PropTypes from "prop-types"

const DropdownButton = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault()

    const dropdown = e.target.parentElement

    dropdown.classList.contains("dropdown__menu--hidden")
      ? dropdown.classList.remove("dropdown__menu--hidden")
      : dropdown.classList.add("dropdown__menu--hidden")

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
