import gql from 'graphql-tag'

export const getLists = gql`
  query GetLists {
    lists {
      id,
      name
    }
  }
`

export const getList = gql`
  query GetList ($id: Int!) {
    list (id: $id) {
      items {
        id,
        text,
        done
      }
    }
  }
`

export const createList = gql`
  mutation CreateList($input: CreateListInput!) {
    createList (input: $input) {
      list { id }
    }
  }
`

export const updateList = gql`
  mutation UpdateList ($input: UpdateListInput!) {
    updateList (input: $input) {
      list { id }
    }
  }
`

export const deleteList = gql`
  mutation DeleteList ($input: DeleteListInput!) {
    deleteList (input: $input) {
      list { id }
    }
  }
`

export const addListItem = gql`
  mutation AddListItem ($input: AddListItemInput!) {
    addListItem (input: $input) {
      list { id },
      item { id, text, done }
    }
  }
`

export const updateListItem = gql`
  mutation UpdateListItem ($input: UpdateListItemInput!) {
    updateListItem (input: $input) {
      item { id }
    }
  }
`

export const deleteListItem = gql`
  mutation DeleteListItem ($input: DeleteListItemInput!) {
    deleteListItem (input: $input) {
      item { id }
    }
  }
`
