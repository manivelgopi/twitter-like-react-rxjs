import { faComment, faShareFromSquare, } from '@fortawesome/free-regular-svg-icons';
import { faChartColumn, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TweetMesgIcons } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';
import TweetLikeIcons from './TweetLikeIcon';

export default function TweetListIcons(tweetMessageIcon: TweetMesgIcons) {

    // const dispatch = useAppDispatch();
    // const [tweetMessageIcon] = useState(tweetMessageIconData)

    // const handleLike = useCallback((id: number | undefined) => {
    //     if (id) {
    //         console.log(id);
    //         dispatch(likeUpdate(id));
    //         if (tweetMessageIcon.isLiked) {
    //             setTweetMessageIcon({ ...tweetMessageIcon, isLiked: false })
    //         } else {
    //             setTweetMessageIcon({ ...tweetMessageIcon, isLiked: true })
    //         }
    //     }
    // }, [dispatch, tweetMessageIcon])

    // useEffect(() => {
    //     setTweetMessageIcon(tweetMessageIconData)
    // }, [tweetMessageIconData])

    return (
        <>
            <div key={tweetMessageIcon.id} className='tweet-like-share-icons'>
                <div className="tweet-card-icons">
                    <div className="tweet-msg-icons tweet-icon-comment">
                        <IconButton type='button' className='tweet-msg-icon'>
                            <FontAwesomeIcon icon={faComment} size='lg' />
                        </IconButton>
                        <span className="tweet-msg-icons-count">{tweetMessageIcon.msgCount}</span>
                    </div>
                    <div className="tweet-msg-icons tweet-icon-retweet">
                        <IconButton type='button' className='tweet-msg-icon' >
                            <FontAwesomeIcon icon={faRetweet} size='lg' />
                        </IconButton>
                        <span className="tweet-msg-icons-count">{tweetMessageIcon.retweetCount}</span>
                    </div>
                    <TweetLikeIcons likedCount={tweetMessageIcon.likedCount} id={tweetMessageIcon.id} isLiked={tweetMessageIcon.isLiked}></TweetLikeIcons>
                    {/* <div className="tweet-msg-icons tweet-icon-heart">
                        <IconButton onClick={() => {
                            if (tweetMessageIcon.id) { dispatch(likeUpdate(tweetMessageIcon.id)); }
                            tweetMessageIcon.isLiked ?
                                setTweetMessageIcon({ ...tweetMessageIcon, isLiked: false })
                                :
                                setTweetMessageIcon({ ...tweetMessageIcon, isLiked: true })
                        }
                        }
                            type='button'
                            className={`tweet-msg-icon ${tweetMessageIcon.isLiked ? "liked-icon" : ""}`}>
                            <FontAwesomeIcon icon={tweetMessageIcon.isLiked ? LikedIcon : notLikedIcon} size='lg' />
                        </IconButton>
                        <span className="tweet-msg-icons-count">{tweetMessageIcon.isLiked ? 1 : ""}</span>
                    </div> */}
                    <div className="tweet-msg-icons tweet-icon-chart">
                        <IconButton type='button' className='tweet-msg-icon'>
                            <FontAwesomeIcon icon={faChartColumn} size='lg' />
                        </IconButton>
                        <span className="tweet-msg-icons-count">{tweetMessageIcon.viewCount}</span>

                    </div>
                    <div className="tweet-msg-icons tweet-icon-share">
                        <IconButton type='button' className='tweet-msg-icon'>
                            <FontAwesomeIcon icon={faShareFromSquare} size='lg' />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}
