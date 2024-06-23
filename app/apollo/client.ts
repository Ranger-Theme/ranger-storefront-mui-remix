import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const makeClient = (request?: Request) => {
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache({
      addTypename: false
    }),
    link: new HttpLink({
      uri: `${import.meta.env.REMIX_PUBLIC_HOST_URL}/api`,
      useGETForQueries: true,
      headers: {
        ...(request?.headers ? Object.fromEntries(request?.headers) : {})
      },
      credentials: request?.credentials ?? 'same-origin'
    })
  })

  return client
}
