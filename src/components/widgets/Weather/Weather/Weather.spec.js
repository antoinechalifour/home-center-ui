import React from 'react'
import { shallow } from 'enzyme'
import { Weather } from './Weather'

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
    const wrapper = shallow(<Weather {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
