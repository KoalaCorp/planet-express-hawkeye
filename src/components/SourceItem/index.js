import React from "react"
import PropTypes from "prop-types"

import Checkmark from "../Checkmark"

import Styled from "./styled"

const SourceItem = (props) => {
  return (
    <Styled.SourceItem>
      <Styled.Label>
        <Checkmark checked={props.checked} />

        <input
          type="checkbox"
          name="sources"
          value={props.value}
          onChange={props.onChange}
          defaultChecked={props.checked}
        />
        <span>{props.label}</span>
      </Styled.Label>
    </Styled.SourceItem>
  )
}

export default SourceItem

SourceItem.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
