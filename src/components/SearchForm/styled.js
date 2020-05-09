import styled from "styled-components"

import Button from "../Button"
import InputSearch from "../InputSearch"

export default {
  Form: styled.form``,

  InputSearch: styled(InputSearch)`
    height: 6rem;
    font-size: 2.4rem;
    padding: 0 3rem;
  `,

  Button: styled(Button)`
    height: 6rem;
    width: 20rem;
    font-size: 2.4rem;
    font-weight: 700;
  `,
}
