import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { reducer as appReducer } from './app'
import { reducer as cartReducer } from './cart'

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([])
    }
  })
}
