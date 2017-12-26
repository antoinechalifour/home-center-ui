import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Col from './Col'

const tests = [
  { align: 'flex-start', justify: 'center' },
  { align: 'flex-end', justify: 'flex-start' },
  { align: 'flex-start', justify: 'space-around' }
]

describe('ui/Col', () => {
  tests.forEach(props =>
    it(`Should render`, () => {
      const tree = renderer.create(
        <Col {...props}>
          <div flex>Hey</div>
          <div>Oh</div>
          <div flex={2}>Lets go!</div>
        </Col>
      )

      expect(tree).toMatchSnapshot()
    })
  )
})
