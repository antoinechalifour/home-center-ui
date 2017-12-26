import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { getWeather } from 'queries/weather'
import Weather from './Weather'

const queryOptions = {
  options: ({ longitude, latitude }) => ({
    variables: { lon: longitude, lat: latitude }
  })
}

const WeatherContainer = graphql(getWeather, queryOptions)(Weather)

WeatherContainer.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
}

export default WeatherContainer
