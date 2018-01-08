import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gqlLoaderHoc from 'components/GqlLoader'
import Title from 'ui/WidgetTitle'

const Svg = styled.svg`
  display: block;

  polyline {
    stroke-width: .45;
    fill: none;
    stroke: rgba(255, 255, 255, .75);
  }

  line {
    stroke-width: .33;
    stroke: rgba(255, 255, 255, .33);
  }
`
const Label = styled.text`
  font-size: 2.5px;
  fill: #fff;
  font-family: monospace;
`

const YLabel = Label.extend`
  text-anchor: end;
  dominant-baseline: middle;
`

const XZone = styled.rect`
  fill: ${({ odd }) => (odd ? 'rgba(255, 255, 255, .01)' : 'rgba(255, 255, 255, .05)')};
`

const XLabel = Label.extend`
  text-anchor: middle;
`

function LineChart ({ items, getItemValue, getItemLabel }) {
  const height = 100
  const width = 100
  const length = items.length
  const allValues = items.map(getItemValue)
  let maxValue = allValues.reduce(
    (acc, value) => Math.max(acc, value),
    Number.NEGATIVE_INFINITY
  )
  let minValue = allValues.reduce(
    (acc, value) => Math.min(acc, value),
    Number.POSITIVE_INFINITY
  )

  maxValue = Math.max(maxValue, 15)
  minValue = Math.min(minValue, 0)

  const yAxisLabelNumber = 4
  const step = maxValue / (yAxisLabelNumber - 1)
  const yAxisLabel = []

  for (let i = 0; i < yAxisLabelNumber; i += 1) {
    yAxisLabel.push(Math.round(maxValue - (minValue + step) * i))
  }

  const getY = value =>
    height -
    10 -
    Math.round((height - 20) * ((value - minValue) / (maxValue - minValue)))

  const path = allValues.reduce((partialPath, value, index) => {
    return `${partialPath} ${index * (width - 10) / length + 10},${getY(value)}`
  }, '')

  const labels = items.map(getItemLabel)
  const countPerDate = labels.reduce((acc, date) => {
    if (!acc[date]) {
      acc[date] = 0
    }

    acc[date] += 1

    return acc
  }, {})

  const xAxis = Object.keys(countPerDate).map(date => {
    const occurences = countPerDate[date]
    const labelWidth = occurences / items.length * (width - 10)

    return {
      width: labelWidth,
      label: date
    }
  })
  let xAxisOffset = 10

  return (
    <Svg viewBox={`0 0 ${width} ${height}`}>
      {yAxisLabel.map((value, index) => (
        <YLabel y={index / (yAxisLabel.length - 1) * (height - 20) + 10} x='8'>
          {value}°
        </YLabel>
      ))}

      {xAxis.map((label, index) => {
        const x = xAxisOffset
        xAxisOffset += label.width
        return (
          <Fragment>
            <XZone
              height={height - 20}
              width={label.width}
              y={10}
              x={x}
              odd={index % 2 === 0}
            />
            <XLabel x={x + label.width / 2} y={height - 5}>
              {label.label}
            </XLabel>
          </Fragment>
        )
      })}

      <line x1='10' x2='10' y1='10' y2={height - 10} />
      <line x1='10' x2={width} y1={height - 10} y2={height - 10} />
      <polyline points={path} />
    </Svg>
  )
}

export function Forecast ({ data }) {
  const forecast = data.weatherForecast

  return (
    <Container>
      <Title>Forecast</Title>
      <ChartContainer>
        <LineChart
          items={forecast}
          getItemValue={weather => weather.temp}
          getItemLabel={item => {
            const date = new Date(item.date)

            return `${date.getDate()}/${date.getMonth() + 1}`
          }}
        />
      </ChartContainer>
    </Container>
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

const Container = styled.div`
  padding: 12px;
`

const ChartContainer = styled.div`
`

export default gqlLoaderHoc(Forecast)
