import styled from "styled-components"
import { rgba } from "polished"

const Styled = {
  Dropdown: styled.div`
    position: relative;

    &:not(.dropdown--collapsed) {
      .dropdown__button {
        background: ${(props) => rgba(props.theme.settings.colors.dark, 0.1)};
        color: ${(props) =>
          rgba(props.theme.settings.colors.palette.primary, 0.8)};
      }
    }

    &.dropdown--collapsed {
      .dropdown__menu {
        display: none;
      }

      .fa-caret-up {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  `,
}

export default Styled
