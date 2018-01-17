import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gqlLoaderHoc from 'components/GqlLoader'
import List from './List'

export function Lists ({ className, data }) {
  return (
    <Container>
      {data.lists &&
        <ListsWrapper>
          {data.lists.map(x => (
            <li key={x.id}>
              <List {...x} />
            </li>
          ))}
        </ListsWrapper>}
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
  overflow-y: auto;
`

const ListsWrapper = styled.ul`
`
