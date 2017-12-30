import { graphql } from 'react-apollo'
import { createList } from 'queries/lists'
import NewList from './NewList'

const queryOptions = {}

export default graphql(createList, queryOptions)(NewList)
