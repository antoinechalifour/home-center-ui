import { graphql, compose } from 'react-apollo'
import { getList, deleteList } from 'queries/lists'
import List from './List'

const getListOptions = {
  options: ({ id }) => ({
    variables: { id }
  })
}

const deleteListOptions = {
  options: {
    refetchQueries: ['GetLists']
  }
}

export default compose(
  graphql(getList, getListOptions),
  graphql(deleteList, deleteListOptions)
)(List)
