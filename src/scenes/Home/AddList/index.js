import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { createList } from 'queries/lists'
import AddList from './AddList'

class AddListContainer extends Component {
  state = { input: '' }

  _onChange = e => this.setState({ input: e.target.value })

  _onSubmit = e => {
    e.preventDefault()

    this.props.createList({
      variables: {
        input: { name: this.state.input }
      }
    })

    this.props.history.goBack()
  }

  _onCancel = () => this.props.history.goBack()

  render () {
    return (
      <AddList
        {...this.props}
        value={this.state.input}
        onChange={this._onChange}
        onCancel={this._onCancel}
        onSubmit={this._onSubmit}
      />
    )
  }
}

const createListOptions = {
  name: 'createList'
}

export default graphql(createList, createListOptions)(AddListContainer)
