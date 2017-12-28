import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Editable extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    isEditionMode: false,
    input: ''
  }

  onKeyUp = e => {
    if (e.keyCode === 27) {
      // ESCAPE
      this.setState({
        isEditionMode: false,
        input: ''
      })
    } else if (e.keyCode === 13) {
      // ENTER
      this.props.onChange(this.state.input)
      this.setState({
        isEditionMode: false,
        input: ''
      })
    }
  }

  onChange = e => this.setState({ input: e.target.value })

  switchToEditionMode = () => {
    this.setState({
      isEditionMode: true,
      input: this.props.children
    })
  }

  render () {
    return this.state.isEditionMode
      ? <span>
        <Input
          value={this.state.input}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          />
      </span>
      : <span onClick={this.switchToEditionMode}>
        {this.props.children}
      </span>
  }
}

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid rgba(0, 0, 0, .14);
  outline: none;
  padding: 8px;
  border-radius: 4px;
`
