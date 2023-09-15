import React from 'react';
import { NavLink } from 'react-router-dom';
import TextButton from '../../components/button/TextButton';

export default function TweetHomeHeader() {
    const forYou = () => {
        console.log("for you");

    }
    const following = () => {
        console.log("following");

    }
    return (
        <>
            {/* Tweet page top Header and nav button */}
            <div className='tweet-container-header'>
                <h2 className='page-title heading-2'>Home</h2>
                <div className='tweet-category-buttons'>
                    <NavLink to='/' className="tweet-section-btn">
                        <TextButton type='button' className='btn-block' onClick={() => forYou()}>
                            For you
                        </TextButton>
                    </NavLink>
                    <NavLink to='/follwing' className="tweet-section-btn">
                        <TextButton type='button' className='btn-block' onClick={() => following()}>
                            Following
                        </TextButton>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
