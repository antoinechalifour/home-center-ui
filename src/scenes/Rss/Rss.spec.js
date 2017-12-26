jest.mock('ui/Col', () => 'Col')
jest.mock('ui/Loader', () => 'Loader')
jest.mock('ui/Card', () => {
  const Card = ({ children }) => <div className='card'>{children}</div>
  Card.Content = ({ children }) => (
    <div className='card-content'>{children}</div>
  )

  return Card
})

import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Rss from './Rss'

describe('scenes/Rss/Rss', () => {
  it('Should render a loader when the data is loading', () => {
    const props = { data: { loading: true } }
    const tree = renderer.create(<Rss {...props} />)

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
      }
    }
    const tree = renderer.create(<Rss {...props} />)

    expect(tree).toMatchSnapshot()
  })
})
