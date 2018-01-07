import React from 'react'
import { shallow } from 'enzyme'
import gqlLoaderHoc from '.'

const Component = ({ data }) => <div>Hello {data.name}</div>

describe('components/GqlLoader', () => {
  it('Should render null when data is loader', () => {
    const GqlLoader = gqlLoaderHoc(Component)
    const props = {
      data: {
        loading: true,
        name: 'John'
      }
    }

    const wrapper = shallow(<GqlLoader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render the component otherwise', () => {
    const GqlLoader = gqlLoaderHoc(Component)
    const props = {
      data: {
        loading: false,
        name: 'John'
      }
    }

    const wrapper = shallow(<GqlLoader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
