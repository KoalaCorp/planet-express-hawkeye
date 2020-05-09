import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Styled from "./styled"
import SourcesDropdown from "../SourcesDropdown"

const SearchForm = (props) => {
  const { topicSearchParam, sourcesSearchParam, ...otherProps } = props

  const [query, setQuery] = useState(topicSearchParam)

  useEffect(() => {
    setQuery(topicSearchParam)
  }, [topicSearchParam])

  const handleInputSearchChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Styled.Form action="/visualization" {...otherProps}>
      <Styled.InputSearch
        name="topic"
        required
        value={query}
        placeholder="Introduce a topic to search"
        onChange={handleInputSearchChange}
      />

      <SourcesDropdown sourcesSearchParam={sourcesSearchParam} />

      <Styled.Button type="submit" title="Visualize">
        Visualize
      </Styled.Button>
    </Styled.Form>
  )
}

export default SearchForm

SearchForm.propTypes = {
  topicSearchParam: PropTypes.string,
  sourcesSearchParam: PropTypes.array,
}
