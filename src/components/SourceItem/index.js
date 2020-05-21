import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Checkmark from "../Checkmark"

import Styled from "./styled"

const SourceItem = (props) => {
  const { label, value, selectedSources, onChange, ...others } = props
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    setChecked(selectedSources.includes(value))
  }, [selectedSources, value])

  return (
    <Styled.SourceItem {...others}>
      <Styled.Label>
        <Checkmark checked={checked} />

        <input
          type="checkbox"
          name="sources"
          value={value}
          onChange={onChange}
          defaultChecked={checked}
        />
        <span>{label}</span>
      </Styled.Label>
    </Styled.SourceItem>
  )
}

export default SourceItem

SourceItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  selectedSources: PropTypes.array,
  onChange: PropTypes.func,
}
