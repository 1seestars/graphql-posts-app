import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { cache } from './cache'
import './index.css'

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
})

// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
