import { faCheck, faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons';
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
import { saveTweet } from '../../store/TweetListSlice';
import { TweetItem } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';
import TweetListIcons from '../tweet-list-icons/TweetListIcons';

export default function TweetListContainerLocal() {
    const dispatch = useAppDispatch();
    let tweetId: number = 0;
    // const tweetsListUpdated = useAppSelector((state) => state.twitter.tweetsList);
    const [tweetsListUpdated, setTweetsListUpdated] = useState<TweetItem[]>([]);

    const [displayedTweet, setDisplayTweet] = useState<TweetItem[]>([]);
    const [newTweetCount, setNewTweetCount] = useState<number>(0);

    const refreshTweetList = () => {
        setDisplayTweet(tweetsListUpdated);
        setNewTweetCount(0);
    };

    // loading Datasource
    const getDatasource = useCallback(() => {
        try {
            tweets.subscribe((tweet) => {

                setTweetsListUpdated((prevTweetList) =>
                    [...prevTweetList,
                    {
                        ...tweet,
                        isLiked: false,
                        likedCount: 0, id: tweetId + 1
                    }]);
                dispatch(saveTweet(
                    {
                        account: tweet.account,
                        timestamp: tweet.timestamp,
                        content: tweet.content,
                        likedCount: 0,
                        isLiked: false,
                        id: tweetId + 1
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
        setNewTweetCount(tweetsListUpdated.length - displayedTweet.length);
    }, [displayedTweet, tweetsListUpdated]);


    return (
        <>
            {/* Refresh to show new Tweets */}
            {newTweetCount > 0 &&
                <div className='tweet-list-refresh-container'>
                    <TextButton type='button'
                        onClick={() => refreshTweetList()}
                        className='text-primary btn-block'>
                        Show {newTweetCount} post
                    </TextButton>

                </div>}

            <div className='tweet-list-container'>
                {displayedTweet.length === 0 && newTweetCount === 0 &&
                    <div><br />
                        you’re all caught up !</div>
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
