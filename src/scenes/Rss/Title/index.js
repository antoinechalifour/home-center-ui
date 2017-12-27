import { graphql } from 'react-apollo'
import { addSource } from 'queries/rss'
import Title from './Title'

const addSourceOptions = {
  name: 'addSource',
  options: {
    refetchQueries: ['GetRssQuery']
  }
}

export default graphql(addSource, addSourceOptions)(Title)
