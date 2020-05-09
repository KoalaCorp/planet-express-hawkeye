import React from "react"
import PropTypes from "prop-types"

import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import Styled from "./styled"

const Checkmark = (props) => {
  return (
    <span className="fa-layers fa-fw">
      <Styled.Square icon={faSquare} />
      {props.checked && <Styled.Check icon={faCheck} />}
    </span>
  )
}

export default Checkmark

Checkmark.propTypes = {
  checked: PropTypes.bool,
}
