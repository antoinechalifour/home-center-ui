jest.mock('./Lights', () => 'Lights')

import React from 'react'
import { shallow } from 'enzyme'
import { LightsContainer } from '.'

describe('scenes/Lights/LightsContainer', () => {
  it('Should start polling every 1000s on shallow', () => {
    const props = {
      data: {
        startPolling: jest.fn(),
        stopPolling: jest.fn()
      }
    }
    const wrapper = shallow(<LightsContainer {...props} />)

    expect(props.data.startPolling.mock.calls.length).toEqual(1)
    expect(props.data.startPolling.mock.calls[0][0]).toEqual(1000)
  })

  it('Should stop polling when the component unmounts', () => {
    const props = {
      data: {
        startPolling: jest.fn(),
        stopPolling: jest.fn()
      }
    }
    const wrapper = shallow(<LightsContainer {...props} />)

    wrapper.unmount()

    expect(props.data.stopPolling.mock.calls.length).toEqual(1)
  })
})
