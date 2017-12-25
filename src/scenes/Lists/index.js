import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from 'ui/Loader'
import List from './List'
import NewList from './NewList'

const FetchLists = ({ data }) => {
  return (
    <div>
      {data.loading && <Loader />}
      {data.lists && data.lists.map(x => <List key={x.id} {...x} />)}
      <NewList />
    </div>
  )
}

FetchLists.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired
}

export default graphql(
  gql`
  query ListsQuery {
    lists {
      id,
      name
    }
  }
`
)(FetchLists)
