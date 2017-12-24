import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Form = styled.form`
  display: flex;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, .15);

  button {
    border: none;
    text-transform: uppercase;
    padding: 12px;
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
`

class NewItem extends Component {
  static ppropTypes = {
    listId: PropTypes.number.isRequired,
    mutate: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onSubmit = e => {
    e.preventDefault()

    this.props.mutate({
      variables: { listId: this.props.listId, text: this.state.value }
    })
    this.setState({ value: '' })
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          placeholder='What needs to be done?'
        />
        <button type='submit'>Add</button>
      </Form>
    )
  }
}

export default graphql(
  gql`
  mutation addListItem($listId: Int, $text: String) {
    addListItem(listId: $listId, text: $text) {
      id
    }
  }
`,
  {
    options: {
      refetchQueries: ['ListQuery']
    }
  }
)(NewItem)
