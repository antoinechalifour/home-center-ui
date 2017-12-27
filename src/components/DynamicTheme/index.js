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
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
`

const IconContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  color: inherit;
  font-size: 16px;
  padding: 2px 12px;
  background: rgba(255, 255, 255, .65);
  color: #373d3f;
  border-top-left-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .24);
`

const Modal = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .2s ease-in;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(100%)')};
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

          <IconContainer>
            <ColorsIcon onClick={this.toggleModal} />
          </IconContainer>

          <Modal isVisible={this.state.showSettings}>
            <Settings
              theme={theme}
              onColorChange={this.onColorChange}
              onReset={this.onReset}
              onCommit={this.onCommit}
            />
          </Modal>
        </Container>
      </ThemeProvider>
    )
  }
}

export default DynamicTheme
