import { configureStore } from '@reduxjs/toolkit';
import { RemoveOldTweetsMiddleware } from './RemoveOldTweetsMiddleware';
import twitterReducer from './TweetListSlice';

export const store = configureStore({
  reducer: {
    twitter: twitterReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(RemoveOldTweetsMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
