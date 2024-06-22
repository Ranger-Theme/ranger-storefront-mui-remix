import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { CssBaseline } from '@mui/material'
import type { LinksFunction } from '@remix-run/node'
import RootCSS from './tailwind.css?url'

import AppShell from '@/components/AppShell'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: RootCSS }]
}

export const loader = async () => {
  return json([
    { id: '1', name: 'Pants' },
    { id: '2', name: 'Jacket' }
  ])
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
  const products = useLoaderData<typeof loader>()
  console.info('products:', products)

  return (
    <div id="__remix">
      <CssBaseline />
      <AppShell>
        <Outlet />
      </AppShell>
    </div>
  )
}

export default App
