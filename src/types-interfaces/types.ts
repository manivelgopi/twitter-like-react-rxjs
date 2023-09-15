export type TweetItem = {
    account: string;
    timestamp: number;
    content: string;
    id?: number;
    isLiked?: boolean;
    msgCount?: number;
    retweetCount?: number;
    likeCount?: number;
    viewCount?: number;
    isVerified?: boolean;
}

export type TweetItemListsProps = {
    tweetLists: TweetItem[];
}

export type PeopleList = {
    account: string;
    id?: number;
    username: string;
    imgUrl?: string;
}

export type TrendItem = {
    trendTitle: string;
    trendHashTag: string;
    trendPostCountText: string;
}

export type TrendItemListsProps = {
    trendListItems: TrendItem[];
}

