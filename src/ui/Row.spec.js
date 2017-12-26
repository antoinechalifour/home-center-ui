import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Row from './Row'

const tests = [
  { align: 'flex-start', justify: 'center' },
  { align: 'flex-end', justify: 'flex-start' },
  { align: 'flex-start', justify: 'space-around' }
]

describe('ui/Row', () => {
  tests.forEach(props =>
    it(`Should render`, () => {
      const tree = renderer.create(
        <Row {...props}>
          <div>Hey</div>
          <div>Oh</div>
          <div>Lets go!</div>
        </Row>
      )

      expect(tree).toMatchSnapshot()
    })
  )
})
