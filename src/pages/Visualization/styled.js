import styled from "styled-components"
// import { rgba } from "polished"

import tools from "../../assets/styles/tools"

import LayoutDefault from "../../layouts/Default"
import Graphic from "../../components/Graphic"
import InputSearch from "../../components/InputSearch"
import StyledSearchForm from "../../components/SearchForm/styled"
import StyledDropdownMenu from "../../components/DropdownMenu/styled"
import Toolbar from "../../components/Toolbar"

const Layout = styled(LayoutDefault)`
  main {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  ${Graphic} {
    flex: 1;
  }

  ${Toolbar} {
    background-color: ${(props) =>
      props.theme.settings.colors.palette.tertiary};
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: fixed;
    top: calc(100vh - 6rem);
    transition: top 300ms cubic-bezier(0.65, 0.05, 0.36, 1);

    @media ${tools.devices.md} {
      position: relative;
      transition: none;
      top: auto;
    }

    &.toolbar--newsEllapsed {
      top: 0;

      @media ${tools.devices.md} {
        transform: none;
      }

      .toolbar__news {
        @media ${tools.devices.md} {
          top: 0;
          margin-top: 0;
        }
      }
    }
  }

  ${InputSearch} {
    width: 100%;
  }

  ${StyledSearchForm.SearchForm} {
    display: flex;
    flex-wrap: wrap;
    order: 1;
    flex: 0 0 100%;

    @media ${tools.devices.md} {
      flex-wrap: nowrap;
      z-index: 1;
    }

    @media ${tools.devices.xxl} {
      flex: 1;
      order: 0;
      margin-right: 50rem;
    }
  }

  ${StyledSearchForm.SearchFormGroup} {
    flex: 0 0 100%;

    @media ${tools.devices.md} {
      flex: 1;
    }

    &.searchFormGroup--button {
      button {
        width: 100%;
      }

      @media ${tools.devices.md} {
        flex: 0 0 20rem;
      }
    }

    &.searchFormGroup--dropdown {
      @media ${tools.devices.md} {
        flex: 0 0 30rem;
      }
    }
  }

  ${StyledDropdownMenu.DropdownMenu} {
    bottom: 6rem;
    right: 0;
    position: fixed;
    width: 50rem;
    left: auto;

    @media ${tools.devices.xxl} {
      width: 100rem;
    }
  }

  .toolbar__news {
    width: 100%;
    display: grid;
    grid-template-rows: 6rem auto 6rem;
    height: calc(100vh - 18rem);

    @media ${tools.devices.md} {
      max-width: 50rem;
      position: fixed;
      top: 0;
      height: calc(100vh - 6rem);
      top: calc(100vh - 6rem);
      margin-top: -6rem;
      transition: top 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
    }

    @media ${tools.devices.xxl} {
      right: 0;
      height: 100vh;
      top: calc(100vh - 6rem);
      margin-top: 0;
    }
  }

  .toolbar__toggler {
    color: #fff;
    background-color: ${(props) => props.theme.settings.colors.palette.primary};
    height: 6rem;
    width: 100%;
    font-size: 1.8rem;
    text-align: left;
    padding: 0 2rem;
  }

  .toolbar__news__filters {
    background: #fe8d5e;
    color: #fff;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }

  .toolbar__topics {
    background: #fff;
    overflow-y: auto;
    position: relative;
  }
`

export default { Layout }
