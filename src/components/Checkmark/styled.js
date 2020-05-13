import styled from "styled-components"

import Icon from "../Icon"

export default {
  Checkmark: styled.span`
    margin-right: 1rem;
    position: relative;
    height: 2rem;
  `,

  Square: styled(Icon)`
    color: ${(props) => props.theme.settings.colors.mid};
    background-color: ${(props) => props.theme.settings.colors.light};
    font-size: 2rem;
  `,

  Check: styled(Icon)`
    color: ${(props) => props.theme.settings.colors.valid};
    font-size: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
}
