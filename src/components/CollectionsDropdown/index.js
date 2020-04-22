import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Collections from "../Collections"
import DropdownButton from "../DropdownButton"
import DropdownError from "../DropdownError"

import useFetchCollections from "../../hooks/fetch-collections"

const CollectionsDropdown = ({ collectionsSearchParam }) => {
  const { collections, errorsFetchCollections } = useFetchCollections()
  const [selectedCollections, setSelectedCollections] = useState([])
  const [dropdownPrompt, setDropdownPrompt] = useState("all medium selected")

  useEffect(() => {
    const message =
      selectedCollections.length === collections.length
        ? "all medium selected"
        : selectedCollections.length > 0
        ? `${selectedCollections.length} medium selected`
        : "No medium selected"
    setDropdownPrompt(message)
  }, [selectedCollections, collections])

  useEffect(() => {
    setSelectedCollections(collectionsSearchParam)
  }, [collectionsSearchParam])

  const handleCollectionInputChange = (e) => {
    if (e.target.checked) {
      setSelectedCollections([...selectedCollections, e.target.value])
    } else {
      setSelectedCollections(
        selectedCollections.filter(
          (collection) => collection !== e.target.value
        )
      )
    }
  }

  return (
    <div className="collectionsDropdown dropdown__menu--hidden">
      <DropdownButton>{dropdownPrompt}</DropdownButton>

      <div className="dropdown__menu">
        <DropdownError visible={!selectedCollections.length}>
          You have to select at least one medium to search
        </DropdownError>

        <Collections
          collections={collections}
          selectedCollections={selectedCollections}
          handleCollectionInputChange={handleCollectionInputChange}
          errors={errorsFetchCollections}
        />
      </div>
    </div>
  )
}

export default CollectionsDropdown

CollectionsDropdown.defaultProps = {
  collectionsSearchParam: [],
}

CollectionsDropdown.propTypes = {
  collectionsSearchParam: PropTypes.array,
}
