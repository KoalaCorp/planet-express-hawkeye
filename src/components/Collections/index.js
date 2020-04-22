import React from "react"
import PropTypes from "prop-types"

const Collections = ({
  collections,
  selectedCollections,
  handleCollectionInputChange,
  errors,
}) => {
  if (errors) {
    return (
      <div className="collections">
        <div className="colletions__errors">{errors}</div>
      </div>
    )
  }

  return (
    <div className="collections">
      <ul className="collections__list">
        {collections.map((collection, index) => {
          return (
            <li className="collections__list__item" key={index}>
              <label>
                <input
                  type="checkbox"
                  name="collections"
                  value={collection}
                  onChange={handleCollectionInputChange}
                  defaultChecked={selectedCollections.includes(collection)}
                />
                <span>{collection}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Collections

Collections.defaultProps = {
  collections: [],
  selectedCollections: [],
  handleCollectionInputChange: function () {},
}

Collections.propTypes = {
  collections: PropTypes.array.isRequired,
  selectedCollections: PropTypes.array.isRequired,
  handleCollectionInputChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
}
