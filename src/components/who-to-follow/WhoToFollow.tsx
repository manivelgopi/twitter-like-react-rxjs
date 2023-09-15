import PeopleList from '../people-list/PeopleList';

export default function WhoToFollow() {

    return (
        <>
            <div className='who-to-follow'>
                <h2 className='header-text'>Who to Follow</h2>
                <div className='people-suggestion-list'>
                    <ul>
                        <PeopleList></PeopleList>
                    </ul>
                </div>
                <div className='showmore-contact text-primary'>
                    Show more
                </div>
            </div>
        </>
    )
}

