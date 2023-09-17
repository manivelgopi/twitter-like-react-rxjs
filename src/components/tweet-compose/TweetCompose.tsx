import { faCalendarCheck, faFaceSmile, faFilm, faImage, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useAppDispatch } from '../../custom-hooks/hooks';
import { saveTweet } from '../../store/TweetListSlice';
import Button from '../button/Button';
import IconButton from '../button/IconButton';
import TextArea from '../forms/Textarea';

export default function TweetCompose() {
    const dispatch = useAppDispatch();

    const [tweetComposeText, setTweetComposeText] = useState<string>('');
    const [isPostBtnDisabled, setIsPostBtnDisabled] = useState<boolean>(true);
    const [isError, setError] = useState<boolean>(false);

    const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setError(false)
        event.target.style.height = '24px';
        event.target.style.height = event.target.scrollHeight + 12 + 'px';
        if (event.target.value) {
            setIsPostBtnDisabled(false);
            setTweetComposeText(event.target.value);
        } else {
            setIsPostBtnDisabled(true);
        }
    };

    const handlePostTweet = () => {
        if (tweetComposeText) {
            dispatch(
                saveTweet(
                    {
                        account: "Manivel Gopi",
                        timestamp: Date.now(),
                        content: tweetComposeText,
                        likedCount: 0,
                        isLiked: false
                    }
                ));
            setTweetComposeText('');
            setIsPostBtnDisabled(true);

        } else {
            setError(true)
        }
    }



    return (
        <>
            {/* Tweet compose form */}
            <div className='tweet-compose'>
                <div className='tweet-compose-profile'>
                    <IconButton type='button' className='bg-grey btn-icon-sm' >
                        <FontAwesomeIcon icon={faUser} size='2xl' />
                    </IconButton>
                </div>
                <div className='tweet-compose-form'>
                    <div className='tweet-compose-form-section1'>
                    </div>
                    <div className='tweet-compose-form-section2'>
                        <TextArea value={tweetComposeText}
                            onChange={(event) => handleTextarea(event)}
                            className={`tweet-compose-text ${isError ? "error" : ""}`}></TextArea>
                    </div>
                    <div className='tweet-compose-form-section3'>
                        <FontAwesomeIcon icon={faUser} size='sm' className=' btn-icon' />
                        Everyone can reply
                    </div>
                    <div className='tweet-compose-form-icons'>
                        <div className="tweet-card-icons">
                            <IconButton type='button' className='text-primary' >
                                <FontAwesomeIcon icon={faImage} size='sm' />
                            </IconButton>
                            <IconButton type='button' className='text-primary' >
                                <FontAwesomeIcon icon={faFilm} size='sm' />
                            </IconButton>
                            <IconButton type='button' className='text-primary' >
                                <FontAwesomeIcon icon={faListCheck} size='sm' />
                            </IconButton>
                            <IconButton type='button' className='text-primary' >
                                <FontAwesomeIcon icon={faCalendarCheck} size='sm' />
                            </IconButton>
                            <IconButton type='button' className='text-primary' >
                                <FontAwesomeIcon icon={faFaceSmile} size='sm' />
                            </IconButton>
                        </div>
                        <div className="tweet-submit-button">
                            <Button onClick={handlePostTweet} type='button' disabled={isPostBtnDisabled} className='btn-primary btn-sm'>Post</Button>
                        </div>

                    </div>

                </div>
            </div>
        </>)
}
