import React from "react"
import PropTypes from "prop-types"

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
    <div className="sources">
      <ul className="sources__list">
        {sources.map((source, index) => {
          return (
            <li className="sources__list__item" key={index}>
              <label>
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
      </ul>
    </div>
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
