import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
// React.lazy is the recommended solution for Code Splitting. It uses Suspense and it is maintained by React.
// If you are already using React.lazy and if you are good with it, you don't need @loadable/component.
// If you feel limited or if you need SSR, then @loadable/component is the solution.
import loadable from '@loadable/component'
import type { LoaderFunctionArgs } from '@remix-run/node'

import { GET_ROUTE } from '@/graphql/queries/getRoute'
import { makeClient } from '../apollo/client'

import CategoryPage from '@/page/CategoryPage'
// const CategoryPage = loadable(() => import('@/page/CategoryPage'))
const ProductPage = loadable(() => import('@/page/ProductPage'))
const CmsPage = loadable(() => import('@/page/CmsPage'))

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const newUrl = new URL(request.url)
  const client = makeClient()
  const { data } = await client.query({
    query: GET_ROUTE,
    variables: { url: newUrl.pathname }
  })
  const route: any = data?.route ?? {}
  return json(route)
}

const URLKey = () => {
  const data = useLoaderData<typeof loader>()
  console.info(data)

  return (
    <div>
      <p>URLKey</p>
      {data?.type === 'CATEGORY' && <CategoryPage data={data} />}
      {data?.type === 'PRODUCT' && <ProductPage data={data} />}
      {data?.type === 'CMS_PAGE' && <CmsPage data={data} />}
    </div>
  )
}

export default URLKey
