import React from "react"

import Styled from "./styled"

const Header = (props) => {
  return (
    <Styled.Header {...props}>
      <Styled.Title>Planet Express</Styled.Title>
      <Styled.Subtitle>
        The auto relational searcher for political documents in Spain
      </Styled.Subtitle>
    </Styled.Header>
  )
}

export default Header
