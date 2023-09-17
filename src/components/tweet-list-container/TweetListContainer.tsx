import { faCheck, faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TextButton from '../../components/button/TextButton';
import { dateTimeDifferenc } from '../../controller/utilities';
import { useAppSelector } from '../../custom-hooks/hooks';
import { tweetsList } from '../../store/TweetListSlice';
import { TweetItem } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';
import TweetListIcons from '../tweet-list-icons/TweetListIcons';

export default function TweetListContainer() {
    const tweetsListUpdated = useAppSelector(tweetsList);
    const [displayedTweet, setDisplayTweet] = useState<TweetItem[]>([]);
    const [newTweetCount, setNewTweetCount] = useState<number>(0);

    const refreshTweetList = () => {
        setDisplayTweet(tweetsListUpdated);
        setNewTweetCount(0);
    };

    useEffect(() => {
        function newTweet() {
            setNewTweetCount(tweetsListUpdated.length - displayedTweet.length)
        }
        newTweet();
        console.log("tweetsListUpdated", tweetsListUpdated);

    }, [tweetsListUpdated, displayedTweet])

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
                {displayedTweet && displayedTweet.slice(0).reverse().map((tweet, index) => {
                    console.log("update", tweet);

                    return (
                        <div key={index} className='tweet-message-card'>
                            {Date.now()}
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
                                            to={`/profile/${tweet.account}`}>
                                            <span>@{tweet.account}</span>
                                        </Link>
                                        <Link className='tweet-message-date'
                                            // to={`/profile/${user.username}`}
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
