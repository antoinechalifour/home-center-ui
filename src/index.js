import 'reset.css/reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import Home from './Home'
import theme from './ui/theme'

// Global style setup
injectGlobal`
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.size};
    line-height: ${theme.font.lineHeight};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home name='World' />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
