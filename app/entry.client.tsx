import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'

import MuiProvider from './mui/MuiProvider'

const client = new ApolloClient({
  // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: 'http://127.0.0.1:3000/api'
    // useGETForQueries: true
  })
})

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ApolloProvider client={client}>
        <MuiProvider>
          <RemixBrowser />
        </MuiProvider>
      </ApolloProvider>
    </StrictMode>
  )
})
