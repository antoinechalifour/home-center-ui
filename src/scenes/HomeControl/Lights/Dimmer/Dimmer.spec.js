jest.mock('debounce', () => fn => fn)

import 'jest-styled-components'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import Dimmer from './Dimmer'

const renderer = new ShallowRenderer()

describe('scnees/HomeControl/Lights/Dimmer', () => {
  it('Should render correctly', () => {
    const props = {
      id: '2',
      name: 'My light #2',
      bri: 33,
      updateLight: jest.fn()
    }
    const tree = renderer.render(<Dimmer {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should update the brightness when the range input changes', () => {
    const props = {
      id: '3',
      name: 'My light #3',
      bri: 12,
      updateLight: jest.fn()
    }
    const wrapper = shallow(<Dimmer {...props} />)

    wrapper.instance().onBrightnessChange(33.5)

    expect(props.updateLight.mock.calls.length).toBe(1)
    expect(props.updateLight.mock.calls[0][0]).toEqual({
      variables: {
        lightId: '3',
        bri: 34
      }
    })
  })

  it('Should update the name when the input changes', () => {
    const props = {
      id: '4',
      name: 'My light #4',
      bri: 12,
      updateLight: jest.fn()
    }
    const wrapper = shallow(<Dimmer {...props} />)

    wrapper.instance().onNameChange('Modified name')

    expect(props.updateLight.mock.calls.length).toBe(1)
    expect(props.updateLight.mock.calls[0][0]).toEqual({
      variables: {
        lightId: '4',
        name: 'Modified name'
      }
    })
  })
})
