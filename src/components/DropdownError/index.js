import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rgba } from "polished"

import Icon from "../Icon"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

const StyledDropdownError = styled.div`
  background-color: ${(props) => rgba(props.theme.settings.colors.error, 0.8)};
  color: ${(props) => props.theme.settings.colors.light};
  padding: 1rem 1.8rem;
  font-size: 1.4rem;
  display: flex;
  flex: 0 0 100%;
  order: 1;

  ${Icon} {
    margin-right: 1rem;
    font-weight: 700;
    font-size: 2.3rem;
  }
`

const DropdownError = (props) => {
  if (!props.visible) {
    return null
  }

  return (
    <StyledDropdownError
      className={
        props.visible
          ? "dropdown__error dropdown__error--visible"
          : "dropdown__error"
      }
    >
      <Icon icon={faExclamationTriangle} />
      {props.children}
    </StyledDropdownError>
  )
}

export default DropdownError

DropdownError.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.string,
}
