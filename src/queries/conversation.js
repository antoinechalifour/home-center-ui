import gql from 'graphql-tag'

export const conversation = gql`
  mutation Conversation ($input: ConversationIn!) {
    conversation(input: $input) {
      conversation { text }
    }
  }
`
