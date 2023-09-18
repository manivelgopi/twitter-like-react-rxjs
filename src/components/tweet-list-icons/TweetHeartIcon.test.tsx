import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
    MemoryRouter
} from 'react-router-dom';
import { likeUpdate, saveTweet } from '../../store/TweetListSlice';
import { Store } from '../../store/store';
import { renderWithProviders } from '../../test/utils/test-utils';
import TweetHeartIcon from './TweetHeartIcon';

describe('Render check TweetHeartIcon', () => {
    const store = Store();
    store.dispatch(
        saveTweet(
            {
                id: 123,
                account: "Manivel Gopi",
                timestamp: Date.now(),
                content: "Hello world",
                likedCount: 0,
                isLiked: false,
                isVerified: true
            }
        ));

    test('Render TweetHeartIcon', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetHeartIcon isLiked={false} likedCount={0} />
        </MemoryRouter>,)

        expect(screen.getByTestId('tweet-heart-button')).toBeInTheDocument()
        expect(screen.getByText('0')).toBeInTheDocument();
    })

    test('Render TweetHeartIcon with required props', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetHeartIcon isLiked={true} likedCount={199} />
        </MemoryRouter>,)

        expect(screen.getByTestId('tweet-heart-button')).toBeInTheDocument()
        expect(screen.getByText('199')).toBeInTheDocument();
    })

    it('handles refresh button click', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetHeartIcon isLiked={false} likedCount={0} />
        </MemoryRouter>,)

        // Simulate a click on the refresh button
        fireEvent.click(screen.getByTestId('tweet-heart-button'));
        store.dispatch(likeUpdate(0));

        // Wait for the component to update
        await waitFor(() => {
            expect(screen.getByText('1')).toBeInTheDocument();
        });
    });

});
