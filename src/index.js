import 'reset.css/reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import Home from './Home'

// Global style setup
injectGlobal`
  body {
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.6;
    background: #f7f7f9;
    color: #373d3f;
  }
`

// Apollo setup
const GRAPHQL_API_URL = `${process.env.REACT_APP_API_URI}/graphql`
const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_API_URL }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Home name='World' />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
