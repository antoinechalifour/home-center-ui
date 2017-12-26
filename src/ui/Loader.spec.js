import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Loader from './Loader'

describe('ui/Loader', () => {
  it('Should render', () => {
    const tree = renderer.create(<Loader />)

    expect(tree).toMatchSnapshot()
  })
})
