jest.mock('react-icons/lib/md/check-box-outline-blank', () => 'UncheckedIcon')
jest.mock('react-icons/lib/md/check-box', () => 'CheckedIcon')
jest.mock('react-icons/lib/md/clear', () => 'DeleteIcon')

import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import Item from './Item'

const renderer = new ShallowRenderer()

describe('scenes/Lists/List/Item', () => {
  it('Should render a unchecked icon when the item is not done', () => {
    const props = {
      id: 2,
      text: 'This is an item',
      done: false,
      updateListItem: jest.fn(),
      deleteListItem: jest.fn()
    }
    const tree = renderer.render(<Item {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render a checked icon when the item is done', () => {
    const props = {
      id: 2,
      text: 'This is an item',
      done: true,
      updateListItem: jest.fn(),
      deleteListItem: jest.fn()
    }
    const tree = renderer.render(<Item {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should call the delete mutation when the delete icon is clicked', () => {
    const props = {
      id: 2,
      text: 'This is an item',
      done: true,
      updateListItem: jest.fn(),
      deleteListItem: jest.fn()
    }
    const wrapper = shallow(<Item {...props} />)
    wrapper.find('DeleteIcon').simulate('click')

    expect(props.deleteListItem.mock.calls.length).toBe(1)
    expect(props.deleteListItem.mock.calls[0][0]).toEqual({
      variables: {
        id: 2
      }
    })
  })

  it('Should call the update mutation when the checkbox icon is clicked', () => {
    const props = {
      id: 2,
      text: 'This is an item',
      done: true,
      updateListItem: jest.fn(),
      deleteListItem: jest.fn()
    }
    const wrapper = shallow(<Item {...props} />)
    wrapper.find('CheckedIcon').simulate('click')

    expect(props.updateListItem.mock.calls.length).toBe(1)
    expect(props.updateListItem.mock.calls[0][0]).toEqual({
      variables: {
        id: 2,
        text: props.text,
        done: false
      }
    })
  })
})
