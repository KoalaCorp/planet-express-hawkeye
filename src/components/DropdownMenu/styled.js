import styled from "styled-components"

const DropdownMenu = styled.div`
  background: ${(props) =>
    props.theme.settings.colors.components.dropdown.menu.bg};
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
`

export default { DropdownMenu }
