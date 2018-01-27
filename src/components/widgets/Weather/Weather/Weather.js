import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WindSpeedIcon from 'react-icons/lib/ti/weather-windy'
import ThermometerIcon from 'react-icons/lib/ti/thermometer'
import { getDayName } from 'util/dates'
import { getWeatherName } from 'util/weather'
import gqlLoaderHoc from 'components/GqlLoader'
import Icon from './Icon'
import Forecast from './Forecast'

class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount () {
    this._interval = window.setInterval(this._updateClock, 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this._interval)
  }

  _updateClock = () => {
    this.setState({ date: new Date() })
  }

  render () {
    let hours = this.state.date.getHours()
    let minutes = this.state.date.getMinutes()

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes

    return <div>{hours}:{minutes}</div>
  }
}

export class Weather extends Component {
  _renderTop () {
    const weather = this.props.data.weather

    return (
      <Fragment>
        <Icon type={weather.kind} />
        <Title>Current weather</Title>
        <WeatherType>{getWeatherName(weather.kind)}</WeatherType>
        <Geolocation>
          <div>{weather.city}</div>
          <Clock />
        </Geolocation>
      </Fragment>
    )
  }

  _renderDetail () {
    return (
      <Detail>
        <Temperature>
          <div>
            {Math.round(this.props.data.weather.temp)}<TempSign>°</TempSign>
          </div>
          <div>{getDayName(new Date())}</div>
        </Temperature>
        <WindInformation>
          <div>
            <WindSpeedIcon />
          </div>
          <div>{this.props.data.weather.wind_speed}km/h</div>
        </WindInformation>
      </Detail>
    )
  }

  render () {
    return (
      <Container>
        <Top>
          {this._renderTop()}
        </Top>
        <Bottom>
          {this._renderDetail()}
          <Forecast />
        </Bottom>
      </Container>
    )
  }
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

const Container = styled.div`
  clear: both;
`

const Top = styled.div`
  padding: 32px 12px;
  position: relative;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;

  svg {
    font-size: 80px;
  }
`

const Title = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`

const WeatherType = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
`

const Geolocation = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  text-align: right;
`

const Bottom = styled.div`
  width: 100%;
  float: left;
  display: flex;
  overflow-x: auto;
`

const Detail = styled.div`
  display: flex;
  align-items: center;
`

const Temperature = styled.div`
  flex: 1 0 55px;
  padding: 12px;
  text-align: center;

  > div:first-child {
    font-size: 32px;
  }

  > div:last-child {
    opacity: .54;
  }
`

const WindInformation = styled.div`
  flex: 1 0 55px;
  padding: 12px;
  text-align: center;
  position: relative;
  top: 6px;

  svg {
    font-size: 32px;
    margin-bottom: 8px;
  }

  > div:last-child {
    opacity: .54;
    font-size: 12px;
  }
`

// const ForecastContainer = styled.div`
//   flex: 1;
//   border-left: 1px solid rgba(0, 0, 0, .15);
//   overflow-x: auto;

//   li {
//     flex: 1 0 55px;
//   }
// `

const TempSign = styled.span`
  font-size: 65%;
  opacity: .54;
  vertical-align: top;
  position: relative;
  top: 4px;
  left: 2px;
`
