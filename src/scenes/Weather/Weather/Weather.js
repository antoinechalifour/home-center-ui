import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WindSpeedIcon from 'react-icons/lib/ti/weather-windy'
import ThermometerIcon from 'react-icons/lib/ti/thermometer'
import gqlLoaderHoc from 'components/GqlLoader'
import Icon from './Icon'

function Weather ({ data }) {
  const weather = data.weather

  return (
    <div>
      <Main>
        <Icon type={weather.kind} />
        <div>{Math.round(weather.temp)}°</div>
      </Main>
      <Detail>
        <span>
          {weather.city}
        </span>
        <span>
          <WindSpeedIcon /> {weather.wind_speed} km/h
        </span>
        <span>
          <ThermometerIcon />
          {' '}
          <MinTemperature>{weather.temp_min}</MinTemperature>
          {' '}
          -
          {' '}
          {weather.temp_max}
        </span>
      </Detail>
    </div>
  )
}

Weather.propTypes = {
  data: PropTypes.shape({
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

export default gqlLoaderHoc(Weather)

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = Row.extend`
  font-size: 64px;
  text-align: center;

  > div:last-child {
    margin-left: 24px;
  }
`

const Detail = Row.extend`
  opacity: .54;
  
  span + span::before {
    content: '•';
    margin-left: 12px;
    margin-right: 12px;
    opacity: .33;
  }
`

const MinTemperature = styled.span`
  opacity: .54;
`
