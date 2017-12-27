import gql from 'graphql-tag'

export const getRssFeed = gql`
  query GetRssQuery {
    feed {
      title,
      link,
      date,
      source,
      sourceId
    }
  }
`

export const deleteSource = gql`
  mutation DeleteSource ($id: Int) {
    deleteSource (id: $id) { id }
  }
`
