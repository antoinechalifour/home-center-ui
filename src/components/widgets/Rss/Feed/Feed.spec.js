import React from 'react'
import { shallow } from 'enzyme'
import Feed from './Feed'

describe('scenes/Rss/Feed', () => {
  it('Should render a loader when the data is loading', () => {
    const props = {
      data: { loading: true },
      deleteSource: jest.fn()
    }
    const wrapper = shallow(<Feed {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render an empty message when the feed is empty', () => {
    const props = {
      data: {
        loading: false,
        feed: []
      },
      deleteSource: jest.fn()
    }
    const wrapper = shallow(<Feed {...props} />)

    expect(wrapper).toMatchSnapshot()
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
            sourceId: 1,
            title: 'Fizz! Buzz!'
          },
          {
            date: 'Tue, 26 Dec 2017 09:42:38 +0100',
            link: 'http://foo.bar',
            source: 'FooBar Magazine',
            sourceId: 2,
            title: 'Foo! Bar!'
          }
        ]
      },
      deleteSource: jest.fn()
    }
    const wrapper = shallow(<Feed {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
