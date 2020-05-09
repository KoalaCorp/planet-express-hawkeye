import styled from "styled-components"
import { rgba } from "polished"

export default {
  Header: styled.header`
    padding-top: 6rem;
  `,

  Title: styled.h1`
    text-align: center;
    font-size: 4.8rem;
    font-weight: 700;
    margin: 0 0 2.8rem 0;
  `,

  Subtitle: styled.h2`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${(props) => rgba(props.theme.settings.colors.palette.primary, 0.8)};
    max-width: 40rem;
    margin: 0 auto 7rem auto;
  `,
}
