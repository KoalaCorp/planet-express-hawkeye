import styled from "styled-components"

import Button from "../Button"
import InputSearch from "../InputSearch"

const SearchForm = styled.form`
  ${InputSearch} {
    height: 6rem;
    font-size: 2.4rem;
    padding: 0 3rem;
  }

  ${Button} {
    font-weight: 700;
    height: 6rem;
    font-size: 2.4rem;
    width: 20rem;
  }
`

const SearchFormGroup = styled.div``

export default { SearchForm, SearchFormGroup }
