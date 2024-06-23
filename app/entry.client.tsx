import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { makeStore } from '@/store/store'
import MuiProvider from './mui/MuiProvider'
// import { makeClient } from './apollo/client'

startTransition(() => {
  // const client = makeClient()
  const store = makeStore()
  const client = new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false
    }).restore(window.__APOLLO_STATE__),
    link: new HttpLink({
      uri: `${import.meta.env.REMIX_PUBLIC_HOST_URL}/api`,
      useGETForQueries: true
    })
  })

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
