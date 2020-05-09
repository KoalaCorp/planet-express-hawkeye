import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import theme from "../assets/styles/theme"

import GenericStyles from "../assets/styles/generic"
import BaseStyles from "../assets/styles/base"
import TrumpsStyles from "../assets/styles/trumps"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Page = styled.div`
  margin: 0 2rem;
`

const DefaultLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GenericStyles />
      <BaseStyles />
      <TrumpsStyles />

      <Page>
        <Header hiddenHeader={props.hiddenHeader} />
        <main>{props.children}</main>
        <Footer hiddenFooter={props.hiddenFooter} />
      </Page>
    </ThemeProvider>
  )
}

export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.element,
  hiddenHeader: PropTypes.bool,
  hiddenFooter: PropTypes.bool,
}
