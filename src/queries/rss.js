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

export const addSource = gql`
  mutation AddSource ($url: String!) {
    addSource(url: $url) { id }
  }
`

export const deleteSource = gql`
  mutation DeleteSource ($id: Int!) {
    deleteSource (id: $id) { id }
  }
`
