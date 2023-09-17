// rxjs is exposed by
// <https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js>

import { interval, map, merge } from 'rxjs';

const createTweetSource = (frequency: number, account: string, attribute: string) => {
    return interval(frequency).pipe(map(i => ({
        account,
        timestamp: Date.now(),
        content: `${attribute} Tweet number ${i + 1}`
    })));
}
export const tweets = merge(
    createTweetSource(15000, 'AwardsDarwin', 'Facepalm'),
    createTweetSource(13000, 'iamdevloper', 'Expert'),
    createTweetSource(15000, 'CommitStrip', 'Funny')
);

//tweets.subscribe(console.log.bind(console));

// Subscriber handled in Tweet list container