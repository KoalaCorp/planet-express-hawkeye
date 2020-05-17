import React from "react"
import PropTypes from "prop-types"

import Styled from "./styled"
import Icon from "../Icon"

import { faCaretUp } from "@fortawesome/free-solid-svg-icons"

const DropdownButton = (props) => {
  return (
    <Styled.Button className="dropdown__button" {...props}>
      {props.children}
      <Icon icon={faCaretUp} />
    </Styled.Button>
  )
}

export default DropdownButton

DropdownButton.propTypes = {
  children: PropTypes.string,
}
