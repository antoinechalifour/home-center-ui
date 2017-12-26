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
  query GetList ($id: Int) {
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
  mutation CreateList($name: String) {
    createList(name: $name) {
      id
    }
  }
`

export const updateList = gql`
  mutation UpdateList ($id: Int, $name: String) {
    updateList(id: $id, name: $name) {
      id
    }
  }
`

export const deleteList = gql`
  mutation DeleteList($id: Int) {
    deleteList(id: $id) {
      id
    }
  }
`

export const addListItem = gql`
  mutation AddListItem($listId: Int, $text: String) {
    addListItem(listId: $listId, text: $text) {
      id
    }
  }
`

export const updateListItem = gql`
  mutation UpdateListItem ($id: Int, $text: String, $done: Boolean) {
    updateListItem(id: $id, text: $text, done: $done) {
      id
    }
  }
`

export const deleteListItem = gql`
  mutation DeleteListItem ($id: Int) {
    deleteListItem(id: $id) {
      id
    }
  }
`
