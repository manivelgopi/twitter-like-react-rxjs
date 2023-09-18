import { faComment, faShareFromSquare, } from '@fortawesome/free-regular-svg-icons';
import { faChartColumn, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TweetMesgIcons } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';
import TweetHeartIcon from './TweetHeartIcon';

export default function TweetListIcons(tweetMessageIcon: TweetMesgIcons) {

    return (
        <>
            <div data-testid="TweetListIcons" key={tweetMessageIcon.id} className='tweet-like-share-icons'>
                <div className="tweet-card-icons">
                    <div className="tweet-msg-icons tweet-icon-comment">
                        <IconButton type='button' className='tweet-msg-icon'>
                            <FontAwesomeIcon icon={faComment} size='lg' />
                        </IconButton>
                        <span className="tweet-msg-icons-count">{tweetMessageIcon.msgCount} </span>
                    </div>
                    <div className="tweet-msg-icons tweet-icon-retweet">
                        <IconButton type='button' className='tweet-msg-icon' >
                            <FontAwesomeIcon icon={faRetweet} size='lg' />
                        </IconButton>
                        <span className="tweet-msg-icons-count">{tweetMessageIcon.retweetCount}</span>
                    </div>
                    <TweetHeartIcon
                        likedCount={tweetMessageIcon.likedCount}
                        id={tweetMessageIcon.id}
                        isLiked={tweetMessageIcon.isLiked} />

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
