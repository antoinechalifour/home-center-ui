import { graphql, compose } from 'react-apollo'
import { getList, updateList, deleteList } from 'queries/lists'
import List from './List'

const getListOptions = {
  options: ({ id }) => ({
    variables: { id }
  })
}

const updateListOptions = {
  name: 'updateList',
  options: {
    refetchQueries: ['GetLists']
  }
}

const deleteListOptions = {
  name: 'deleteList',
  options: {
    refetchQueries: ['GetLists']
  }
}

export default compose(
  graphql(getList, getListOptions),
  graphql(updateList, updateListOptions),
  graphql(deleteList, deleteListOptions)
)(List)
