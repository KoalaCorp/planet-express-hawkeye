import React from "react"
import PropTypes from "prop-types"

const DropdownError = (props) => {
  return (
    <div
      className={
        props.visible
          ? "dropdown__error dropdown__error--visible"
          : "dropdown__error"
      }
    >
      {props.children}
    </div>
  )
}

export default DropdownError

DropdownError.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.string,
}
