export interface LikedIcons {
    isLiked?: boolean;
    id?: number;
    likedCount: number;
}

export interface TweetMesgIcons extends LikedIcons {
    msgCount?: number;
    retweetCount?: number;
    viewCount?: number;
    isVerified?: boolean;
}

export interface TweetItem extends TweetMesgIcons {
    account: string;
    timestamp: number;
    content: string;
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

