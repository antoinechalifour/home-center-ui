import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WindSpeedIcon from 'react-icons/lib/ti/weather-windy'
import ThermometerIcon from 'react-icons/lib/ti/thermometer'
import Loader from 'ui/Loader'
import Col from 'ui/Col'
import Row from 'ui/Row'
import Card, * as card from 'ui/Card'
import Icon from './Icon'

export default function Weather ({ data }) {
  if (data.loading) {
    return <Loader />
  }

  const weather = data.weather

  return (
    <Card>
      <card.Content>
        <Col align='center'>
          <MainRow align='center'>
            <Icon type={weather.kind} />
            <div>{weather.temp}°</div>
          </MainRow>
          <DetailRow align='center'>
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
          </DetailRow>
        </Col>
      </card.Content>
    </Card>
  )
}

Weather.propTypes = {
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

const MainRow = styled(Row)`
  font-size: 64px;

  > div:last-child {
    margin-left: 24px;
  }
`

const DetailRow = styled(Row)`
  opacity: .54;
  
  span + span::before {
    content: '•';
    margin-left: 12px;
    margin-right: 12px;
    opacity: .5;
  }
`

const MinTemperature = styled.span`
  opacity: .54;
`
