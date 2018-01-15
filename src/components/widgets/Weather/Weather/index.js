import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { getWeather } from 'queries/weather'
import Weather from './Weather'

class WeatherContainer extends Component {
  static propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    data: PropTypes.shape({
      startPolling: PropTypes.func.isRequired,
      stopPolling: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    this.props.data.startPolling(60000)
  }

  componentWillUnmount () {
    this.props.data.stopPolling()
  }

  render () {
    return <Weather {...this.props} />
  }
}

const queryOptions = {
  options: ({ longitude, latitude }) => ({
    variables: { lon: longitude, lat: latitude }
  })
}

export default graphql(getWeather, queryOptions)(WeatherContainer)
