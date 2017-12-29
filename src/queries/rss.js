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
  mutation AddRssSource ($input: AddRssSourceInput!) {
    addRssSource(input: $input) {
      source { id }
    }
  }
`

export const deleteSource = gql`
  mutation DeleteRssSource ($input: DeleteRssSourceInput!) {
    deleteRssSource (input: $input) {
      source { id }
    }
  }
`
