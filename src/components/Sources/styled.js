import styled from "styled-components"

import tools from "../../assets/styles/tools"

const Sources = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding: 2rem;
  flex: 0 0 100%;

  input[type="checkbox"] {
    ${tools.mixins.srOnly};
  }
`

export default { Sources }
