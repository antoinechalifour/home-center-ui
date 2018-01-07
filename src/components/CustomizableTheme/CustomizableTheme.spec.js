import React from 'react'
import { shallow } from 'enzyme'
import CustomizableTheme from '.'

const baseTheme = {
  colors: {
    background: '#fff',
    backgroundInverse: 'red',
    text: 'blue',
    textInverse: 'green',
    primary: 'yellow',
    accent: 'cyan',
    light: 'orange'
  },
  font: {
    size: '18px',
    family: 'Nunito',
    lineHeight: '1.6'
  }
}

describe('CustomizableTheme', () => {
  it('Should render correctly (settings are hidden)', () => {
    const props = { baseTheme }
    const wrapper = shallow(
      <CustomizableTheme {...props}>
        <div>here are children</div>
      </CustomizableTheme>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('Should render correctly (settings are visible)', () => {
    const props = { baseTheme }
    const wrapper = shallow(
      <CustomizableTheme {...props}>
        <div>here are children</div>
      </CustomizableTheme>
    )

    wrapper.setState({ showSettings: true })

    expect(wrapper).toMatchSnapshot()
  })

  describe('_toggleSettings()', () => {
    it('Should set the correct state', () => {
      const props = { baseTheme }
      const wrapper = shallow(
        <CustomizableTheme {...props}>
          <div>here are children</div>
        </CustomizableTheme>
      )

      wrapper.instance()._toggleSettings()

      expect(wrapper.instance().state).toEqual({
        showSettings: true,
        theme: {
          colors: {},
          font: {}
        }
      })
    })
  })

  describe('_onColorChange()', () => {
    it('Should set the correct state', () => {
      const props = { baseTheme }
      const wrapper = shallow(
        <CustomizableTheme {...props}>
          <div>here are children</div>
        </CustomizableTheme>
      )

      wrapper.instance()._onColorChange('background', 'cyan')

      expect(wrapper.instance().state).toEqual({
        showSettings: false,
        theme: {
          colors: {
            background: 'cyan'
          },
          font: {}
        }
      })
    })
  })

  describe('_onReset()', () => {
    it('Should set the correct state', () => {
      const props = { baseTheme }
      const wrapper = shallow(
        <CustomizableTheme {...props}>
          <div>here are children</div>
        </CustomizableTheme>
      )

      wrapper.setState({
        showSettings: true,
        theme: {
          colors: {
            background: 'cyan'
          },
          font: {}
        }
      })
      wrapper.instance()._onReset()

      expect(wrapper.instance().state).toEqual({
        showSettings: false,
        theme: {
          colors: {},
          font: {}
        }
      })
    })
  })

  describe('_onCommit()', () => {
    beforeEach(() => {
      global.localStorage.setItem.mockReset()
    })

    it('Should store the current theme in the local storage and set the correct state', () => {
      const props = { baseTheme }
      const wrapper = shallow(
        <CustomizableTheme {...props}>
          <div>here are children</div>
        </CustomizableTheme>
      )

      wrapper.setState({
        showSettings: true,
        theme: {
          colors: {
            background: 'cyan'
          },
          font: {}
        }
      })
      wrapper.instance()._onCommit()

      expect(window.localStorage.setItem.mock.calls[0][1]).toEqual(
        '{"colors":{"background":"cyan"},"font":{}}'
      )

      expect(wrapper.instance().state).toEqual({
        showSettings: false,
        theme: {
          colors: {
            background: 'cyan'
          },
          font: {}
        }
      })
    })
  })
})
