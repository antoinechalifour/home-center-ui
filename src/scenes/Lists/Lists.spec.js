jest.mock('ui/Loader', () => 'Loader')
jest.mock('./NewList', () => 'NewList')
jest.mock('./List', () => 'List')

import React from 'react'
import renderer from 'react-test-renderer'
import Lists from './Lists'

describe('scenes/Lists', () => {
  it('Should render a loader when the data is fetching', () => {
    const props = {
      data: { loading: true }
    }
    const tree = renderer.create(<Lists {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render a list of Lists otherwise', () => {
    const props = {
      data: {
        loading: false,
        lists: [
          {
            id: 1,
            name: 'List #1'
          },
          {
            id: 2,
            name: 'List #2'
          }
        ]
      }
    }
    const tree = renderer.create(<Lists {...props} />)

    expect(tree).toMatchSnapshot()
  })
})
