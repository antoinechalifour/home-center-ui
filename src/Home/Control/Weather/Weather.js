import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from 'ui/Loader'
import WindSpeedIcon from 'react-icons/lib/ti/weather-windy'
import ThermometerIcon from 'react-icons/lib/ti/thermometer'
import ClearIcon from 'react-icons/lib/ti/weather-partly-sunny'
import CloudsIcon from 'react-icons/lib/ti/weather-cloudy'
import MistIcon from 'react-icons/lib/ti/waves'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const WeatherIconWrapper = styled.div`
  margin-right: 24px;

  svg {
    font-size: 128px;
  }
`

const Temp = styled.div`
  font-size: 64px;
`

const TempMin = styled.span`
  opacity: .45;
`

const Info = styled.div`
  span + span::before {
    content: '•';
    margin: auto 12px;
    opacity: .54;
  }

  svg {
    font-size: 18px;
  }
`

const KindToIcon = {
  clear: ClearIcon,
  clouds: CloudsIcon,
  mist: MistIcon,
  fog: MistIcon
}

const Weather = ({ latitude, longitude, data }) => {
  if (data.loading) {
    return <Loader />
  }

  const weather = data.weather
  console.log(weather.kind)
  const WeatherIcon = KindToIcon[weather.kind]

  return (
    <Wrapper>
      <WeatherIconWrapper>
        <WeatherIcon />
      </WeatherIconWrapper>
      <div>
        <Temp>{weather.temp}°</Temp>
        <Info>
          <span>
            {weather.city}
          </span>
          <span>
            <WindSpeedIcon /> {weather.wind_speed} km/h
          </span>
          <span>
            <ThermometerIcon />
            {' '}
            <TempMin>{weather.temp_min}</TempMin>
            {' '}
            -
            {' '}
            {weather.temp_max}
          </span>
        </Info>
      </div>
    </Wrapper>
  )
}

Weather.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    weather: PropTypes.shape({
      city: PropTypes.string.isRequired,
      kind: PropTypes.string.isRequired,
      pressure: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      wind_speed: PropTypes.number.isRequired
    })
  }).isRequired
}

export default graphql(
  gql`
  query WeatherQuerr ($lon: Float, $lat: Float) {
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
`,
  {
    options: ({ longitude, latitude }) => ({
      variables: { lon: longitude, lat: latitude }
    })
  }
)(Weather)
