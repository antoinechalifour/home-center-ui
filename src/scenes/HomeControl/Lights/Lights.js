import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'ui/Loader'
import Switch from './Switch'
import Dimmer from './Dimmer'

export default function Lights ({ data }) {
  const renderers = {
    switch: props => <Switch {...props} />,
    dimmer: props => <Dimmer {...props} />
  }

  if (data.loading) {
    return <Loader />
  }

  return (
    <List>
      {data.lights &&
        data.lights.map(x => {
          const renderLight = renderers[x.type]
          return <Li key={x.id}>{renderLight(x)}</Li>
        })}
    </List>
  )
}

Lights.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    lights: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
    )
  }).isRequired
}

const List = styled.ul`
  padding: 24px;
`

const Li = styled.li`
  padding: 12px 0;
`
