import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
    MemoryRouter
} from 'react-router-dom';
import { likeUpdate, saveTweet } from '../../store/TweetListSlice';
import { Store } from '../../store/store';
import { renderWithProviders } from '../../test/utils/test-utils';
import TweetCompose from './TweetCompose';

describe('Render check TweetCompose', () => {
    const store = Store();

    test('Render TweetCompose', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetCompose />
        </MemoryRouter>,)

        expect(screen.getByTestId('tweet-compose-field')).toBeInTheDocument()
        expect(screen.getByTestId('tweet-compose-button')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('What is happening?!')).toBeInTheDocument()
        const textareaElement = screen.getByPlaceholderText('What is happening?!');
        fireEvent.change(textareaElement, { target: { value: 'This is my First Tweet!' } });
        // Assertions
        expect(textareaElement).toHaveValue('This is my First Tweet!');
    })

    it('handles refresh button click', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetCompose />
        </MemoryRouter>,)
        const textareaElement = screen.getByPlaceholderText('What is happening?!');

        fireEvent.change(textareaElement, { target: { value: 'This is my First Tweet!' } });
        // Assertions
        expect(textareaElement).toHaveValue('This is my First Tweet!');

        // Simulate a click on the refresh button
        fireEvent.click(screen.getByTestId('tweet-compose-button'));

    });

});
