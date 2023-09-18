import moment from 'moment';
import { PeopleList, TweetItem } from '../types-interfaces/types';


moment.updateLocale('en', {
    relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: number => number + "s",
        m: "1 minute",
        mm: "%d minutes",
        h: "1 hour",
        hh: "%d hours",
        d: "1 day",
        dd: "%d days",
        M: "1 month",
        MM: "%d months",
        y: "1 year",
        yy: "%d years"
    }
});


export function dateTimeDifferenc(dateTimestamp: number): string {
    return moment(dateTimestamp).fromNow()
}

export function removeOlderTweet(tweetArrayList: TweetItem[]): TweetItem[] {
    const currentTimestamp: number = new Date().getTime();
    console.log(tweetArrayList);

    return tweetArrayList.filter((tweet) =>
        (tweet: TweetItem) =>
            currentTimestamp - tweet.timestamp <= 30000 // 30 seconds in milliseconds
    )
}
