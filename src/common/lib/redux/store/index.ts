// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import commonReducer from '../slices/common/slice'
import articleReducer from '../slices/article/slice'

export const store = configureStore({
  reducer: {
    common: commonReducer,
    article: articleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
