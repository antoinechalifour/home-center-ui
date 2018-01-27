import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { addListItem } from 'queries/lists'
import NewItem from './NewItem'

class NewItemContainer extends Component {
  static propTypes = {
    listId: PropTypes.number.isRequired,
    mutate: PropTypes.func.isRequired
  }

  _onAddItem = text => {
    this.props.mutate({
      variables: {
        input: {
          listId: this.props.listId,
          text
        }
      }
    })
  }

  render () {
    return <NewItem {...this.props} addItem={this._onAddItem} />
  }
}

export default graphql(addListItem)(NewItemContainer)
