import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { updateListItem, deleteListItem } from 'queries/lists'
import Item from './Item'

class ItemContainer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateListItem: PropTypes.func.isRequired,
    deleteListItem: PropTypes.func.isRequired
  }

  _onToggleStatus = () => {
    this.props.updateListItem({
      variables: {
        input: {
          id: this.props.id,
          text: this.props.text,
          done: !this.props.done
        }
      }
    })
  }

  _onUpdateText = value => {
    this.props.updateListItem({
      variables: {
        input: {
          id: this.props.id,
          text: value,
          done: this.props.done
        }
      }
    })
  }

  _onDelete = () => {
    this.props.deleteListItem({
      variables: {
        input: { id: this.props.id }
      }
    })
  }

  render () {
    return (
      <Item
        {...this.props}
        updateText={this._onUpdateText}
        toggleStatus={this._onToggleStatus}
        deleteItem={this._onDelete}
      />
    )
  }
}

const updateListItemOptions = {
  name: 'updateListItem'
}

const deleteListItemOptions = {
  name: 'deleteListItem'
}

export default compose(
  graphql(updateListItem, updateListItemOptions),
  graphql(deleteListItem, deleteListItemOptions)
)(ItemContainer)
