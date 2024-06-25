import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { CssBaseline } from '@mui/material'
import { useDispatch } from 'react-redux'
import type { LinksFunction } from '@remix-run/node'
import RootCSS from './tailwind.css?url'

import { makeClient } from './apollo/client'
import { GET_STORE_CONFIG } from '@/graphql/queries/getStoreConfig'
import { actions as appActions } from '@/store/app'
import AppShell from '@/components/AppShell'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: RootCSS }]
}

export const loader = async () => {
  // const client = makeClient()
  // const { data } = await client.query({
  //   query: GET_STORE_CONFIG
  // })
  // return json(data)
  return {}
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const App = () => {
  // const dispatch = useDispatch()
  // const globalData = useLoaderData<typeof loader>()
  const globalData = {}

  // dispatch(appActions.setAppConfig(globalData))

  return (
    <div id="__remix">
      <CssBaseline />
      <AppShell>
        <Outlet context={globalData} />
      </AppShell>
    </div>
  )
}

export default App
