import React from 'react'
import { shallow } from 'enzyme'
import NewItem from './NewItem'

describe('scenes/Lists/List/NewItem', () => {
  it('Should submit the item when the button is clicked', () => {
    const props = {
      addItem: jest.fn()
    }
    const wrapper = shallow(<NewItem {...props} />)
    const preventDefault = jest.fn()

    wrapper.setState({ value: 'New item!' })
    wrapper.simulate('submit', { preventDefault })

    expect(props.addItem.mock.calls.length).toBe(1)
    expect(preventDefault.mock.calls.length).toBe(1)
    expect(props.addItem.mock.calls[0][0]).toEqual('New item!')
    expect(wrapper.state()).toEqual({ value: '' })
  })

  it('Should render correctly', () => {
    const props = {
      addItem: jest.fn()
    }

    const wrapper = shallow(<NewItem {...props} />)
    wrapper.setState({ value: 'This item will be added' })

    expect(wrapper).toMatchSnapshot()
  })
})
