import React from 'react'
import { shallow } from 'enzyme'
import Editable from '.'

describe('components/Editable', () => {
  it('Should render view mode', () => {
    const props = {
      onChange: jest.fn()
    }
    const wrapper = shallow(<Editable {...props}>this is editable</Editable>)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render edition mode', () => {
    const props = {
      onChange: jest.fn()
    }
    const wrapper = shallow(<Editable {...props}>this is editable</Editable>)

    wrapper.setState({
      isEditionMode: true,
      input: 'modified text'
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('Should switch to edition mode on click', () => {
    const props = { onChange: jest.fn() }
    const wrapper = shallow(<Editable {...props}>test</Editable>)

    wrapper.simulate('click')

    expect(wrapper.state()).toEqual({
      isEditionMode: true,
      input: 'test'
    })
  })

  it('Should exit without calling onChange on key up 27', () => {
    const props = { onChange: jest.fn() }
    const wrapper = shallow(<Editable {...props}>test</Editable>)

    wrapper.setState({
      isEditionMode: true,
      input: 'updated text'
    })

    // Dirty hack to find styled component input
    const input = wrapper.findWhere(
      x => x.type().displayName === 'styled.input'
    )
    input.simulate('focus')
    input.simulate('keyup', { keyCode: 27 })

    expect(wrapper.state()).toEqual({
      isEditionMode: false,
      input: ''
    })
  })

  it('Should exit and call onChange on key up 13', () => {
    const props = { onChange: jest.fn() }
    const wrapper = shallow(<Editable {...props}>test</Editable>)

    wrapper.setState({
      isEditionMode: true,
      input: 'updated text'
    })

    // Dirty hack to find styled component input
    const input = wrapper.findWhere(
      x => x.type().displayName === 'styled.input'
    )
    input.simulate('focus')
    input.simulate('keyup', { keyCode: 13 })

    expect(wrapper.state()).toEqual({
      isEditionMode: false,
      input: ''
    })
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0][0]).toBe('updated text')
  })
})
