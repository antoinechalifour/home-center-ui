import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { addSource, getRssSources, deleteSource } from 'queries/rss'
import AddRssSource from './AddRssSource'

class AddRssSourceContainer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired
        })
      )
    }).isRequired
  }

  state = { input: '' }

  _onChange = e => this.setState({ input: e.target.value })

  _onSubmit = e => {
    e.preventDefault()

    this.props.addSource({
      variables: {
        input: { url: this.state.input }
      }
    })

    this.setState({ input: '' })
  }

  _onCancel = () => this.props.history.goBack()

  _onDeleteSource = id => {
    this.props.deleteSource({
      variables: {
        input: { id }
      }
    })
  }

  render () {
    return (
      <AddRssSource
        {...this.props}
        value={this.state.input}
        sources={this.props.data.sources || []}
        onChange={this._onChange}
        onCancel={this._onCancel}
        onSubmit={this._onSubmit}
        onDelete={this._onDeleteSource}
      />
    )
  }
}

const addSourceOptions = {
  name: 'addSource',
  options: {
    refetchQueries: ['GetRssSources']
  }
}

const deleteSourceOptions = {
  name: 'deleteSource',
  options: {
    refetchQueries: ['GetRssSources']
  }
}

export default compose(
  graphql(addSource, addSourceOptions),
  graphql(deleteSource, deleteSourceOptions),
  graphql(getRssSources)
)(AddRssSourceContainer)
