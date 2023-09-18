import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

import {
    MemoryRouter
} from 'react-router-dom'
import { renderWithProviders } from '../../test/utils/test-utils'
import MobileHeader from './MobileHeader'

test('App Render check with Home page', async () => {
    renderWithProviders(<MemoryRouter initialEntries={['/']}>
        <MobileHeader />
    </MemoryRouter>,)

    expect(screen.getByTestId('twitter-mobile-header')).toBeInTheDocument()
    expect(screen.getByTestId('twitter-brand-logo')).toBeInTheDocument()
})
