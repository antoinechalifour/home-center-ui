import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { addSource } from 'queries/rss'
import NewSource from './NewSource'

class NewSourceContainer extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  addSource = url => {
    this.props.mutate({
      variables: {
        input: { url }
      }
    })
  }

  render () {
    return <NewSource {...this.props} addSource={this.addSource} />
  }
}

const addSourceOptions = {
  options: {
    refetchQueries: ['GetRssQuery', 'GetRssSources']
  }
}

export default graphql(addSource, addSourceOptions)(NewSourceContainer)
