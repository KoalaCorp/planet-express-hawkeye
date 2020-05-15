import styled from "styled-components"
import { rgba } from "polished"

import tools from "../../assets/styles/tools"

const Header = styled.header`
  padding-top: 2rem;

  @media ${tools.devices.lg} {
    padding-top: 3rem;
  }
`

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  margin: 0 0 2.8rem 0;
  font-size: 3.6rem;

  @media ${tools.devices.lg} {
    font-size: 4.8rem;
  }
`

const Subtitle = styled.h2`
  text-align: center;
  font-weight: 400;
  color: ${(props) => rgba(props.theme.settings.colors.palette.primary, 0.8)};
  max-width: 40rem;
  margin: 0 auto 3rem auto;
  font-size: 1.8rem;

  @media ${tools.devices.lg} {
    font-size: 2.4rem;
    margin: 0 auto 5rem auto;
  }
`

export default { Header, Title, Subtitle }
