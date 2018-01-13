import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.form`
`

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: none;
  font-size: inherit;
  font-family: inherit;
  padding: 8px 12px;
  outline: none;
  background: rgba(0, 0, 0, .15);
  color: #fff;
  transition: all .25s ease-in;
  box-shadow: 0 1Px 3px rgba(0, 0, 0, .13);

  ::placeholder {
    color: #fff;
    opacity: .54;
  }
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

    this.props.mutate({
      variables: {
        input: { name: this.state.value }
      }
    })
    this.setState({ value: '' })
  }

  render () {
    return (
      <Container onSubmit={this.onSubmit}>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          placeholder='Add a new list'
        />
      </Container>
    )
  }
}
