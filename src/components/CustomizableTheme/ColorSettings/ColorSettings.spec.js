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
      changeColor: jest.fn(),
      commit: jest.fn(),
      reset: jest.fn()
    }
    const tree = renderer.render(<Settings {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should call changeColor when the settings change', () => {
    const props = {
      theme,
      changeColor: jest.fn(),
      commit: jest.fn(),
      reset: jest.fn()
    }
    const wrapper = shallow(<Settings {...props} />)

    wrapper.find('ColorPicker').at(1).simulate('change', 'blue')

    expect(props.changeColor.mock.calls.length).toBe(1)
    expect(props.changeColor.mock.calls[0][0]).toBe('text')
    expect(props.changeColor.mock.calls[0][1]).toBe('blue')
  })

  it('Should call reset when the reset button is clicked', () => {
    const props = {
      theme,
      changeColor: jest.fn(),
      commit: jest.fn(),
      reset: jest.fn()
    }
    const wrapper = shallow(<Settings {...props} />)

    wrapper.find(Button).at(0).simulate('click')

    expect(props.reset.mock.calls.length).toBe(1)
  })

  it('Should call reset when the reset button is clicked', () => {
    const props = {
      theme,
      changeColor: jest.fn(),
      commit: jest.fn(),
      reset: jest.fn()
    }
    const wrapper = shallow(<Settings {...props} />)

    wrapper.find(Button).at(1).simulate('click')

    expect(props.commit.mock.calls.length).toBe(1)
  })
})
