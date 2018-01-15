import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from 'react-icons/lib/md/delete'
import Empty from 'ui/Empty'

export default function Sources ({ data, deleteSource }) {
  if (data.loading) {
    return <Empty>Loading your sources...</Empty>
  } else if (!data.loading && data.sources.length === 0) {
    return <Empty>No source registered yet!</Empty>
  }

  return (
    <List>
      {data.sources.map(({ id, url }) => (
        <Source key={id}>
          <span>{url}</span>
          <DeleteIcon onClick={() => deleteSource(id)} />
        </Source>
      ))}
    </List>
  )
}

Sources.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  deleteSource: PropTypes.func.isRequired
}

const List = styled.ul`
  li + li {
    border-top: 1px solid rgba(0, 0, 0, .15);
  }
`

const Source = styled.li`
  display: flex;
  padding: 12px;

  span:first-child {
    flex: 1;
    word-break: break-all;
  }

  svg {
    cursor: pointer;
    font-size: 24px;
    opacity: .54;
  }
`
