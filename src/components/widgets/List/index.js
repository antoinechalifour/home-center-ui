import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import {
  getList,
  updateList,
  deleteList,
  listUpdated,
  listItemCreated,
  listItemUpdated,
  listItemDeleted
} from 'queries/lists'
import List from './List'

export class ListContainer extends Component {
  static propTypes = {
    listId: PropTypes.number.isRequired,
    data: PropTypes.shape({
      subscribeToMore: PropTypes.func.isRequired
    }).isRequired,
    updateList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.data.subscribeToMore({
      document: listUpdated,
      variables: {
        id: this.props.listId
      },
      updateQuery: this._onListUpdated
    })

    this.props.data.subscribeToMore({
      document: listItemCreated,
      variables: {
        listId: this.props.listId
      },
      updateQuery: this._onListItemCreated
    })

    this.props.data.subscribeToMore({
      document: listItemUpdated,
      variables: {
        listId: this.props.listId
      },
      updateQuery: this._onListItemUpdated
    })

    this.props.data.subscribeToMore({
      document: listItemDeleted,
      variables: {
        listId: this.props.listId
      },
      updateQuery: this._onListItemDeleted
    })
  }

  _onListUpdated (prev, { subscriptionData }) {
    if (!subscriptionData.data) {
      return
    }

    const list = prev.list
    const updates = subscriptionData.data.listUpdated

    return {
      ...prev,
      list: {
        ...list,
        ...updates
      }
    }
  }

  _onListItemCreated (prev, { subscriptionData }) {
    if (!subscriptionData.data) {
      return
    }

    const list = prev.list
    const newItem = subscriptionData.data.listItemCreated

    return {
      ...prev,
      list: {
        ...list,
        items: [...list.items, newItem]
      }
    }
  }

  _onListItemUpdated (prev, { subscriptionData }) {
    if (!subscriptionData.data) {
      return
    }

    const list = prev.list
    const updatedItem = subscriptionData.data.listItemUpdated

    return {
      ...prev,
      list: {
        ...list,
        items: list.items.map(x => (x.id === updatedItem.id ? updatedItem : x))
      }
    }
  }

  _onListItemDeleted (prev, { subscriptionData }) {
    if (!subscriptionData.data) {
      return
    }

    const list = prev.list
    const deletedItem = subscriptionData.data.listItemDeleted

    return {
      ...prev,
      list: {
        ...list,
        items: list.items.filter(x => x.id !== deletedItem.id)
      }
    }
  }

  _onUpdateName = name => {
    this.props.updateList({
      variables: {
        input: {
          id: this.props.listId,
          name
        }
      }
    })
  }

  _onDeleteList = () => {
    this.props.deleteList({
      variables: {
        input: { id: this.props.listId }
      }
    })
  }

  render () {
    return (
      <List
        {...this.props}
        updateName={this._onUpdateName}
        deleteList={this._onDeleteList}
      />
    )
  }
}

const getListOptions = {
  options: ({ listId }) => ({
    variables: { id: listId }
  })
}

const updateListOptions = {
  name: 'updateList'
}

const deleteListOptions = {
  name: 'deleteList',
  options: {
    refetchQueries: ['GetWidgets']
  }
}

export default compose(
  graphql(getList, getListOptions),
  graphql(updateList, updateListOptions),
  graphql(deleteList, deleteListOptions)
)(ListContainer)
