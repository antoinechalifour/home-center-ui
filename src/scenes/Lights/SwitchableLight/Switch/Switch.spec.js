jest.mock('react-icons/lib/md/lightbulb-outline', () => 'Icon')
jest.mock('ui/ToggleSwitch', () => 'ToggleSwitch')

import React from 'react'
import { shallow } from 'enzyme'
import Switch from '.'

const theme = {
  colors: { accent: 'red', text: 'black' }
}

describe('ui/HomeControl/Lights/Switch', () => {
  it('Should render correctly (off)', () => {
    const props = {
      isOn: false,
      onClick: jest.fn()
    }
    const wrapper = shallow(<Switch {...props} theme={theme} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render correctly (on)', () => {
    const props = {
      isOn: true,
      onClick: jest.fn()
    }
    const wrapper = shallow(<Switch {...props} theme={theme} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should handle click events', () => {})
})
