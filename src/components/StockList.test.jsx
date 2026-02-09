import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StockList from './StockList'
import { StockContextProvider } from '../contexts/StockContext'

describe('StockList Component', () => {
  it('renders the empty state message correctly', () => {
    render(
      <StockContextProvider>
        <StockList />
      </StockContextProvider>
    )

    expect(
      screen.getByText(/no stocks available/i)
    ).toBeInTheDocument()
  })
})
