import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

import { makeStore } from '@/store/store'
import MuiProvider from './mui/MuiProvider'
import { client } from './apollo/client'

startTransition(() => {
  const store = makeStore()

  hydrateRoot(
    document,
    <StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MuiProvider>
            <RemixBrowser />
          </MuiProvider>
        </Provider>
      </ApolloProvider>
    </StrictMode>
  )
})
