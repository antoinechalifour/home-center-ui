import { graphql } from 'react-apollo'
import { getRssFeed } from 'queries/rss'
import Rss from './Rss'

export default graphql(getRssFeed)(Rss)
