import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Button from './Button'

const theme = {
  colors: { primary: 'blueviolet' }
}

describe('ui/Button', () => {
  it('Should render a button', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Button>Add</Button>
      </ThemeProvider>
    )

    expect(tree).toMatchSnapshot()
  })

  it('Should render a primary button', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Button primary>Add</Button>
      </ThemeProvider>
    )

    expect(tree).toMatchSnapshot()
  })
})
