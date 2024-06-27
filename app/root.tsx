import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { CssBaseline } from '@mui/material'
import { ExternalScripts } from 'remix-utils/external-scripts'
import type { LinksFunction } from '@remix-run/node'
import RootCSS from './tailwind.css?url'

import AppShell from '@/components/AppShell'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: RootCSS }]
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
        <ExternalScripts />
      </body>
    </html>
  )
}

const App = () => {
  const globalData = {}

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
