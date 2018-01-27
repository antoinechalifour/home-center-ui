import { graphql } from 'react-apollo'
import { conversation } from 'queries/conversation'
import Conversation from './Conversation'

const conversationOptions = {
  name: 'conversation'
}

export default graphql(conversation, conversationOptions)(Conversation)
