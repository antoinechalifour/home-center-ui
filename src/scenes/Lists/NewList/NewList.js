import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from 'ui/Card'

const Container = styled(Card)`

margin-top: 4px;
`.withComponent('form')

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: none;
  font-size: inherit;
  font-family: inherit;
  padding: 8px 12px;
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
      <Container onSubmit={this.onSubmit}>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          placeholder='New list?'
        />
      </Container>
    )
  }
}
