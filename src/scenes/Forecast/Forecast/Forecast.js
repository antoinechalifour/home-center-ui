import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThermometerIcon from 'react-icons/lib/ti/thermometer'
import gqlLoaderHoc from 'components/GqlLoader'

const getDateKey = date => `${date.getDate()}/${date.getMonth() + 1}`

export function Forecast ({ data }) {
  const forecast = data.weatherForecast
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

  delete dataByDay[todayKey]

  const forecastByDay = Object.values(dataByDay).map(({ date, forecast }) => ({
    day: {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    },
    forecast: {
      min: forecast.reduce(
        (currentMin, x) => Math.min(currentMin, x.temp),
        Number.POSITIVE_INFINITY
      ),
      max: forecast.reduce(
        (currentMax, x) => Math.max(currentMax, x.temp),
        Number.NEGATIVE_INFINITY
      )
    }
  }))

  return (
    <div>
      <ul>
        {forecastByDay.map(({ day, forecast }) => (
          <DailyForecast key={day.day}>
            <Day>{day.day} / {day.month} </Day>
            <Temperatures>
              <ThermometerIcon />
              <span>{Math.round(forecast.min)}°</span>
              {' '}
              -
              {' '}
              <span>{Math.round(forecast.max)}°</span>
            </Temperatures>
          </DailyForecast>
        ))}
      </ul>
    </div>
  )
}

Forecast.propTypes = {
  data: PropTypes.shape({
    weatherForecast: PropTypes.arrayOf(
      PropTypes.shape({
        temp: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired
      })
    )
  }).isRequired
}

export default gqlLoaderHoc(Forecast)

const DailyForecast = styled.li`
  padding: 12px;

  > span {
    display: block;
  }
`

const Day = styled.span`
  opacity: .33;
  font-size: 80%;
`

const Temperatures = styled.span`
  svg {
    opacity: .75;
    margin: 0 12px;
  }

  span:first-of-type {
    opacity: .54;
  }
`
