import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
import {
    // BrowserRouter, 
    MemoryRouter
} from 'react-router-dom'
import { renderWithProviders } from '../../test/utils/test-utils'
import HomePage from './HomePage'

test('App Render check', async () => {
    renderWithProviders(<MemoryRouter initialEntries={['/']}>
        <HomePage />
    </MemoryRouter>,)
    // await waitFor(() => {
    //     expect(screen.getAllByText(/Home/i)).toBeInTheDocument();
    // });

    expect(await screen.findByText(/Home/i)).toBeInTheDocument()
    expect(await screen.findByText(/Who to Follow/i)).toBeInTheDocument()
    expect(await screen.findByText(/Germany Trends/i)).toBeInTheDocument()

})
