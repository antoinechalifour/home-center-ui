import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'ui/Loader'
import Title from 'ui/WidgetTitle'
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
    <div>
      <Title>My lights</Title>
      <List>
        {data.lights &&
          data.lights.map(x => {
            const renderLight = renderers[x.type]
            return (
              <Li key={x.id}>
                {renderLight(x)}
              </Li>
            )
          })}
      </List>
    </div>
  )
}

Lights.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    lights: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status: PropTypes.string,
        bri: PropTypes.number
      })
    )
  }).isRequired
}

const List = styled.ul`
  padding: 12px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .13);
  background: #fff;

  @media (min-width: 800px) {
    display: flex;
    overflow-x: auto;
  }
`

const Li = styled.li`
  padding: 12px;
  
  + li {
    border-top: 1px solid rgba(0, 0, 0, .15);
  }

  @media (min-width: 800px) {
    padding: 0;
    flex: 0 0 33%;

    +li {
      border-top: none;
      border-left: 1px solid rgba(0, 0, 0, .15);
    }
  }
`
