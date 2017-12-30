import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'ui/Loader'
import Title from 'ui/WidgetTitle'
import List from './List'
import NewList from './NewList'

export default function Lists ({ className, data }) {
  return (
    <div>
      <Title>My Lists</Title>
      {data.loading && <Loader />}
      {data.lists && <NewList />}
      {data.lists &&
        <ListsWrapper>
          {data.lists.map(x => (
            <li key={x.id}>
              <List {...x} />
            </li>
          ))}
        </ListsWrapper>}
    </div>
  )
}

Lists.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    )
  }).isRequired
}

const ListsWrapper = styled.ul`
  display: flex;
  padding: 12px 0;
  margin: auto;
  overflow-x: auto;

  > li {
    flex: 0 0 100%;

    + li {
      margin-left: 12px;
    }

    @media (min-width: 860px) {
      flex: 0 0 400px;
    }
  }

  > :first-child {
    margin-left: auto;
  }

  > :last-child {
    margin-right: auto;
  }

  > li + li {
    margin-left: 12px;
  }
`
