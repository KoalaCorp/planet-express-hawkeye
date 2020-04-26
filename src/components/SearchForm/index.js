import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import SourcesDropdown from "../SourcesDropdown"

const SearchForm = ({ topicSearchParam, sourcesSearchParam }) => {
  const [query, setQuery] = useState(topicSearchParam)

  useEffect(() => {
    setQuery(topicSearchParam)
  }, [topicSearchParam])

  const handleInputSearchChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <form action="/visualization">
      <input
        type="search"
        name="topic"
        required
        value={query}
        onChange={handleInputSearchChange}
      />

      <SourcesDropdown sourcesSearchParam={sourcesSearchParam} />

      <button>Visualize</button>
    </form>
  )
}

export default SearchForm

SearchForm.propTypes = {
  topicSearchParam: PropTypes.string,
  sourcesSearchParam: PropTypes.array,
}
