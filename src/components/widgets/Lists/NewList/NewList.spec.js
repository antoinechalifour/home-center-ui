import React from 'react'
import { shallow } from 'enzyme'
import NewList from './NewList'

describe('scenes/Lists/NewList', () => {
  it('Should render correctly', () => {
    const props = {
      mutate: jest.fn()
    }
    const wrapper = shallow(<NewList {...props} />)

    wrapper.setState({ value: 'my new list!' })

    expect(wrapper).toMatchSnapshot()
  })

  it('Should call the mutation when the form is submitted', () => {
    const props = {
      mutate: jest.fn()
    }
    const wrapper = shallow(<NewList {...props} />)
    const preventDefault = jest.fn()

    wrapper.setState({ value: 'my #2 item' })
    wrapper.simulate('submit', { preventDefault })

    expect(props.mutate.mock.calls.length).toBe(1)
    expect(props.mutate.mock.calls[0][0]).toEqual({
      variables: {
        input: { name: 'my #2 item' }
      }
    })
    expect(wrapper.state()).toEqual({ value: '' })
  })
})
