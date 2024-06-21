import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { CssBaseline } from '@mui/material'
import type { LinksFunction } from '@remix-run/node'
import RootCSS from './tailwind.css?url'

import AppShell from '@/components/AppShell'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: RootCSS }]
}

export function Layout({ children }: { children: React.ReactNode }) {
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

export default function App() {
  return (
    <div id="__remix">
      <CssBaseline />
      <AppShell>
        <Outlet />
      </AppShell>
    </div>
  )
}
