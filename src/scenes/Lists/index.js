import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getLists, listCreated, listDeleted } from 'queries/lists'
import Lists from './Lists'

export class ListsContainer extends Component {
  componentDidMount () {
    this.props.data.subscribeToMore({
      document: listCreated,
      updateQuery: this._onListCreated
    })

    this.props.data.subscribeToMore({
      document: listDeleted,
      updateQuery: this._onListDeleted
    })
  }

  _onListCreated (prev, { subscriptionData }) {
    if (!subscriptionData.data) {
      return
    }
    const lists = prev.lists
    const newList = subscriptionData.data.listCreated
    const isExistingList = lists.find(x => x.id === newList.id)

    if (isExistingList) {
      // If the list is already in the cache we ignore the event.
      return
    }

    // Otherwise we add it to the store
    return {
      ...prev,
      lists: [...lists, newList]
    }
  }

  _onListDeleted (prev, { subscriptionData }) {
    if (!subscriptionData.data) {
      return
    }
    const lists = prev.lists
    const deletedList = subscriptionData.data.listDeleted

    return {
      ...prev,
      lists: lists.filter(x => x.id !== deletedList.id)
    }
  }

  render () {
    return <Lists {...this.props} />
  }
}

export default graphql(getLists)(ListsContainer)
