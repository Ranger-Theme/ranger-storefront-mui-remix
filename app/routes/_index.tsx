import { Link, useOutletContext } from '@remix-run/react'
import { useQuery } from '@apollo/client'
import { Button } from '@mui/material'
import type { MetaFunction } from '@remix-run/node'

import { GET_CMS_PAGE } from '@/graphql/queries/getCmsPage'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  const context: any = useOutletContext()
  const identifier: string = context?.storeConfig?.cms_home_page ?? ''
  const { data } = useQuery(GET_CMS_PAGE, { variables: { identifier } })
  console.info(data)

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <Button variant="contained">
        <span>Remix</span>
      </Button>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
