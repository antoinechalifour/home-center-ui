import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Welcome from '.'

const tests = [
  // année, mois[, jour[, heures[, minutes[, secondes[, millisecondes]]]]]
  {
    type: 'night',
    date: new Date(2017, 12, 28, 3)
  },
  {
    type: 'morning',
    date: new Date(2017, 12, 28, 4)
  },
  {
    type: 'morning',
    date: new Date(2017, 12, 28, 12)
  },
  {
    type: 'afternoon',
    date: new Date(2017, 12, 28, 13)
  },
  {
    type: 'afternoon',
    date: new Date(2017, 12, 28, 16)
  },
  {
    type: 'afternoon',
    date: new Date(2017, 12, 28, 17)
  },
  {
    type: 'evening',
    date: new Date(2017, 12, 28, 18)
  },
  {
    type: 'evening',
    date: new Date(2017, 12, 28, 21)
  },
  {
    type: 'evening',
    date: new Date(2017, 12, 28, 22)
  },
  {
    type: 'night',
    date: new Date(2017, 12, 28, 23)
  }
]

describe('scenes/Welcome', () => {
  tests.forEach(({ type, date }) =>
    it(`Should render "${type}" (${date})`, () => {
      const props = {
        name: 'John',
        date
      }
      const tree = renderer.create(<Welcome {...props} />)

      expect(tree).toMatchSnapshot()
    })
  )
})
