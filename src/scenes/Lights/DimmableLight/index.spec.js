jest.mock('debounce', () => fn => fn)
jest.mock('./DimmableLight', () => 'DimmableLight')

import React from 'react'
import { shallow } from 'enzyme'
import { DimmableLightContainer } from '.'

describe('scenes/Lights/DimmableLight', () => {
  it('Should should the initial state using the "bri" prop', () => {
    const props = {
      id: '1',
      bri: 53,
      setBrightness: jest.fn()
    }

    const wrapper = shallow(<DimmableLightContainer {...props} />)

    expect(wrapper.state()).toEqual({
      value: 53
    })
  })

  it('Should update the state brightness when the component receives new props', () => {
    const props = {
      id: '1',
      bri: 53,
      setBrightness: jest.fn()
    }
    const wrapper = shallow(<DimmableLightContainer {...props} />)

    wrapper.setProps({ bri: 42 })

    expect(wrapper.state()).toEqual({
      value: 42
    })
  })

  describe('_commitBrightness', () => {
    it('Should call props.setBrightness()', () => {
      const props = {
        id: '42',
        bri: 66,
        setBrightness: jest.fn()
      }
      const wrapper = shallow(<DimmableLightContainer {...props} />)

      wrapper.setState({ value: 99 })
      wrapper.instance()._commitBrightness()

      expect(props.setBrightness.mock.calls.length).toEqual(1)
      expect(props.setBrightness.mock.calls[0][0]).toEqual({
        variables: {
          input: {
            id: '42',
            bri: 99
          }
        }
      })
    })
  })
})
