import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import twitterReducer from './TweetListSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  twitter: twitterReducer,
})

export const Store = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof Store>
