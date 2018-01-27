import React from 'react'
import { shallow } from 'enzyme'
import DeleteIcon from 'react-icons/lib/md/clear'
import { List } from './List'

describe('scenes/Lists/List', () => {
  it('Should render correctly', () => {
    const props = {
      id: 4,
      data: {
        loading: false,
        list: {
          name: 'My todo list',
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
      updateName: jest.fn(),
      deleteList: jest.fn()
    }
    const wrapper = shallow(<List {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should call the mutation when the delete icon is clicked', () => {
    const props = {
      id: 6,
      data: {
        loading: false,
        list: {
          name: 'My todo list #2',
          items: []
        }
      },
      updateName: jest.fn(),
      deleteList: jest.fn()
    }
    const wrapper = shallow(<List {...props} />)

    wrapper.find('MdClear').simulate('click')

    expect(props.deleteList.mock.calls.length).toEqual(1)
    expect(props.deleteList.mock.calls[0][0]).toEqual()
  })
})
