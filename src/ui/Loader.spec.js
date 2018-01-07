import React from 'react'
import { mount } from 'enzyme'
import Loader from './Loader'

describe('ui/Loader', () => {
  it('Should render', () => {
    const wrapper = mount(<Loader />)

    expect(wrapper).toMatchSnapshot()
  })
})
