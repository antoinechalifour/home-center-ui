import React from 'react'
import PropTypes from 'prop-types'
import ToggleSwitch from 'ui/ToggleSwitch'

export default function Switch ({ isOn, onClick }) {
  return <ToggleSwitch value={isOn} onChange={onClick} />
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
