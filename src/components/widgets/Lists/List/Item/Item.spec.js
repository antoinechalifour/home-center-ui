jest.mock('react-icons/lib/md/check-box-outline-blank', () => 'UncheckedIcon')
jest.mock('react-icons/lib/md/check-box', () => 'CheckedIcon')
jest.mock('react-icons/lib/md/clear', () => 'DeleteIcon')

import React from 'react'
import { shallow } from 'enzyme'
import Item from './Item'

describe('scenes/Lists/List/Item', () => {
  it('Should render a unchecked icon when the item is not done', () => {
    const props = {
      text: 'This is an item',
      done: false,
      updateText: jest.fn(),
      toggleStatus: jest.fn(),
      deleteItem: jest.fn()
    }
    const wrapper = shallow(<Item {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render a checked icon when the item is done', () => {
    const props = {
      text: 'This is an item',
      done: true,
      updateText: jest.fn(),
      toggleStatus: jest.fn(),
      deleteItem: jest.fn()
    }
    const wrapper = shallow(<Item {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should call the delete mutation when the delete icon is clicked', () => {
    const props = {
      text: 'This is an item',
      done: true,
      updateText: jest.fn(),
      toggleStatus: jest.fn(),
      deleteItem: jest.fn()
    }
    const wrapper = shallow(<Item {...props} />)
    wrapper.find('DeleteIcon').simulate('click')

    expect(props.deleteItem.mock.calls.length).toBe(1)
    expect(props.deleteItem.mock.calls[0][0]).toEqual()
  })

  it('Should call the update mutation when the checkbox icon is clicked', () => {
    const props = {
      text: 'This is an item',
      done: true,
      updateText: jest.fn(),
      toggleStatus: jest.fn(),
      deleteItem: jest.fn()
    }
    const wrapper = shallow(<Item {...props} />)
    wrapper.find('CheckedIcon').simulate('click')

    expect(props.toggleStatus.mock.calls.length).toBe(1)
    expect(props.toggleStatus.mock.calls[0][0]).toEqual()
  })
})
