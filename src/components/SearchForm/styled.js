import styled from "styled-components"

import tools from "../../assets/styles/tools"

import Button from "../Button"
import InputSearch from "../InputSearch"

const SearchForm = styled.form`
  ${InputSearch} {
    height: 4rem;
    font-size: 1.8rem;
    padding: 0 1.5rem;

    @media ${tools.devices.md} {
      height: 6rem;
      font-size: 2.4rem;
      padding: 0 3rem;
    }
  }

  ${Button} {
    height: 4rem;
    font-size: 1.8rem;
    width: 15rem;
    font-weight: 700;

    @media ${tools.devices.md} {
      height: 6rem;
      font-size: 2.4rem;
      width: 20rem;
    }
  }
`

export default { SearchForm }
