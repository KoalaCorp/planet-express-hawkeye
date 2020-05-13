import styled from "styled-components"

export default {
  Menu: styled.div`
    background: ${(props) =>
      props.theme.settings.colors.components.dropdown.menu.bg};
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
  `,
}
