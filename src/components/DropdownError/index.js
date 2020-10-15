import React from "react"
import PropTypes from "prop-types"

import Icon from "../Icon"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

import Styled from "./styled"

const DropdownError = (props) => {
  return (
    <Styled.DropdownError {...props}>
      <Icon icon={faExclamationTriangle} />
      {props.children}
    </Styled.DropdownError>
  )
}

export default DropdownError

DropdownError.propTypes = {
  children: PropTypes.string,
}
