import { graphql } from 'react-apollo'
import { addListItem } from 'queries/lists'
import NewItem from './NewItem'

const queryOptions = {
  options: {
    refetchQueries: ['GetList']
  }
}

export default graphql(addListItem, queryOptions)(NewItem)
