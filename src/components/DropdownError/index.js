import React from "react"
import PropTypes from "prop-types"

import Icon from "../Icon"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

import Styled from "./styled"

const DropdownError = (props) => {
  if (!props.visible) {
    return null
  }

  return (
    <Styled.DropdownError
      className={
        props.visible
          ? "dropdown__error dropdown__error--visible"
          : "dropdown__error"
      }
    >
      <Icon icon={faExclamationTriangle} />
      {props.children}
    </Styled.DropdownError>
  )
}

export default DropdownError

DropdownError.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.string,
}
