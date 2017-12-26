import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import List from './List'

const renderer = new ShallowRenderer()

describe('scenes/Lists/List', () => {
  it('Should render null when the data is loading', () => {
    const props = {
      id: 4,
      name: 'My todo list',
      data: {
        loading: true,
        list: {
          items: []
        }
      },
      updateList: jest.fn(),
      deleteList: jest.fn()
    }
    const tree = renderer.render(<List {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly', () => {
    const props = {
      id: 4,
      name: 'My todo list',
      data: {
        loading: false,
        list: {
          items: [
            {
              id: 1,
              text: 'Item #1',
              done: false
            },
            {
              id: 2,
              text: 'Item #2',
              done: true
            },
            {
              id: 3,
              text: 'Item #3',
              done: false
            }
          ]
        }
      },
      updateList: jest.fn(),
      deleteList: jest.fn()
    }
    const tree = renderer.render(<List {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should call the mutation when the delete icon is clicked', () => {
    const props = {
      id: 6,
      name: 'My todo list #2',
      data: {
        loading: false,
        list: {
          items: []
        }
      },
      updateList: jest.fn(),
      deleteList: jest.fn()
    }
    const wrapper = shallow(<List {...props} />)

    wrapper.find('MdClear').simulate('click')

    expect(props.deleteList.mock.calls.length).toEqual(1)
    expect(props.deleteList.mock.calls[0][0]).toEqual({
      variables: { id: 6 }
    })
  })
})
