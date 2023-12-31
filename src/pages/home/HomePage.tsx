import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrendContainer from '../../components/trend-container/TrendContainer';
import TweetCompose from '../../components/tweet-compose/TweetCompose';
import TweetHomeHeader from '../../components/tweet-header/TweetHomeHeader';
import TweetListContainerStore from '../../components/tweet-list-container/TweetListContainerStore';
import WhoToFollow from '../../components/who-to-follow/WhoToFollow';

import { dummyTrendDataList } from '../../mockdata';
import './HomePage.scss';

export default function Home() {

    return (
        <>
            <div className='main-wrapper' data-testid="twitter-app-home">
                <div className='content-wrapper'>

                    {/* Tweet contanier with compose and tweets list */}
                    <div className='tweet-container'>

                        {/* Tweet page top Header and nav button */}
                        <TweetHomeHeader />


                        {/* Tweet compose form */}
                        <TweetCompose />


                        {/* Tweet message lists */}
                        <TweetListContainerStore />
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

