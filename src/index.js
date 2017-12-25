import 'reset.css/reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import DynamicTheme from 'components/DynamicTheme'
import Main from 'scenes/Main'
import theme from 'theme/defaultTheme'
import registerServiceWorker from 'registerServiceWorker'

// Apollo setup
const GRAPHQL_API_URL = `${process.env.REACT_APP_API_URI}/graphql`
const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_API_URL }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <DynamicTheme baseTheme={theme}>
      <Main />
    </DynamicTheme>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
