import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Lists from './Lists'

const renderer = new ShallowRenderer()

describe('scenes/Lists', () => {
  it('Should render a loader when the data is fetching', () => {
    const props = {
      data: { loading: true }
    }
    const tree = renderer.render(<Lists {...props} />)

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
    const tree = renderer.render(<Lists {...props} />)

    expect(tree).toMatchSnapshot()
  })
})
