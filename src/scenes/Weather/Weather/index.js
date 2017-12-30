import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { getWeather } from 'queries/weather'
import Weather from './Weather'

class WeatherContainer extends Component {
  static propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    data: PropTypes.shape({
      startPolling: PropTypes.func.isRequired,
      stopPolling: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    console.log('Starting polling...')
    this.props.data.startPolling(300000)
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
