import gql from 'graphql-tag'

export const getHistory = gql`
  query History {
    events {
      id,
      type,
      date,
      payload
    }
  }
`
