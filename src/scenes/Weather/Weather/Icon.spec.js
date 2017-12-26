import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Icon from './Icon'

const renderer = new ShallowRenderer()
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
      const tree = renderer.render(<Icon {...props} />)
      expect(tree).toMatchSnapshot()
    })
  )
})
