import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const client = new ApolloClient({
  ssrMode: true,
  // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: new HttpLink({
    uri: `${import.meta.env.REMIX_PUBLIC_HOST_URL}/api`,
    credentials: 'same-origin',
    useGETForQueries: true
  })
})
