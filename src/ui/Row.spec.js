import React from 'react'
import { mount } from 'enzyme'
import Row from './Row'

const tests = [
  { align: 'flex-start', justify: 'center' },
  { align: 'flex-end', justify: 'flex-start' },
  { align: 'flex-start', justify: 'space-around' }
]

describe('ui/Row', () => {
  tests.forEach(props =>
    it(`Should render`, () => {
      const wrapper = mount(
        <Row {...props}>
          <div>Hey</div>
          <div>Oh</div>
          <div>Lets go!</div>
        </Row>
      )

      expect(wrapper).toMatchSnapshot()
    })
  )
})
