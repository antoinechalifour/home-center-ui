import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { deleteSource } from 'queries/rss'
import Item from './Item'

class ItemContainer extends Component {
  static propTypes = {
    sourceId: PropTypes.number.isRequired,
    mutate: PropTypes.func.isRequired
  }

  deleteSource = () => {
    this.props.mutate({
      variables: {
        input: { id: this.props.sourceId }
      }
    })
  }

  render () {
    return <Item {...this.props} deleteSource={this.deleteSource} />
  }
}

const queryOptions = {
  options: {
    refetchQueries: ['GetRssQuery']
  }
}

export default graphql(deleteSource, queryOptions)(ItemContainer)
