import React, { Component } from 'react'
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
  componentDidMount () {
    this.props.data.subscribeToMore({
      document: listUpdated,
      variables: {
        id: this.props.id
      },
      updateQuery: this.onListUpdated
    })

    this.props.data.subscribeToMore({
      document: listItemCreated,
      variables: {
        listId: this.props.id
      },
      updateQuery: this.onListItemCreated
    })

    this.props.data.subscribeToMore({
      document: listItemUpdated,
      variables: {
        listId: this.props.id
      },
      updateQuery: this.onListItemUpdated
    })

    this.props.data.subscribeToMore({
      document: listItemDeleted,
      variables: {
        listId: this.props.id
      },
      updateQuery: this.onListItemDeleted
    })
  }

  onListUpdated (prev, { subscriptionData }) {
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

  onListItemCreated (prev, { subscriptionData }) {
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

  onListItemUpdated (prev, { subscriptionData }) {
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

  onListItemDeleted (prev, { subscriptionData }) {
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

  render () {
    return <List {...this.props} />
  }
}

const getListOptions = {
  options: ({ id }) => ({
    variables: { id }
  })
}

const updateListOptions = {
  name: 'updateList'
}

const deleteListOptions = {
  name: 'deleteList'
}

export default compose(
  graphql(getList, getListOptions),
  graphql(updateList, updateListOptions),
  graphql(deleteList, deleteListOptions)
)(ListContainer)
