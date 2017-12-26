jest.mock('react-icons/lib/md/clear', () => 'DeleteIcon')
jest.mock('ui/Card', () => 'Card')
jest.mock('./Item', () => 'Item')
jest.mock('./NewItem', () => 'NewItem')

import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import List from './List'

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
      mutate: jest.fn()
    }
    const tree = renderer.create(<List {...props} />)

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
      mutate: jest.fn()
    }
    const tree = renderer.create(<List {...props} />)

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
      mutate: jest.fn()
    }
    const wrapper = shallow(<List {...props} />)

    wrapper.find('DeleteIcon').simulate('click')

    expect(props.mutate.mock.calls.length).toEqual(1)
    expect(props.mutate.mock.calls[0][0]).toEqual({
      variables: { id: 6 }
    })
  })
})
