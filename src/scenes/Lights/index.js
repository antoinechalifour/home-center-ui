import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { getLights } from 'queries/lights'
import Lights from './Lights'

export class LightsContainer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      startPolling: PropTypes.func.isRequired,
      stopPolling: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    this.props.data.startPolling(1000)
  }

  componentWillUnmount () {
    this.props.data.stopPolling()
  }

  render () {
    return <Lights {...this.props} />
  }
}

export default graphql(getLights)(LightsContainer)
