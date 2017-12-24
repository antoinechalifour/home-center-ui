import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import LightSwitch from './LightSwitch'
import Loader from 'ui/Loader'

const List = styled.ul`
  padding: 24px;
`

const Lights = ({ data }) => {
  const renderers = {
    switch: props => <LightSwitch key={props.id} {...props} />
  }
  return (
    <List>
      {data.loading && <Loader />}
      {data.lights &&
        data.lights.map(x => {
          const renderLight = renderers[x.type]
          return renderLight(x)
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

export default graphql(
  gql`
    query LightsQuerry {
      lights {
        id,
        name,
        type,
        status
      }
    }
  `
)(Lights)
