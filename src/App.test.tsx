import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
import {
  // BrowserRouter, 
  MemoryRouter
} from 'react-router-dom'
import App from './App'
import { renderWithProviders } from './test/utils/test-utils'

test('App Render check', async () => {
  renderWithProviders(<MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>,)

  expect(screen.getByTestId('twitter-like-app')).toBeInTheDocument()
  expect(await screen.findByText(/Home/i)).toBeInTheDocument()


})

test('App router for unknown / 404 pages', async () => {
  renderWithProviders(<MemoryRouter initialEntries={['/somepage']}>
    <App />
  </MemoryRouter>,)

  expect(await screen.findByText(/Oops! 404/i)).toBeInTheDocument()
  expect(await screen.findByText(/Page not found/i)).toBeInTheDocument()
})

test('App router for profile pages', async () => {
  renderWithProviders(<MemoryRouter initialEntries={['/profile']}>
    <App />
  </MemoryRouter>,)

  expect(await screen.findByText(/profile/i)).toBeInTheDocument()
  expect(screen.getByTestId('twitter-profile-page')).toBeInTheDocument()
})
