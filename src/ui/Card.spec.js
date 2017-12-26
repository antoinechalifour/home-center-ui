import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Card, * as card from './Card'

const theme = {
  colors: {
    backgroundInverse: '#f7f7f9',
    textInverse: '#373d3f'
  }
}

describe('ui/Card', () => {
  it('Should render a card', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Card>
          <card.Content>Hello world</card.Content>
        </Card>
      </ThemeProvider>
    )

    expect(tree).toMatchSnapshot()
  })
})
