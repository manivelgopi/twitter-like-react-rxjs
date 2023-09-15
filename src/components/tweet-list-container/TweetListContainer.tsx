import { faComment, faShareFromSquare, faHeart as notLikedIcon } from '@fortawesome/free-regular-svg-icons';
import { faHeart as LikedIcon, faChartColumn, faCheck, faEllipsis, faRetweet, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../custom-hooks/hooks';
import { likeUpdate } from '../../store/TweetListSlice';
import { TweetItemListsProps } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';

export default function TweetListContainer({ tweetLists }: TweetItemListsProps) {

    moment.updateLocale('en', {
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "seconds",
            m: "1 minute",
            mm: "%d minutes",
            h: "1 hour",
            hh: "%d hours",
            d: "1 day",
            dd: "%d days",
            M: "1 month",
            MM: "%d months",
            y: "1 year",
            yy: "%d years"
        }
    });
    let timeDirretent = (dateTimestamp: number): string => { return moment(dateTimestamp).fromNow() };
    const dispatch = useAppDispatch();

    const handleLike = (index: number) => {
        console.log("text", index);
        dispatch(likeUpdate(index));
    }


    return (
        <>
            <div className='tweet-list-container'>
                {tweetLists && tweetLists.slice(0).reverse().map((tweet, index) => {
                    console.log("update", tweet);

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
                                            to={`/profile/${tweet.account}`}>
                                            <span>@{tweet.account}</span>
                                        </Link>
                                        <Link className='tweet-message-date'
                                            // to={`/profile/${user.username}`}
                                            to="#"
                                        >
                                            <span>. {timeDirretent(tweet.timestamp)}</span>
                                        </Link>
                                    </div>
                                    <div className='tweet-action-menu'>
                                        <FontAwesomeIcon icon={faEllipsis} size='sm' />
                                    </div>
                                </div>
                                <div className='tweet-message-body'>
                                    <span className='tweet-msg-txt' >{tweet.content}</span>

                                </div>
                                <div className='tweet-like-share-icons'>
                                    <div className="tweet-card-icons">
                                        <div className="tweet-msg-icons tweet-icon-comment">
                                            <IconButton type='button' className='tweet-msg-icon'>
                                                <FontAwesomeIcon icon={faComment} size='lg' />
                                            </IconButton>
                                            <span className="tweet-msg-icons-count">{tweet.msgCount}</span>
                                        </div>
                                        <div className="tweet-msg-icons tweet-icon-retweet">
                                            <IconButton type='button' className='tweet-msg-icon' >
                                                <FontAwesomeIcon icon={faRetweet} size='lg' />
                                            </IconButton>
                                            <span className="tweet-msg-icons-count">{tweet.retweetCount}</span>
                                        </div>
                                        <div className="tweet-msg-icons tweet-icon-heart">
                                            <IconButton onClick={() => handleLike(index)} type='button'
                                                className={`tweet-msg-icon ${tweet.isLiked ? "liked-icon" : ""}`}>
                                                <FontAwesomeIcon icon={tweet.isLiked ? LikedIcon : notLikedIcon} size='lg' />
                                            </IconButton>
                                            <span className="tweet-msg-icons-count">{tweet.likeCount}</span>
                                        </div>
                                        <div className="tweet-msg-icons tweet-icon-chart">
                                            <IconButton type='button' className='tweet-msg-icon'>
                                                <FontAwesomeIcon icon={faChartColumn} size='lg' />
                                            </IconButton>
                                            <span className="tweet-msg-icons-count">{tweet.viewCount}</span>

                                        </div>
                                        <div className="tweet-msg-icons tweet-icon-share">
                                            <IconButton type='button' className='tweet-msg-icon'>
                                                <FontAwesomeIcon icon={faShareFromSquare} size='lg' />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })

                }


            </div>
        </>
    )
}
