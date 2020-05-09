import styled from "styled-components"

import Icon from "../Icon"

export default {
  Square: styled(Icon)`
    color: ${(props) => props.theme.settings.colors.mid};
    background-color: ${(props) => props.theme.settings.colors.light};
    font-size: 2rem;
  `,

  Check: styled(Icon)`
    color: ${(props) => props.theme.settings.colors.valid};
  `,
}
