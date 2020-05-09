import React from "react"
import PropTypes from "prop-types"

export function FontAwesomeIcon(props) {
  return <i icon={props.icon} />
}

FontAwesomeIcon.propTypes = {
  icon: PropTypes.object,
}
