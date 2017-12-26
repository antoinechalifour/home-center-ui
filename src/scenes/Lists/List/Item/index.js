import { graphql, compose } from 'react-apollo'
import { updateListItem, deleteListItem } from 'queries/lists'
import Item from './Item'

const updateListItemOptions = {
  name: 'updateListItem',
  options: {
    refetchQueries: ['GetList']
  }
}

const deleteListItemOptions = {
  name: 'deleteListItem',
  options: {
    refetchQueries: ['GetList']
  }
}

export default compose(
  graphql(updateListItem, updateListItemOptions),
  graphql(deleteListItem, deleteListItemOptions)
)(Item)
