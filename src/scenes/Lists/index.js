import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getLists, listCreated } from 'queries/lists'
import Lists from './Lists'

class ListsContainer extends Component {
  componentDidMount () {
    this.props.data.subscribeToMore({
      document: listCreated,
      updateQuery: (prev, { subscriptionData }) => {
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
    })
  }

  render () {
    return <Lists {...this.props} />
  }
}

export default graphql(getLists)(ListsContainer)
