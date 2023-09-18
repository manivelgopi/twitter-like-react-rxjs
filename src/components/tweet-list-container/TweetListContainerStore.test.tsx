import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
    MemoryRouter
} from 'react-router-dom';
import { renderWithProviders } from '../../test/utils/test-utils';
import TweetListContainerStore from './TweetListContainerStore';

describe('TweetListContainerStore', () => {


    test('Render TweetListContainerStore', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetListContainerStore />
        </MemoryRouter>,)

        expect(screen.getByTestId('tweet-list-container')).toBeInTheDocument()
        expect(await screen.findByText(/Show 0 post/i)).toBeInTheDocument()
        expect(await screen.findByText(/Show 0 Liked Tweets/i)).toBeInTheDocument()
        expect(await screen.findByText(/Loading..!/i)).toBeInTheDocument()
    })


    it('handles refresh button click', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetListContainerStore />
        </MemoryRouter>,)

        // Simulate a click on the refresh button
        fireEvent.click(screen.getByText('Show 0 post'));

        // Wait for the component to update
        await waitFor(() => {
            expect(screen.getByText('Loading..!')).toBeInTheDocument();
        });
    });

    it('handles Liked Tweet button click', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetListContainerStore />
        </MemoryRouter>,)

        // Simulate a click on the refresh button
        fireEvent.click(screen.getByText('Show 0 Liked Tweets'));

        // Wait for the component to update
        await waitFor(() => {
            expect(screen.getByText('Loading..!')).toBeInTheDocument();
        });
    });

    it('handles Delete button click', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetListContainerStore />
        </MemoryRouter>,)

        // Simulate a click on the refresh button
        fireEvent.click(screen.getByTestId('tweet-list-delete-button'));

        // Wait for the component to update
        await waitFor(() => {
            expect(screen.getByText('Loading..!')).toBeInTheDocument();
        });
    });
});
