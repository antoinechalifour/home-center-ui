import gql from 'graphql-tag'

export const getRssFeed = gql`
  query GetRssQuery {
    feed {
      title,
      link,
      date,
      source
    }
  }
`
