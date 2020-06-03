import React from "react"
import PropTypes from "prop-types"

import SourcesDropdown from "../SourcesDropdown"
import Button from "../Button"
import InputSearch from "../InputSearch"

import Styled from "./styled"

const SearchForm = (props) => {
  const { topic, sources, ...others } = props
  const formRef = React.createRef()

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      formRef.current.submit()
    }
  }

  return (
    <Styled.SearchForm action="/visualization" ref={formRef} {...others}>
      <Styled.SearchFormGroup>
        <InputSearch
          name="topic"
          required
          defaultValue={topic}
          placeholder="Introduce a topic to search"
          onKeyDown={handleInput}
        />
      </Styled.SearchFormGroup>

      <Styled.SearchFormGroup className="searchFormGroup--dropdown">
        <SourcesDropdown initiallySelectedSources={sources} />
      </Styled.SearchFormGroup>

      <Styled.SearchFormGroup className="searchFormGroup--button">
        <Button type="submit" title="Visualize">
          Visualize
        </Button>
      </Styled.SearchFormGroup>
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
