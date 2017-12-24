import 'reset.css/reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import DynamicTheme from 'components/DynamicTheme'
import Home from './Home'
import theme from './ui/theme'

// Apollo setup
const GRAPHQL_API_URL = `${process.env.REACT_APP_API_URI}/graphql`
const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_API_URL }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <DynamicTheme baseTheme={theme}>
      <BrowserRouter>
        <Home name='World' />
      </BrowserRouter>
    </DynamicTheme>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
