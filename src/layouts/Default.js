import React from "react"
import PropTypes from "prop-types"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Styled from "./styled"

const DefaultLayout = (props) => {
  const { hiddenHeader, hiddenFooter, children, ...others } = props

  return (
    <Styled.Layout {...others}>
      <Styled.Container>
        <Header srOnly={hiddenHeader} />
        <main>{children}</main>
      </Styled.Container>
      <Footer srOnly={hiddenFooter} />
    </Styled.Layout>
  )
}

export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hiddenHeader: PropTypes.bool,
  hiddenFooter: PropTypes.bool,
}
