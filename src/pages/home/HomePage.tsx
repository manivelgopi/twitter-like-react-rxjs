import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrendContainer from '../../components/trend-container/TrendContainer';
import TweetCompose from '../../components/tweet-compose/TweetCompose';
import TweetHomeHeader from '../../components/tweet-header/TweetHomeHeader';
import TweetListContainer from '../../components/tweet-list-container/TweetListContainer';
import WhoToFollow from '../../components/who-to-follow/WhoToFollow';

import { dummyTrendDataList } from '../../mockdata';
import './HomePage.scss';

export default function Home() {


    // const following = () => {
    //     refreshTweetList()
    // }

    // function getAllTweet() {
    //     try {
    //         tweets.subscribe(tweet => {
    //             dispatch(addTweet(tweet));
    //         })
    //     }
    //     catch (err: any) {
    //         throw new Error(err);
    //     }
    // }




    return (
        <>
            <div className='main-wrapper'>
                <div className='content-wrapper'>

                    {/* Tweet contanier with compose and tweets list */}
                    <div className='tweet-container'>
                        {Date.now()}
                        {/* Tweet page top Header and nav button */}
                        <TweetHomeHeader />

                        {/* Tweet compose form */}
                        <TweetCompose />

                        {/* Tweet message lists */}
                        <TweetListContainer />
                    </div>

                    {/* Search and new container sidebar */}
                    <div className='search-news-container'>
                        <div className='search-header'>
                            <FontAwesomeIcon icon={faSearch} className='search-icon' />
                            <input type='search' className='search-input' placeholder='Search...' />
                        </div>

                        {/* Who To Follow sectio */}
                        <WhoToFollow />

                        {/* Trend container */}
                        <TrendContainer trendListItems={dummyTrendDataList} />
                    </div>

                </div>
            </div >
        </>
    )
}

