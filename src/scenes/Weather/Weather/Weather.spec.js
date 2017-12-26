jest.mock('react-icons/lib/ti/weather-windy', () => 'WindIcon')
jest.mock('react-icons/lib/ti/thermometer', () => 'ThermometerIcon')
jest.mock('ui/Loader', () => 'Loader')
jest.mock('ui/Col', () => 'Col')
jest.mock('ui/Row', () => 'Row')
jest.mock('./Icon', () => 'WeatherIcon')

import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Weather from './Weather'

describe('scenes/Weather/Weather', () => {
  it('Should render a loader when the data is loading', () => {
    const props = { data: { loading: true } }
    const tree = renderer.create(<Weather {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render the widget otherwise', () => {
    const props = {
      data: {
        loading: false,
        weather: {
          city: 'Limoges',
          kind: 'rain',
          pressure: 1008,
          temp: 6,
          temp_max: 6,
          temp_min: 6,
          wind_speed: 7.2
        }
      }
    }
    const tree = renderer.create(<Weather {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
