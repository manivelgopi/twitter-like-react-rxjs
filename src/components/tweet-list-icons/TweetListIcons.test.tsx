import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import {
    MemoryRouter
} from 'react-router-dom';
import { renderWithProviders } from '../../test/utils/test-utils';
import TweetListIcons from './TweetListIcons';

describe('Render check TweetListIcons', () => {
    test('Render TweetListIcons', async () => {
        renderWithProviders(<MemoryRouter initialEntries={['/']}>
            <TweetListIcons isLiked={false} likedCount={0} />
        </MemoryRouter>,)

        expect(screen.getByTestId('TweetListIcons')).toBeInTheDocument()
        expect(screen.getByText('0')).toBeInTheDocument();
    })
});
