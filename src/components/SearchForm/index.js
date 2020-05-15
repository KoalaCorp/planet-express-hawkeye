import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import SourcesDropdown from "../SourcesDropdown"
import Button from "../Button"
import InputSearch from "../InputSearch"

import Styled from "./styled"

const SearchForm = (props) => {
  const { topicSearchParam, sourcesSearchParam, ...others } = props

  const [query, setQuery] = useState(topicSearchParam)

  useEffect(() => {
    setQuery(topicSearchParam)
  }, [topicSearchParam])

  const handleInputSearchChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Styled.SearchForm action="/visualization" {...others}>
      <InputSearch
        name="topic"
        required
        value={query}
        placeholder="Introduce a topic to search"
        onChange={handleInputSearchChange}
      />

      <SourcesDropdown sourcesSearchParam={sourcesSearchParam} />

      <Button type="submit" title="Visualize">
        Visualize
      </Button>
    </Styled.SearchForm>
  )
}

export default SearchForm

SearchForm.propTypes = {
  topicSearchParam: PropTypes.string,
  sourcesSearchParam: PropTypes.array,
}
