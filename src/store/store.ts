import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import twitterReducer from './TweetListSlice';

export const store = configureStore({
  reducer: {
    twitter: twitterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
