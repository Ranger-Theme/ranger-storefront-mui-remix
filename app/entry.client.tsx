import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import MuiProvider from './mui/MuiProvider'

const client = new ApolloClient({
  // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  cache: new InMemoryCache(),
  uri: 'http://82.157.172.168/graphql'
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
