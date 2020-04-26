import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Sources from "../Sources"
import DropdownButton from "../DropdownButton"
import DropdownError from "../DropdownError"

import useFetchSources from "../../hooks/fetch-sources"

const SourcesDropdown = ({ sourcesSearchParam }) => {
  const { sources, errorsFetchSources } = useFetchSources()
  const [selectedSources, setSelectedSources] = useState([])
  const [dropdownPrompt, setDropdownPrompt] = useState("all medium selected")

  useEffect(() => {
    const message =
      selectedSources.length === sources.length
        ? "all sources selected"
        : selectedSources.length > 0
        ? `${selectedSources.length} sources selected`
        : "No sources selected"
    setDropdownPrompt(message)
  }, [selectedSources, sources])

  useEffect(() => {
    setSelectedSources(sourcesSearchParam)
  }, [sourcesSearchParam])

  const handleSourceInputChange = (e) => {
    if (e.target.checked) {
      setSelectedSources([...selectedSources, e.target.value])
    } else {
      setSelectedSources(
        selectedSources.filter((source) => source !== e.target.value)
      )
    }
  }

  return (
    <div className="dropdown dropdown--sources dropdown--collapsed">
      <DropdownButton>{dropdownPrompt}</DropdownButton>

      <div className="dropdown__menu">
        <DropdownError visible={!selectedSources.length}>
          You have to select at least one medium to search
        </DropdownError>

        <Sources
          sources={sources}
          selectedSources={selectedSources}
          handleSourceInputChange={handleSourceInputChange}
          errors={errorsFetchSources}
        />
      </div>
    </div>
  )
}

export default SourcesDropdown

SourcesDropdown.defaultProps = {
  sourcesSearchParam: [],
}

SourcesDropdown.propTypes = {
  sourcesSearchParam: PropTypes.array,
}
