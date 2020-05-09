import React from "react"
import PropTypes from "prop-types"

import Styled from "./styled"

const Sources = ({
  sources,
  selectedSources,
  handleSourceInputChange,
  errors,
}) => {
  if (errors) {
    return (
      <div className="sources">
        <div className="sources__errors">{errors}</div>
      </div>
    )
  }

  return (
    <Styled.Sources>
      {sources.map((source, index) => {
        return (
          <li className="sources__item" key={index}>
            <label>
              <Styled.Checkmark
                checked={selectedSources.includes(source.attributes.label)}
              />

              <input
                type="checkbox"
                name="sources"
                value={source.attributes.label}
                onChange={handleSourceInputChange}
                defaultChecked={selectedSources.includes(
                  source.attributes.label
                )}
              />
              <span>{source.attributes.name}</span>
            </label>
          </li>
        )
      })}
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
