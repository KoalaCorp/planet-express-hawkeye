import React from "react"
import PropTypes from "prop-types"

import Styled from "./styled"

const SourceItem = (props) => {
  return (
    <Styled.Source>
      <Styled.Label>
        <Styled.Checkmark checked={props.checked} />

        <input
          type="checkbox"
          name="sources"
          value={props.value}
          onChange={props.onChange}
          defaultChecked={props.checked}
        />
        <span>{props.label}</span>
      </Styled.Label>
    </Styled.Source>
  )
}

export default SourceItem

SourceItem.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
