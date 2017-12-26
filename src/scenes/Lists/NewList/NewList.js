import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 16px auto;
  background: rgba(0, 0, 0, .8);
  border: none;
  font-size: inherit;
  font-family: inherit;
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;
  outline: none;
`

export default class NewList extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onSubmit = e => {
    e.preventDefault()

    this.props.mutate({ variables: { name: this.state.value } })
    this.setState({ value: '' })
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          placeholder='New list?'
        />
      </form>
    )
  }
}
