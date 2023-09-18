import { faCheck, faEllipsis, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tweets } from '../../DataSource';
import { dateTimeDifferenc } from '../../controller/utilities';
import TextButton from '../button/TextButton';
// import { TweetListSelector } from '../../store/TweetListSelector';
import {
    // TweetListSelector, 
    useAppDispatch, useAppSelector
} from '../../custom-hooks/hooks';
import { clearAllTweet, removeOldEvents, saveTweet } from '../../store/TweetListSlice';
import { TweetItem } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';
import TweetListIcons from '../tweet-list-icons/TweetListIcons';

export default function TweetListContainerStore() {
    const dispatch = useAppDispatch();
    const tweetsListUpdated = useAppSelector((state) => state.twitter.tweetsList);

    const [displayedTweet, setDisplayTweet] = useState<TweetItem[]>([]);
    const [newTweetCount, setNewTweetCount] = useState<number>(0);
    const [isLikedTweet, setIsLikedTweet] = useState<TweetItem[]>([]);


    const refreshTweetList = () => {
        dispatch(removeOldEvents())
        setDisplayTweet(tweetsListUpdated);
        setNewTweetCount(0);
    };

    const allLikedTweets = () => {
        setDisplayTweet(isLikedTweet)
    };

    const clearAll = () => {
        dispatch(clearAllTweet())
        setDisplayTweet([]);
        setNewTweetCount(0);
        setIsLikedTweet([]);
    };



    // loading Datasource
    const getDatasource = useCallback(() => {
        try {
            tweets.subscribe((tweet) => {
                dispatch(saveTweet(
                    {
                        account: tweet.account,
                        timestamp: tweet.timestamp,
                        content: tweet.content,
                        likedCount: 0,
                        isLiked: false,
                        id: Date.now()
                    }
                ))
            });
        } catch (error) {
            throw new Error("Something went wrong!");
        }
    }, [dispatch]);

    useEffect(() => {
        getDatasource();
    }, []);

    useEffect(() => {
        setIsLikedTweet(tweetsListUpdated.filter((tweet) => tweet.isLiked === true));

        console.log("tweetsListUpdated", tweetsListUpdated);
        setNewTweetCount(tweetsListUpdated.length - displayedTweet.length);
    }, [tweetsListUpdated]);


    return (
        <>
            {/* Refresh to show new Tweets */}

            <div className='tweet-list-refresh-container'>
                <div>
                    <TextButton type='button'
                        onClick={() => refreshTweetList()}
                        className={`text-primary ${newTweetCount > 0 ? "active" : ""} `}>
                        Show {newTweetCount >= 0 ? newTweetCount : 0} post
                    </TextButton>
                </div>
                <div>
                    <TextButton type='button'
                        onClick={() => allLikedTweets()}
                        className={`text-primary ${isLikedTweet.length > 0 ? "active" : ""} `}>
                        Show {isLikedTweet.length > 0 ? isLikedTweet.length : 0} Liked Tweets
                    </TextButton>
                </div>
                <div>
                    <IconButton onClick={() => clearAll()} type='button' className='bg-grey btn-icon-sm' >
                        <FontAwesomeIcon
                            className={` ${newTweetCount > 0 ? "text-primary" : ""} `} icon={faTrash} size='sm' />
                    </IconButton>

                </div>
            </div>

            <div className='tweet-list-container'>
                {displayedTweet.length === 0 && newTweetCount === 0 &&
                    <div><br />
                        Loading..!
                        <span><br />Click the Filter Button to load!
                        </span>
                    </div>
                }
                {displayedTweet && displayedTweet.slice(0).reverse().map((tweet, index) => {
                    return (
                        <div key={index} className='tweet-message-card'>
                            <div className='tweet-profile-icon'>
                                <IconButton type='button' className='bg-grey btn-icon-sm' >
                                    <FontAwesomeIcon icon={faUser} size='2xl' />
                                </IconButton>
                            </div>
                            <div className='tweet-message-container'>
                                <div className='tweet-owner-card'>
                                    <div className='tweet-owner-id'>
                                        <Link className='tweet-owner-name'
                                            to={`/profile/${tweet.account}`}>
                                            <span className='text-bold'>{tweet.account}</span>
                                            {tweet.isVerified && <span><FontAwesomeIcon className='text-primary' icon={faCheck} /></span>}
                                        </Link>
                                        <Link className='tweet-owner-username'
                                            to='#'>
                                            <span>@{tweet.account}</span>
                                        </Link>
                                        <Link className='tweet-message-date'
                                            to="#"
                                        >
                                            <span>. {dateTimeDifferenc(tweet.timestamp)}</span>
                                        </Link>
                                    </div>
                                    <div className='tweet-action-menu'>
                                        <FontAwesomeIcon icon={faEllipsis} size='sm' />
                                    </div>
                                </div>
                                <div className='tweet-message-body'>
                                    <span className='tweet-msg-txt' >{tweet.content}</span>

                                </div>

                                <TweetListIcons
                                    id={tweet.id}
                                    isLiked={tweet.isLiked}
                                    msgCount={tweet.msgCount}
                                    retweetCount={tweet.retweetCount}
                                    likedCount={tweet.likedCount}
                                    viewCount={tweet.viewCount}
                                ></TweetListIcons>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
