import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Weather from './Weather'

const renderer = new ShallowRenderer()

describe('scenes/Weather/Weather', () => {
  it('Should render the widget', () => {
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
    const tree = renderer.render(<Weather {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
