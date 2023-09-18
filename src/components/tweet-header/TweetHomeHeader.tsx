import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextButton from '../../components/button/TextButton';

export default function TweetHomeHeader() {
    const [isAllTweet, setAllTweet] = useState(true);

    const forYou = () => {
        setAllTweet(true)
    }
    const likedTweet = () => {
        setAllTweet(false)
    }
    return (
        <>
            {/* Tweet page top Header and nav button */}
            <div className='tweet-container-header'>
                <h2 className='page-title heading-2'>Home</h2>
                <div className='tweet-category-buttons'>
                    <TextButton type='button' className='btn-block' onClick={() => forYou()}>
                        For you
                    </TextButton>

                    <TextButton type='button' className='btn-block' onClick={() => likedTweet()}>
                        Following
                    </TextButton>

                </div>
            </div>
        </>
    )
}
