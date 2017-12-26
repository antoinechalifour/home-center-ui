import 'jest-styled-components'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Lights from './Lights'

const renderer = new ShallowRenderer()

describe('scenes/HomeControl/Lights', () => {
  it('Should render a loader when the data is not fetched', () => {
    const props = {
      data: {
        loading: true
      }
    }
    const tree = renderer.render(<Lights {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render the list of lights otherwise', () => {
    const props = {
      data: {
        loading: false,
        lights: [
          { id: '1', type: 'switch', name: '#1', status: 'on' },
          { id: '2', type: 'dimmer', name: '#2', status: 'on' },
          { id: '3', type: 'switch', name: '#3', status: 'off' }
        ]
      }
    }
    const tree = renderer.render(<Lights {...props} />)

    expect(tree).toMatchSnapshot()
  })
})
