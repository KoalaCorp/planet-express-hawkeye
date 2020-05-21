import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Styled from "./styled"

import SourceItem from "../SourceItem"

const Sources = (props) => {
  const {
    sources,
    selectedSources,
    handleSourceInputChange,
    errors,
    ...others
  } = props

  useEffect(() => {
    console.log(selectedSources)
  }, [selectedSources])

  if (errors) {
    return (
      <div className="sources">
        <div className="sources__errors">{errors}</div>
      </div>
    )
  }

  return (
    <Styled.Sources {...others}>
      {sources.map((source, index) => (
        <SourceItem
          key={index}
          label={source.attributes.name}
          value={source.attributes.label}
          selectedSources={selectedSources}
          onChange={handleSourceInputChange}
        />
      ))}
    </Styled.Sources>
  )
}

export default Sources

Sources.defaultProps = {
  sources: [],
  selectedSources: [],
  handleSourceInputChange: function () {},
}

Sources.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["source"]),
      attributes: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string,
      }),
    })
  ),
  selectedSources: PropTypes.array.isRequired,
  handleSourceInputChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
}
