import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { getRssSources, deleteSource } from 'queries/rss'
import Sources from './Sources'

class SourcesContainer extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  deleteSource = id => {
    this.props.mutate({
      variables: {
        input: { id }
      }
    })
  }

  render () {
    return <Sources {...this.props} deleteSource={this.deleteSource} />
  }
}

const deleteSourceOptions = {
  options: {
    refetchQueries: ['GetRssQuery', 'GetRssSources']
  }
}

export default compose(
  graphql(getRssSources),
  graphql(deleteSource, deleteSourceOptions)
)(SourcesContainer)
