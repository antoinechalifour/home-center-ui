import { graphql } from 'react-apollo'
import { createList } from 'queries/lists'
import NewList from './NewList'

const queryOptions = {
  options: {
    refetchQueries: ['GetLists']
  }
}

export default graphql(createList, queryOptions)(NewList)
