import React from "react"
import PropTypes from "prop-types"

import SourcesDropdown from "../SourcesDropdown"
import Button from "../Button"
import InputSearch from "../InputSearch"

import Styled from "./styled"

const SearchForm = (props) => {
  const { topic, sources, ...others } = props

  return (
    <Styled.SearchForm action="/visualization" {...others}>
      <InputSearch
        name="topic"
        required
        defaultValue={topic}
        placeholder="Introduce a topic to search"
      />

      <SourcesDropdown initiallySelectedSources={sources} />

      <Button type="submit" title="Visualize">
        Visualize
      </Button>
    </Styled.SearchForm>
  )
}

export default SearchForm

SearchForm.propTypes = {
  topic: PropTypes.string,
  search: PropTypes.object,
  sources: PropTypes.array,
}

SearchForm.defaultProps = {
  topic: "",
  sources: [],
}
