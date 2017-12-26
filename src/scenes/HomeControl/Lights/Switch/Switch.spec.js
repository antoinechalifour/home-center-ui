import 'jest-styled-components'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Switch from './Switch'

const renderer = new ShallowRenderer()

describe('scenes/HomeControl/Lights/Switch', () => {
  it('Should render correctly (off)', () => {
    const props = {
      id: '3',
      name: 'Light #3',
      status: 'off',
      mutate: jest.fn()
    }
    const tree = renderer.render(<Switch {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly (on)', () => {
    const props = {
      id: '3',
      name: 'Light #3',
      status: 'on',
      mutate: jest.fn()
    }
    const tree = renderer.render(<Switch {...props} />)

    expect(tree).toMatchSnapshot()
  })
})
