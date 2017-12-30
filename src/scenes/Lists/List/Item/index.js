import { graphql, compose } from 'react-apollo'
import { updateListItem, deleteListItem } from 'queries/lists'
import Item from './Item'

const updateListItemOptions = {
  name: 'updateListItem'
}

const deleteListItemOptions = {
  name: 'deleteListItem'
}

export default compose(
  graphql(updateListItem, updateListItemOptions),
  graphql(deleteListItem, deleteListItemOptions)
)(Item)
