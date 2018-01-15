import 'reset.css/reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Main from 'scenes'
import theme from 'theme/defaultTheme'

// Apollo setup
const GRAPHQL_API_URL = `${process.env.REACT_APP_API_URI}/graphql`
const GRAPHQL_SUBSCRIPTIONS_URL = process.env.REACT_APP_WS_URI
const httpLink = new HttpLink({ uri: GRAPHQL_API_URL })
const wsLink = new WebSocketLink({
  uri: GRAPHQL_SUBSCRIPTIONS_URL,
  options: {
    reconnect: true
  }
})
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const render = App => {
  ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <App name='Antoine' />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render(Main)

if (module.hot) {
  module.hot.accept('scenes', () => {
    const Next = require('scenes').default

    render(Next)
  })
}
