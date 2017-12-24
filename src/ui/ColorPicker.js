import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  position: relative;
  
  label {
    height: 20px;
    width: 20px;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #373d3f;
    position: relative;
  }

  input {
    // display: none crashes chrome ??? So here it a workaround;
    position: absolute;
    z-index: -100;
  }
`

export default class ColorPicker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      value: props.value || ''
    }

    this.name = Math.random()
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    const value = e.target.value
    this.setState({ value })
    this.props.onChange(value)
  }

  render () {
    return (
      <Wrapper>
        <label htmlFor={this.name} style={{ background: this.state.value }} />
        <input
          type='color'
          id={this.name}
          value={this.state.value}
          onChange={this.onChange}
        />
      </Wrapper>
    )
  }
}
