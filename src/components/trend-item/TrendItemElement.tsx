import { faEllipsis, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TrendItem } from '../../types-interfaces/types';

export default function TrendItemElement({ trendTitle, trendHashTag, trendPostCountText }: TrendItem) {
    return (
        <>
            <div className='trending-list-card'>
                <div className='trending-list'>
                    <span className='trend-order-text'>{trendTitle}</span>
                    <span>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                </div>
                <div className='hashtag-text'>{trendHashTag}</div>
                <div className='noofpost-text'>{trendPostCountText}</div>
            </div>
        </>
    )
}
