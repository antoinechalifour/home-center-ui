jest.mock('debounce', () => fn => fn)

import 'jest-styled-components'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import DimmableLight from './DimmableLight'

const renderer = new ShallowRenderer()

describe('scnees/HomeControl/Lights/DimmableLight', () => {
  it('Should render correctly', () => {
    const props = {
      id: '2',
      name: 'My light #2',
      bri: 33,
      setBrightness: jest.fn(),
      updateLightInformation: jest.fn()
    }
    const tree = renderer.render(<DimmableLight {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should update the brightness when the range input changes', () => {
    const props = {
      id: '3',
      name: 'My light #3',
      bri: 12,
      setBrightness: jest.fn(),
      updateLightInformation: jest.fn()
    }
    const wrapper = shallow(<DimmableLight {...props} />)

    wrapper.instance().onBrightnessChange(33.5)

    expect(props.setBrightness.mock.calls.length).toBe(1)
    expect(props.setBrightness.mock.calls[0][0]).toEqual({
      variables: {
        input: {
          id: '3',
          bri: 34
        }
      }
    })
  })

  it('Should update the name when the input changes', () => {
    const props = {
      id: '4',
      name: 'My light #4',
      bri: 12,
      setBrightness: jest.fn(),
      updateLightInformation: jest.fn()
    }
    const wrapper = shallow(<DimmableLight {...props} />)

    wrapper.instance().onNameChange('Modified name')

    expect(props.updateLightInformation.mock.calls.length).toBe(1)
    expect(props.updateLightInformation.mock.calls[0][0]).toEqual({
      variables: {
        input: {
          id: '4',
          name: 'Modified name'
        }
      }
    })
  })
})
