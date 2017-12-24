import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import deepMerge from 'deepmerge'
import ColorsIcon from 'react-icons/lib/md/invert-colors-on'
import Settings from './Settings'

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

const Container = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  line-height: ${({ theme }) => theme.font.lineHeight};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  > svg {
    position: fixed;
    left: 24px;
    bottom: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 24px;
  }
`

const Modal = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

class DynamicTheme extends Component {
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

  toggleModal = () =>
    this.setState({
      showSettings: !this.state.showSettings
    })

  onColorChange = (setting, color) =>
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

  onReset = () => this.setState({ theme: emptyThemeState, showSettings: false })

  onCommit = () => {
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

          <ColorsIcon onClick={this.toggleModal} />

          {this.state.showSettings &&
            <Modal>
              <Settings
                theme={theme}
                onColorChange={this.onColorChange}
                onReset={this.onReset}
                onCommit={this.onCommit}
              />
            </Modal>}
        </Container>
      </ThemeProvider>
    )
  }
}

export default DynamicTheme
