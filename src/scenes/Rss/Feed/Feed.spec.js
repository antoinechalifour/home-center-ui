import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Feed from './Feed'

const renderer = new ShallowRenderer()

describe('scenes/Rss/Feed', () => {
  it('Should render a loader when the data is loading', () => {
    const props = {
      data: { loading: true },
      deleteSource: jest.fn()
    }
    const tree = renderer.render(<Feed {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render an empty message when the feed is empty', () => {
    const props = {
      data: {
        loading: false,
        feed: []
      },
      deleteSource: jest.fn()
    }
    const tree = renderer.render(<Feed {...props} />)

    expect(tree).toMatchSnapshot()
  })

  it('Should render the feed otherwise', () => {
    const props = {
      data: {
        loading: false,
        feed: [
          {
            date: 'Tue, 26 Dec 2017 09:46:38 +0100',
            link: 'http://fizz.buzz',
            source: 'FizzBuzz Magazine',
            title: 'Fizz! Buzz!'
          },
          {
            date: 'Tue, 26 Dec 2017 09:42:38 +0100',
            link: 'http://foo.bar',
            source: 'FooBar Magazine',
            title: 'Foo! Bar!'
          }
        ]
      },
      deleteSource: jest.fn()
    }
    const tree = renderer.render(<Feed {...props} />)

    expect(tree).toMatchSnapshot()
  })
})
