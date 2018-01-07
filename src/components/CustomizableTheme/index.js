import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import deepMerge from 'deepmerge'
import ColorsIcon from 'react-icons/lib/md/invert-colors-on'
import ColorSettings from './ColorSettings'

const LOCAL_STORAGE_KEY = 'theme:colors'
const emptyThemeState = {
  colors: {},
  font: {}
}
let defaultThemeState = emptyThemeState

try {
  const themeStr = window.localStorage.getItem(LOCAL_STORAGE_KEY)

  if (themeStr) {
    defaultThemeState = JSON.parse(themeStr)
  }
} catch (err) {
  // Ignore
}

export default class CustomizableTheme extends Component {
  static propTypes = {
    baseTheme: PropTypes.shape({
      colors: PropTypes.shape({
        background: PropTypes.string.isRequired,
        backgroundInverse: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        textInverse: PropTypes.string.isRequired,
        primary: PropTypes.string.isRequired,
        accent: PropTypes.string.isRequired,
        light: PropTypes.string.isRequired
      }).isRequired,
      font: PropTypes.shape({
        size: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        lineHeight: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    theme: defaultThemeState,
    showSettings: false
  }

  _toggleSettings = () =>
    this.setState({
      showSettings: !this.state.showSettings
    })

  _onColorChange = (setting, color) =>
    this.setState(lastState => {
      return {
        theme: {
          ...lastState.theme,
          colors: {
            ...lastState.theme.colors,
            [setting]: color
          }
        }
      }
    })

  _onReset = () =>
    this.setState({ theme: emptyThemeState, showSettings: false })

  _onCommit = () => {
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(this.state.theme)
    )
    this.setState({ showSettings: false })
  }

  render () {
    const theme = deepMerge(this.props.baseTheme, this.state.theme)

    return (
      <ThemeProvider theme={theme}>
        <Container>
          {this.props.children}

          <IconContainer>
            <ColorsIcon onClick={this._toggleSettings} />
          </IconContainer>

          <Modal isVisible={this.state.showSettings}>
            <ColorSettings
              theme={theme}
              changeColor={this._onColorChange}
              reset={this._onReset}
              commit={this._onCommit}
            />
          </Modal>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  line-height: ${({ theme }) => theme.font.lineHeight};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.04rem;
`

const IconContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  color: inherit;
  font-size: 16px;
  padding: 2px 12px;
  background: rgba(255, 255, 255, .65);
  color: #373d3f;
  border-top-right-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .24);
`

const Modal = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .2s ease-in;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(100%)')};
`
