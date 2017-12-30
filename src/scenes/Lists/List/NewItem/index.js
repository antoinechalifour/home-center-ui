import { graphql } from 'react-apollo'
import { addListItem } from 'queries/lists'
import NewItem from './NewItem'

const queryOptions = {}

export default graphql(addListItem, queryOptions)(NewItem)
