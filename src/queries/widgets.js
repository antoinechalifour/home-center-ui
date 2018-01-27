import gql from 'graphql-tag'

export const getWidgets = gql`
  query GetWidgets {
    widgets {
      type,
      ... on WidgetList {
        listId
      }
    }
  }
`
