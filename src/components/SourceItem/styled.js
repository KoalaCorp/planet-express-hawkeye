import styled from "styled-components"

import Checkmark from "../Checkmark"

export default {
  Source: styled.li`
    margin-bottom: 1rem;
  `,

  Label: styled.label`
    display: flex;

    .fa-layers {
      margin-top: 0.35rem;
    }
  `,

  Checkmark: styled(Checkmark)``,
}
