import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Empty from 'ui/Empty'
import Item from './Item'

export default function Feed ({ data }) {
  if (data.loading) {
    return <Empty>Fetching your feed...</Empty>
  } else if (!data.loading && data.feed.length === 0) {
    return (
      <Empty>
        Your feed is empty. Use the "Source" tab to start adding items :)
      </Empty>
    )
  }

  return (
    <Items>
      {data.feed.map(item => (
        <li key={item.title}>
          <Item {...item} />
        </li>
      ))}
    </Items>
  )
}

Feed.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    feed: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        sourceId: PropTypes.number.isRequired,
        source: PropTypes.string.isRequired,
        content: PropTypes.string
      })
    )
  }).isRequired
}

const Items = styled.ul`
  > li + li {
    border-top: 1px solid rgba(255, 255, 255, .15);
  }
`
