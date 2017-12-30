import { graphql } from 'react-apollo'
import { getRssFeed } from 'queries/rss'
import Feed from './Feed'

export default graphql(getRssFeed)(Feed)
