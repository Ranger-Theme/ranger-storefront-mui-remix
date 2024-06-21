import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import MuiProvider from './mui/MuiProvider'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <MuiProvider>
        <RemixBrowser />
      </MuiProvider>
    </StrictMode>
  )
})
