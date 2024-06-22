import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import MuiProvider from './mui/MuiProvider'
import { client } from './apollo/client'

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
