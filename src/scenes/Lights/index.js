import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { getLights, lightUpdated } from 'queries/lights'
import Lights from './Lights'

export class LightsContainer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      startPolling: PropTypes.func.isRequired,
      stopPolling: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    this.props.data.subscribeToMore({
      document: lightUpdated,
      updateQuery: this._onLightUpdated
    })
  }

  _onLightUpdated = (prev, { subscriptionData }) => {
    if (!subscriptionData.data) {
      return
    }

    const updatedLight = subscriptionData.data.lightUpdated

    return {
      ...prev,
      lights: prev.lights.map(light => {
        if (light.id === updatedLight.id) {
          return updatedLight
        }

        return light
      })
    }
  }

  render () {
    return <Lights {...this.props} />
  }
}

export default graphql(getLights)(LightsContainer)
