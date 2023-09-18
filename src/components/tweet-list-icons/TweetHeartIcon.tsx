import { faHeart as notLikedIcon } from '@fortawesome/free-regular-svg-icons';
import { faHeart as LikedIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useAppDispatch } from '../../custom-hooks/hooks';
import { likeUpdate } from '../../store/TweetListSlice';
import { LikedIcons } from '../../types-interfaces/types';
import IconButton from '../button/IconButton';

export default function TweetHeartIcon(likedData: LikedIcons) {
    const dispatch = useAppDispatch();

    const handleHeartTouch = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (isLikedIconState.id) {

            dispatch(likeUpdate(isLikedIconState.id));
        }
        if (isLikedIconState.isLiked === true) {
            setLikedIconState({
                ...isLikedIconState,
                isLiked: false,
                likedCount: isLikedIconState.likedCount - 1
            })
        } else {
            setLikedIconState({
                ...isLikedIconState,
                isLiked: true,
                likedCount: isLikedIconState.likedCount + 1
            })
        }
    }

    const [isLikedIconState, setLikedIconState] = useState(likedData);
    return (
        <>
            <div className="tweet-msg-icons tweet-icon-heart">
                <IconButton
                    testId="tweet-heart-button"
                    onClick={(e) => handleHeartTouch(e)}
                    type='button'
                    className={`tweet-msg-icon 
                    ${isLikedIconState.isLiked === true ? "liked-icon" : ""}`}>
                    <FontAwesomeIcon
                        icon={isLikedIconState.isLiked === true ?
                            LikedIcon : notLikedIcon} size='lg' />
                </IconButton>
                <span className="tweet-msg-icons-count">
                    {isLikedIconState.likedCount}</span>
            </div >

        </>
    )
}
