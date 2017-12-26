jest.mock('react-icons/lib/ti/weather-partly-sunny', () => 'clear')
jest.mock('react-icons/lib/ti/weather-cloudy', () => 'clouds')
jest.mock('react-icons/lib/ti/waves', () => 'mist')
jest.mock('react-icons/lib/ti/weather-shower', () => 'rain')

import React from 'react'
import renderer from 'react-test-renderer'
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
    props: { type: 'cool' }
  }
]

describe('scenes/Weather/Weather/Icon', () => {
  tests.forEach(({ props, expected }) =>
    it(`Should render the correct icon for weather type ${props.type}`, () => {
      const tree = renderer.create(<Icon {...props} />)
      expect(tree).toMatchSnapshot()
    })
  )
})
