import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import type { HttpOptions } from '@apollo/client'

export const makeClient = (options?: HttpOptions) => {
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache({
      addTypename: false
    }),
    link: new HttpLink({
      uri: `${import.meta.env.REMIX_PUBLIC_HOST_URL}/api`,
      useGETForQueries: true,
      credentials: 'same-origin',
      ...options
    })
  })

  return client
}
