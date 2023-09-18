import { TrendItemListsProps } from '../../types-interfaces/types';
import TrendItemElement from '../trend-item/TrendItemElement';

export default function TrendContainer({ trendListItems }: TrendItemListsProps) {
    return (
        <>
            <div className='twitter-trends'>
                <h2 className='header-text'>Germany Trends</h2>
                {trendListItems &&
                    trendListItems.map((trendItems, index) =>
                        <TrendItemElement key={index} trendPostCountText={trendItems.trendPostCountText} trendTitle={trendItems.trendTitle} trendHashTag={trendItems.trendHashTag}></TrendItemElement>
                    )
                }
                <div className='showmore-contact text-primary'>
                    Show more
                </div>
            </div>
        </>
    )
}
