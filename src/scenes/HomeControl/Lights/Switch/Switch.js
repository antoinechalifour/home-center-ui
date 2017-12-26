import React from 'react'
import PropTypes from 'prop-types'
import Row from 'ui/Row'
import StatusIcon from '../StatusIcon'

export default function Switch ({ id, name, status, mutate }) {
  const isOn = status === 'on'
  const variables = {
    lightId: id,
    isOn: !isOn
  }

  return (
    <Row align='center'>
      <StatusIcon isOn={isOn} onClick={() => mutate({ variables })} />
      <div flex>{name}</div>
    </Row>
  )
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired
}
