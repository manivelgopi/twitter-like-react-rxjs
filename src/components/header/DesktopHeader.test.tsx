import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import {
    MemoryRouter
} from 'react-router-dom'
import { renderWithProviders } from '../../test/utils/test-utils'
import DesktopHeader from './DesktopHeader'

test('App Render check with Home page', async () => {
    renderWithProviders(<MemoryRouter initialEntries={['/']}>
        <DesktopHeader />
    </MemoryRouter>,)

    expect(screen.getByTestId('twitter-desktop-header')).toBeInTheDocument()
    expect(await screen.findByText(/Home/i)).toBeInTheDocument()
    expect(await screen.findByText(/Profile/i)).toBeInTheDocument()
    expect(await screen.findByText(/Notifications/i)).toBeInTheDocument()
    expect(screen.getByTestId('twitter-brand-logo')).toBeInTheDocument()
})
