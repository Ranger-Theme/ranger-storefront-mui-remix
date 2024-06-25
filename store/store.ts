import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { reducer as appReducer } from './app'
import { reducer as cartReducer } from './cart'

declare global {
  interface Window {
    __PRELOADED_STATE__: any
  }
}

export const initializeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: combineReducers({
      app: appReducer,
      cart: cartReducer
    }),
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([])
    }
  })
}

export const makeStore = () => {
  if (typeof window === 'undefined') {
    return initializeStore()
  }

  return initializeStore(window.__PRELOADED_STATE__)
}
