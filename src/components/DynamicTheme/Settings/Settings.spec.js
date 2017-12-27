import 'jest-styled-components'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import Button from 'ui/Button'
import Settings from '.'

const renderer = new ShallowRenderer()
const theme = {
  colors: {
    background: '#000',
    text: '#fff'
  }
}

describe('components/DynamicTheme/Settings', () => {
  it('Should render correctly', () => {
    const props = {
      theme,
      onColorChange: jest.fn(),
      onCommit: jest.fn(),
      onReset: jest.fn()
    }
    const tree = renderer.render(<Settings {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should call onColorChange when the settings change', () => {
    const props = {
      theme,
      onColorChange: jest.fn(),
      onCommit: jest.fn(),
      onReset: jest.fn()
    }
    const wrapper = shallow(<Settings {...props} />)

    wrapper.find('ColorPicker').at(1).simulate('change', 'blue')

    expect(props.onColorChange.mock.calls.length).toBe(1)
    expect(props.onColorChange.mock.calls[0][0]).toBe('text')
    expect(props.onColorChange.mock.calls[0][1]).toBe('blue')
  })

  it('Should call onReset when the reset button is clicked', () => {
    const props = {
      theme,
      onColorChange: jest.fn(),
      onCommit: jest.fn(),
      onReset: jest.fn()
    }
    const wrapper = shallow(<Settings {...props} />)

    wrapper.find(Button).at(0).simulate('click')

    expect(props.onReset.mock.calls.length).toBe(1)
  })

  it('Should call onReset when the reset button is clicked', () => {
    const props = {
      theme,
      onColorChange: jest.fn(),
      onCommit: jest.fn(),
      onReset: jest.fn()
    }
    const wrapper = shallow(<Settings {...props} />)

    wrapper.find(Button).at(1).simulate('click')

    expect(props.onCommit.mock.calls.length).toBe(1)
  })
})
