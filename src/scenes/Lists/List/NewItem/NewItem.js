import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class NewItem extends Component {
  static ppropTypes = {
    addItem: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onSubmit = e => {
    e.preventDefault()

    this.props.addItem(this.state.value)
    this.setState({ value: '' })
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          placeholder='Add something interesting...'
        />
        <button type='submit'>Add</button>
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  background: rgba(0, 0, 0, .15);

  button {
    border: none;
    text-transform: uppercase;
    padding: 12px;
    background: transparent;
    color: #fff;
  }
`

const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  flex: 1;
  font-size: inherit;
  font-family: inherit;
  border: none;
  background: none;
  padding: 12px 16px;
  color: inherit;

  :placeholder {
    color: #fff;
  }
`
