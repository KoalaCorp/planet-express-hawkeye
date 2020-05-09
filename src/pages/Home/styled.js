import styled from "styled-components"

import InputSearch from "../../components/InputSearch"
import Button from "../../components/Button"
import SearchForm from "../../components/SearchForm"

export default {
  SearchForm: styled(SearchForm)`
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;

    .dropdown {
      margin-bottom: 7rem;
    }

    ${InputSearch} {
      width: 100%;
      margin-bottom: 4rem;
    }

    ${Button} {
      max-width: 20rem;
      margin: 0 auto;
      display: block;
    }
  `,
}
