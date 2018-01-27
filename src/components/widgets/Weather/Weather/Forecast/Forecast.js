import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThermometerIcon from 'react-icons/lib/ti/thermometer'
import { getDayName } from 'util/dates'
import gqlLoaderHoc from 'components/GqlLoader'
import WeatherIcon from '../Icon'

const getDateKey = date => `${date.getDate()}/${date.getMonth() + 1}`

class Forecast extends Component {
  static propTypes = {
    data: PropTypes.shape({
      weatherForecast: PropTypes.arrayOf(
        PropTypes.shape({
          temp: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired
        })
      )
    }).isRequired
  }

  _getDailyForecast (forecast) {
    const todayKey = getDateKey(new Date())
    const dataByDay = forecast.reduce((byDay, item) => {
      const dateKey = getDateKey(new Date(item.date))

      byDay[dateKey] = byDay[dateKey] || {
        date: new Date(item.date),
        forecast: []
      }
      byDay[dateKey].forecast.push(item)

      return byDay
    }, {})

    return Object.values(dataByDay).map(({ date, forecast }) => {
      const tempAvg =
        forecast.reduce((sum, weather) => sum + weather.temp, 0) /
        forecast.length
      const weatherOccurences = forecast.reduce((acc, weather) => {
        if (!acc[weather.kind]) {
          acc[weather.kind] = 0
        }

        acc[weather.kind] += 1

        return acc
      }, {})
      const weatherKind = Object.keys(weatherOccurences).sort(
        (k1, k2) => weatherOccurences[k2] - weatherOccurences[k1]
      )[0]

      return {
        date,
        temp: tempAvg,
        weather: weatherKind
      }
    })
  }

  render () {
    const dailyForecast = this._getDailyForecast(
      this.props.data.weatherForecast
    )

    return (
      <Fragment>
        {dailyForecast.map(({ date, temp, weather }) => (
          <Item key={getDayName(date).substr(0, 3)}>
            <div>{getDayName(date).substr(0, 3)}</div>
            <div><WeatherIcon type={weather} /></div>
            <div>{Math.round(temp)}°</div>
          </Item>
        ))}
      </Fragment>
    )
  }
}

const Item = styled.div`
  padding: 12px;
  text-align: center;

  > div:first-child {
    opacity: .54;
  }

  svg {
    font-size: 24px;
    margin: 4px 0;
    opacity: .33;
  }

  + li {
    border-left: 1px solid rgba(0, 0, 0, .15);
  }
`

export default gqlLoaderHoc(Forecast)
