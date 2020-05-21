import React from "react"
import PropTypes from "prop-types"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Styled from "./styled"

const DefaultLayout = (props) => {
  return (
    <Styled.Layout {...props}>
      <Styled.Container>
        <Header hiddenHeader={props.hiddenHeader} />
        <main>{props.children}</main>
      </Styled.Container>
      <Footer hiddenFooter={props.hiddenFooter} />
    </Styled.Layout>
  )
}

export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hiddenHeader: PropTypes.bool,
  hiddenFooter: PropTypes.bool,
}
