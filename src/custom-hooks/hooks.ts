import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { saveTweet, tweetsList } from '../store/TweetListSlice';
import type { AppDispatch, RootState } from '../store/store';

// Use instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const TweetListSelector = () => {
//     const tweetsListData = useAppSelector(tweetsList);
//     console.log(tweetsListData);
//     return tweetsListData;
// } 