jest.mock('react-icons/lib/md/lightbulb-outline', () => 'Icon')

import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import StatusIcon from './'

const theme = {
  colors: { accent: 'red', text: 'black' }
}

describe('ui/HomeControl/Lights/StatusIcon', () => {
  it('Should render correctly (off)', () => {
    const props = {
      isOn: false,
      onClick: jest.fn()
    }
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <StatusIcon {...props} />
      </ThemeProvider>
    )

    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly (on)', () => {
    const props = {
      isOn: true,
      onClick: jest.fn()
    }
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <StatusIcon {...props} />
      </ThemeProvider>
    )

    expect(tree).toMatchSnapshot()
  })

  it('Should handle click events', () => {})
})
