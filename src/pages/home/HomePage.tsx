import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextButton from '../../components/button/TextButton';
import TrendContainer from '../../components/trend-container/TrendContainer';
import TweetCompose from '../../components/tweet-compose/TweetCompose';
import TweetHomeHeader from '../../components/tweet-header/TweetHomeHeader';
import TweetListContainer from '../../components/tweet-list-container/TweetListContainer';
import WhoToFollow from '../../components/who-to-follow/WhoToFollow';
import { useAppDispatch, useAppSelector } from '../../custom-hooks/hooks';
import { dummyTrendDataList } from '../../mockdata';
import { addTweet, tweets } from '../../store/TweetListSlice';
import './HomePage.scss';

export default function Home() {
    const dispatch = useAppDispatch();
    const tweetsList = useAppSelector(tweets);

    const following = async () => {
        console.log("following");
        await dispatch(addTweet({
            account: 'AwardsDarwin',
            timestamp: 1694797540862,
            content: 'Facepalm Tweet number 60',
            id: tweets.length
        }))
    }

    return (
        <>
            <div className='main-wrapper'>
                <div className='content-wrapper'>

                    {/* Tweet contanier with compose and tweets list */}
                    <div className='tweet-container'>

                        {/* Tweet page top Header and nav button */}
                        <TweetHomeHeader />

                        {/* Tweet compose form */}
                        <TweetCompose />

                        {/* Tweet new post refresh button */}
                        <div className='tweet-list-refresh-container'>
                            <TextButton type='button' onClick={() => following()} className='text-primary btn-block'>
                                Show 25 posts
                            </TextButton>
                        </div>

                        {/* Tweet message lists */}
                        <TweetListContainer tweetLists={tweetsList}></TweetListContainer>
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

