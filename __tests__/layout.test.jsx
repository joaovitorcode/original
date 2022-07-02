import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Layout } from '../src/components/Layout'

describe('Layout', () => {
  it('should be able to rendered in the page', () => {
    render(<Layout />)

    const childrenElement = screen.queryByTestId('layout-container')

    expect(childrenElement).toHaveTextContent()
  })
})
