import styled from "styled-components"

import tools from "../../assets/styles/tools"

import Layout from "../../layouts/Default"
import StyledSourcesDropdown from "../../components/SourcesDropdown/styled"
import InputSearch from "../../components/InputSearch"
import Button from "../../components/Button"
import SearchForm from "../../components/SearchForm"

export default {
  Layout: styled(Layout)`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  `,

  SearchForm: styled(SearchForm)`
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;

    ${StyledSourcesDropdown.Dropdown} {
      margin-bottom: 5rem;
    }

    ${InputSearch} {
      width: 100%;
      margin-bottom: 2rem;

      @media ${tools.devices.md} {
        margin: 0 0 3rem 0;
      }
    }

    ${Button} {
      max-width: 20rem;
      margin: 0 auto;
      display: block;
    }
  `,
}
