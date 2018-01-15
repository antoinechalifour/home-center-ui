import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

const tests = [
  {
    props: { type: 'clear' }
  },
  {
    props: { type: 'clouds' }
  },
  {
    props: { type: 'mist' }
  },
  {
    props: { type: 'fog' }
  },
  {
    props: { type: 'rain' }
  },
  {
    props: { type: 'snow' }
  },
  {
    props: { type: 'cool' }
  }
]

describe('scenes/Weather/Weather/Icon', () => {
  tests.forEach(({ props, expected }) =>
    it(`Should render the correct icon for weather type ${props.type}`, () => {
      const wrapper = shallow(<Icon {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  )
})
