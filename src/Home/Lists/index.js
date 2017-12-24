import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Section, * as section from 'Home/Section'
import List from './List'
import NewList from './NewList'

const Content = styled(section.Content)`
  padding: 12px;
`

const FetchLists = ({ data }) => {
  return (
    <Section>
      <section.Title>
        My lists
      </section.Title>
      <Content>
        {data.loading && <section.Loader />}
        {data.lists && data.lists.map(x => <List key={x.id} {...x} />)}
        <NewList />
      </Content>
    </Section>
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
