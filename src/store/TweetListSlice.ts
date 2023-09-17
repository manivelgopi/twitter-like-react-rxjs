import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PeopleList, TweetItem } from '../types-interfaces/types';

import {
    // AppThunk, 
    RootState
} from './store';

const initialState: {
    tweetsList: TweetItem[],
    people: PeopleList[]
} = {
    tweetsList: [],
    people: []
};

export const tweetItemSlice = createSlice({
    name: 'tweetList',
    initialState: initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addTweet: (state, action: PayloadAction<TweetItem>) => {
            action.payload.id = state.tweetsList.length + 1;
            action.payload.likedCount = action.payload.likedCount | 0;
            action.payload.isLiked = action.payload.isLiked || false;
            state.tweetsList.push(action.payload)
        },
        clearAllTweet: (state) => { state.tweetsList = [] },
        deleteSpecificTweet: (state, action: PayloadAction<TweetItem>) => {
            state.tweetsList = state.tweetsList.filter((tweet) =>
                tweet.id !== action.payload.id)
        },
        likeUpdate: (state, action: PayloadAction<number>) => {
            if (state.tweetsList[action.payload - 1].isLiked === true) {
                state.tweetsList[action.payload - 1].isLiked = false
                if (state.tweetsList[action.payload - 1].likedCount > 0) {
                    state.tweetsList[action.payload - 1].likedCount -= 1
                }
            } else {
                state.tweetsList[action.payload - 1].isLiked = true
                state.tweetsList[action.payload - 1].likedCount += 1
            }
            // state.tweetsList = state.tweetsList.filter((tweet) =>
            //     tweet.id !== action.payload - 1 && tweet.isLiked === true ?
            //         tweet.isLiked = false : tweet.isLiked = true)
        },



    },
    // // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // // including actions generated by createAsyncThunk or in other slices.
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(incrementAsync.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(incrementAsync.fulfilled, (state, action) => {
    //             state.status = 'idle';
    //             state.value += action.payload;
    //         })
    //         .addCase(incrementAsync.rejected, (state) => {
    //             state.status = 'failed';
    //         });
    // },
});

export const { clearAllTweet, addTweet, deleteSpecificTweet, likeUpdate } = tweetItemSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const tweetsList = (state: RootState) => state.twitter.tweetsList;
export const peopleList = (state: RootState) => state.twitter.people;


export default tweetItemSlice.reducer;