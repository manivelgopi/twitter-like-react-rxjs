// removeOldTweetsMiddleware.js
import { Middleware } from 'redux';
import { TweetItem } from '../types-interfaces/types';
import { saveTweet } from './TweetListSlice';


export const RemoveOldTweetsMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === saveTweet.toString()) {
        const currentTimestamp: number = new Date().getTime();

        // Keep only tweets that are within the last 30 seconds
        store.getState().twitter.tweetsList = store.getState().twitter.tweetsList.filter(
            (tweet: TweetItem) =>
                currentTimestamp - tweet.timestamp <= 30000 // 30 seconds in milliseconds
        );
    }

    return next(action);
};
