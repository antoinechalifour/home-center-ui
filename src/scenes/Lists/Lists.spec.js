import React from 'react'
import { shallow } from 'enzyme'
import { Lists } from './Lists'

describe('scenes/Lists', () => {
  it('Should render a loader when the data is fetching', () => {
    const props = {
      data: { loading: true }
    }
    const wrapper = shallow(<Lists {...props} />)

    expect(wrapper).toMatchSnapshot()
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
    const wrapper = shallow(<Lists {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
