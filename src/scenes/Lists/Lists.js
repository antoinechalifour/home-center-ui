import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'ui/Loader'
import List from './List'
import NewList from './NewList'

export default function Lists ({ data }) {
  return (
    <div>
      {data.loading && <Loader />}
      {data.lists && data.lists.map(x => <List key={x.id} {...x} />)}
      <NewList />
    </div>
  )
}

Lists.propTypes = {
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
