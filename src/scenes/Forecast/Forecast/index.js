import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { getForecast } from 'queries/weather'
import Forecast from './Forecast'

class ForecastContainer extends Component {
  static propTypes = {
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    data: PropTypes.shape({
      startPolling: PropTypes.func.isRequired,
      stopPolling: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    // this.props.data.startPolling(360000)
  }

  componentWillUnmount () {
    // this.props.data.stopPolling()
  }

  render () {
    return <Forecast {...this.props} />
  }
}

const queryOptions = {
  options: ({ longitude, latitude }) => ({
    variables: { lon: longitude, lat: latitude }
  })
}

export default graphql(getForecast, queryOptions)(ForecastContainer)
