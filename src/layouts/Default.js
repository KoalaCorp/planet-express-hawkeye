import React from "react"
import PropTypes from "prop-types"

import Styled from "./styled"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DefaultLayout = (props) => {
  return (
    <Styled.Page {...props}>
      <Styled.Container>
        <Header hiddenHeader={props.hiddenHeader} />
        <main>{props.children}</main>
      </Styled.Container>
      <Footer hiddenFooter={props.hiddenFooter} />
    </Styled.Page>
  )
}

export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.element,
  hiddenHeader: PropTypes.bool,
  hiddenFooter: PropTypes.bool,
}
