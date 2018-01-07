import React from 'react'
import { shallow } from 'enzyme'
import SwitchableLight from './SwitchableLight'

describe('scenes/HomeControl/Lights/SwitchableLight', () => {
  it('Should render correctly (off)', () => {
    const props = {
      id: '3',
      name: 'Light #3',
      status: 'off',
      toggleLight: jest.fn(),
      updateName: jest.fn()
    }
    const wrapper = shallow(<SwitchableLight {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render correctly (on)', () => {
    const props = {
      id: '3',
      name: 'Light #3',
      status: 'on',
      toggleLight: jest.fn(),
      updateName: jest.fn()
    }
    const wrapper = shallow(<SwitchableLight {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
