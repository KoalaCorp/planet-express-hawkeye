import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import DropdownError from "../DropdownError"
import DropdownMenu from "../DropdownMenu"
import DropdownButton from "../DropdownButton"
import Sources from "../Sources"

import Styled from "./styled"

import useFetchSources from "../../hooks/fetch-sources"

const SourcesDropdown = ({ sourcesSearchParam }) => {
  const { sources, errorsFetchSources } = useFetchSources()
  const [selectedSources, setSelectedSources] = useState([])
  const [collapsed, setCollapsed] = useState(true)
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

  const handleClickButton = (e) => {
    e.preventDefault()
    setCollapsed(!collapsed)
  }

  const hasSelectedSources = () => {
    return selectedSources.length
  }

  return (
    <Styled.SourcesDropdown
      className="dropdown dropdown--sources"
      collapsed={collapsed}
      hasSelectedSources={hasSelectedSources()}
    >
      <DropdownButton onClick={handleClickButton}>
        {dropdownPrompt}
      </DropdownButton>

      <DropdownMenu
        sources={sources}
        selectedSources={selectedSources}
        handleSourceInputChange={handleSourceInputChange}
        errors={errorsFetchSources}
      >
        {!hasSelectedSources() && (
          <DropdownError>
            You have to select at least one medium to search
          </DropdownError>
        )}

        <Sources
          sources={sources}
          selectedSources={selectedSources}
          handleSourceInputChange={handleSourceInputChange}
          errors={errorsFetchSources}
        />
      </DropdownMenu>
    </Styled.SourcesDropdown>
  )
}

export default SourcesDropdown

SourcesDropdown.defaultProps = {
  sourcesSearchParam: [],
}

SourcesDropdown.propTypes = {
  sourcesSearchParam: PropTypes.array,
}
