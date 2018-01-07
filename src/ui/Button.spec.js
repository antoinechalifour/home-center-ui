import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

const theme = {
  colors: { primary: 'blueviolet' }
}

describe('ui/Button', () => {
  it('Should render a button', () => {
    const wrapper = shallow(<Button theme={theme}>Add</Button>)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render a primary button', () => {
    const wrapper = shallow(<Button primary theme={theme}>Add</Button>)

    expect(wrapper).toMatchSnapshot()
  })
})
