import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import CollectionsDropdown from "../CollectionsDropdown"

const SearchForm = ({ topicSearchParam, collectionsSearchParam }) => {
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

      <CollectionsDropdown collectionsSearchParam={collectionsSearchParam} />

      <button>Visualize</button>
    </form>
  )
}

export default SearchForm

SearchForm.propTypes = {
  topicSearchParam: PropTypes.string,
  collectionsSearchParam: PropTypes.array,
}
