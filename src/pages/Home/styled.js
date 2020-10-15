import styled from "styled-components"

import tools from "../../assets/styles/tools"

import LayoutDefault from "../../layouts/Default"
import StyledLayout from "../../layouts/styled"
import StyledSourcesDropdown from "../../components/SourcesDropdown/styled"
import InputSearch from "../../components/InputSearch"
import Button from "../../components/Button"
import StyledSearchForm from "../../components/SearchForm/styled"

const Layout = styled(LayoutDefault)`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  ${StyledLayout.Container} {
    padding: 0 2rem;
  }

  ${StyledSearchForm.SearchForm} {
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;

    ${StyledSourcesDropdown.SourcesDropdown} {
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
  }
`

export default { Layout }
