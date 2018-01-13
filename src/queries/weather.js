import gql from 'graphql-tag'

export const getWeather = gql`
  query GetWeather ($lon: Float, $lat: Float) {
    weather (lon: $lon, lat: $lat) {
      city,
      kind
      temp
      temp_min
      temp_max
      pressure
      wind_speed
    }
  }
`

export const getForecast = gql`
  query GetForecast ($lon: Float, $lat: Float) {
    weatherForecast (lon: $lon, lat: $lat) {
      temp,
      date
    }
  }
`
