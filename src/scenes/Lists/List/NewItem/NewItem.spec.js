import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import NewItem from './NewItem'

describe('scenes/Lists/List/NewItem', () => {
  it('Should submit the item when the button is clicked', () => {
    const props = {
      listId: 2,
      mutate: jest.fn()
    }
    const wrapper = shallow(<NewItem {...props} />)
    const preventDefault = jest.fn()

    wrapper.setState({ value: 'New item!' })
    wrapper.simulate('submit', { preventDefault })

    expect(props.mutate.mock.calls.length).toBe(1)
    expect(preventDefault.mock.calls.length).toBe(1)
    expect(props.mutate.mock.calls[0][0]).toEqual({
      variables: {
        listId: props.listId,
        text: 'New item!'
      }
    })
    expect(wrapper.state()).toEqual({ value: '' })
  })

  it('Should render correctly', () => {
    const props = {
      listId: 2,
      mutate: jest.fn()
    }

    const tree = renderer.create(<NewItem {...props} />)
    tree.getInstance().setState({ value: 'This item will be added' })

    expect(tree).toMatchSnapshot()
  })
})
