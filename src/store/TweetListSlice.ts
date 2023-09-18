import {
    PayloadAction,
    // createAsyncThunk, 
    createSlice
} from '@reduxjs/toolkit';
// import { log } from 'console';
// import { removeOlderTweet } from '../controller/utilities';
import { PeopleList, TweetItem } from '../types-interfaces/types';
import {
    // AppThunk, 
    RootState
} from './store';
// import { tweetAPI } from './tweetAPI';


// export const fetchTweets = createAsyncThunk('tweet/fetchTweets', async () => {
//     const response = await userAPI.fetchUser()
//     return response.data
//   })

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
        saveTweet: (state, action: PayloadAction<TweetItem>) => {
            // action.payload.id = Date.now();
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
            let index = state.tweetsList.findIndex(x => x.id === action.payload);
            // state.tweetsList = state.tweetsList.filter((tweet) =>
            //     tweet.id !== action.payload &&
            //         tweet.isLiked === true ?
            //         tweet.isLiked = false : tweet.isLiked = true)

            if (state.tweetsList[index])
                if (state.tweetsList[index].isLiked === true) {
                    state.tweetsList[index].isLiked = false
                    if (state.tweetsList[index].likedCount > 0) {
                        state.tweetsList[index].likedCount -= 1
                    }
                } else {
                    state.tweetsList[index].isLiked = true
                    state.tweetsList[index].likedCount += 1
                }
        },
        removeOldEvents: (state: any) => {
            const currentTime = new Date().getTime();
            state.tweetsList = state.tweetsList.filter((event: any) => currentTime - event.timestamp <= 30000); // 30 seconds
        },

    },
    // API call status

    // extraReducers: builder => {
    //     builder.addCase(fetchTweets.pending, (state, action) => {
    //         state.status = 'loading'
    //     })
    //     builder.addCase(fetchTweets.fulfilled, (state, action) => {
    //         state.status = 'complete'
    //         state.name = action.payload
    //     })
    // }
});



export const { clearAllTweet,
    saveTweet,
    deleteSpecificTweet,
    likeUpdate,
    removeOldEvents,
} = tweetItemSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const tweetsList = (state: RootState) => state.twitter.tweetsList;
export const peopleList = (state: RootState) => state.twitter.people;


export default tweetItemSlice.reducer;