import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import createCache from '@emotion/cache'

import { theme } from './theme'

const createEmotionCache = () => {
  return createCache({ key: 'mui' })
}

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  const cache = createEmotionCache()

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}

export default MuiProvider
