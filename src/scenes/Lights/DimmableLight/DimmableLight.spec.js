import React from 'react'
import { shallow } from 'enzyme'
import DimmableLight from './DimmableLight'

describe('scnees/HomeControl/Lights/DimmableLight', () => {
  it('Should render correctly', () => {
    const props = {
      bri: 33,
      updateBrightness: jest.fn()
    }
    const wrapper = shallow(<DimmableLight {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
