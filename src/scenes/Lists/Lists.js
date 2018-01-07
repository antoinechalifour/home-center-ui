import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gqlLoaderHoc from 'components/GqlLoader'
import Title from 'ui/WidgetTitle'
import List from './List'
import NewList from './NewList'

export function Lists ({ className, data }) {
  return (
    <Container>
      <Title>My lists</Title>
      {data.lists &&
        <ListsWrapper>
          {data.lists.map(x => (
            <li key={x.id}>
              <List {...x} />
            </li>
          ))}
        </ListsWrapper>}
      {data.lists && <NewList />}
    </Container>
  )
}

Lists.propTypes = {
  data: PropTypes.shape({
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    )
  }).isRequired
}

export default gqlLoaderHoc(Lists)

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ListsWrapper = styled.ul`
  margin-top: 12px;
  flex: 1;
  overflow-y: auto;

  > li + li {
    margin-top: 6px;
  }
`
