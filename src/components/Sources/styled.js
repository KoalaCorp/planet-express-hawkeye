import styled from "styled-components"

import Checkmark from "../Checkmark"
import tools from "../../assets/styles/tools"

export default {
  Sources: styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding: 2rem;

    input[type="checkbox"] {
      ${tools.mixins.srOnly};
    }
  `,

  Checkmark: styled(Checkmark)`
    margin-right: 1rem;
  `,
}
