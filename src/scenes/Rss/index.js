import { graphql, compose } from 'react-apollo'
import { getRssFeed, deleteSource } from 'queries/rss'
import Rss from './Rss'

const deleteSourceOptions = {
  name: 'deleteSource',
  options: {
    refetchQueries: ['GetRssQuery']
  }
}

export default compose(
  graphql(getRssFeed),
  graphql(deleteSource, deleteSourceOptions)
)(Rss)
