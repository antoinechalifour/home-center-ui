import gql from 'graphql-tag'

export const getLists = gql`
  query GetLists {
    lists {
      id,
      name,
      items {
        id,
        text,
        done
      }
    }
  }
`

export const getList = gql`
  query GetList ($id: Int!) {
    list (id: $id) {
      name,
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

export const listCreated = gql`
  subscription ListCreated {
    listCreated {
      id,
      name,
      items {
        id,
        text,
        done
      }
    }
  }
`

export const listDeleted = gql`
  subscription ListDeleted {
    listDeleted { id }
  }
`

export const listUpdated = gql`
  subscription ListUpdated ($id: Int!) {
    listUpdated (id: $id) {
      name
    }
  }
`

export const listItemCreated = gql`
  subscription ListItemCreated ($listId: Int!) {
    listItemCreated (listId: $listId) {
      id,
      text,
      done
    }
  }
`

export const listItemUpdated = gql`
  subscription ListItemUpdated ($listId: Int!) {
    listItemUpdated (listId: $listId) {
      id,
      text,
      done
    }
  }
`

export const listItemDeleted = gql`
  subscription ListItemDeleted ($listId: Int!) {
    listItemDeleted (listId: $listId) {
      id
    }
  }
`
