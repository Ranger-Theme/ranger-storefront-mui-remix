import { json } from '@remix-run/node'
import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node'

export async function loader({ request }: LoaderFunctionArgs) {
  const newUrl = new URL(request.url)

  const query = newUrl.searchParams.get('query')
  const variables = newUrl.searchParams.get('variables')
  const operationName = newUrl.searchParams.get('operationName')
  const api = newUrl.origin.replace(
    import.meta.env.REMIX_PUBLIC_HOST_URL,
    import.meta.env.REMIX_PUBLIC_API_URL
  )

  const res = await fetch(`${api}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      ...(variables && { variables: JSON.parse(variables) }),
      operationName
    })
  })
  const result = await res.json()
  return json(result)
}

export async function action({ request }: ActionFunctionArgs) {
  const newUrl = new URL(request.url)

  const { query, variables, operationName } = await request.json()
  const api = newUrl.origin.replace(
    import.meta.env.REMIX_PUBLIC_HOST_URL,
    import.meta.env.REMIX_PUBLIC_API_URL
  )

  const res = await fetch(`${api}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables,
      operationName
    })
  })
  const result = await res.json()
  return json(result)
}
