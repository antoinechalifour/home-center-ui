import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gqlLoaderHoc from 'components/GqlLoader'
import Title from 'ui/WidgetTitle'
import SwitchableLight from './SwitchableLight'
import DimmableLight from './DimmableLight'

export function Lights ({ data }) {
  const renderers = {
    switch: props => <SwitchableLight {...props} />,
    dimmer: props => <DimmableLight {...props} />
  }

  return (
    <div>
      <Title>My devices</Title>
      <ul>
        {data.lights &&
          data.lights.map(x => {
            const renderLight = renderers[x.type]
            return (
              <Li key={x.id}>
                {renderLight(x)}
              </Li>
            )
          })}
      </ul>
    </div>
  )
}

Lights.propTypes = {
  data: PropTypes.shape({
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

export default gqlLoaderHoc(Lights)

const Li = styled.li`
  padding: 24px 12px;
  
  + li {
    border-top: 1px solid rgba(255, 255, 255, .15);
  }
`
