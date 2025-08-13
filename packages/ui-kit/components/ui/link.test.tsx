import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from './link'

describe('Link', () => {
  it('renders with default props', () => {
    render(<Link href="#">Test Link</Link>)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Test Link')
    expect(link).toHaveAttribute('href', '#')
  })

  it('renders with different underline variants', () => {
    const { rerender } = render(<Link href="#" underline="none">No underline</Link>)
    expect(screen.getByRole('link')).toHaveClass('no-underline')

    rerender(<Link href="#" underline="always">Always underline</Link>)
    expect(screen.getByRole('link')).toHaveClass('underline')

    rerender(<Link href="#" underline="hover">Hover underline</Link>)
    expect(screen.getByRole('link')).toHaveClass('no-underline')
    expect(screen.getByRole('link')).toHaveClass('hover:underline')
  })

  it('renders with different colors', () => {
    const { rerender } = render(<Link href="#" color="primary">Primary</Link>)
    expect(screen.getByRole('link')).toHaveClass('text-primary')

    rerender(<Link href="#" color="secondary">Secondary</Link>)
    expect(screen.getByRole('link')).toHaveClass('text-text-secondary')

    rerender(<Link href="#" color="muted">Muted</Link>)
    expect(screen.getByRole('link')).toHaveClass('text-text-muted')
  })

  it('shows external icon for external links', () => {
    render(<Link href="https://example.com" target="_blank">External Link</Link>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    
    // Check for external link icon
    const icon = link.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('shows external icon for http links', () => {
    render(<Link href="http://example.com">HTTP Link</Link>)
    const link = screen.getByRole('link')
    
    // Check for external link icon
    const icon = link.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('does not show external icon for internal links', () => {
    render(<Link href="/internal">Internal Link</Link>)
    const link = screen.getByRole('link')
    
    // Should not have external link icon
    const icon = link.querySelector('svg')
    expect(icon).not.toBeInTheDocument()
  })

  it('respects showExternalIcon prop', () => {
    render(
      <Link href="https://example.com" target="_blank" showExternalIcon={false}>
        External Link No Icon
      </Link>
    )
    const link = screen.getByRole('link')
    
    // Should not have external link icon
    const icon = link.querySelector('svg')
    expect(icon).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Link href="#" className="custom-class">Custom Class</Link>)
    expect(screen.getByRole('link')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLAnchorElement>()
    render(<Link href="#" ref={ref}>Ref Test</Link>)
    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('handles custom rel attribute', () => {
    render(<Link href="#" rel="nofollow">Custom Rel</Link>)
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'nofollow')
  })

  it('combines custom rel with external link rel', () => {
    render(<Link href="https://example.com" target="_blank" rel="nofollow">External with custom rel</Link>)
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'nofollow')
  })

  it('applies focus styles correctly', () => {
    render(<Link href="#">Focus Test</Link>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('focus-visible:outline-none')
    expect(link).toHaveClass('focus-visible:ring-2')
    expect(link).toHaveClass('focus-visible:ring-ring')
  })

  it('renders with transition styles', () => {
    render(<Link href="#">Transition Test</Link>)
    expect(screen.getByRole('link')).toHaveClass('transition-colors')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Link href="#" onClick={handleClick}>Clickable Link</Link>)
    
    screen.getByRole('link').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('maintains accessibility with aria-label', () => {
    render(<Link href="#" aria-label="Accessible link">Link</Link>)
    expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Accessible link')
  })

  it('renders complex content correctly', () => {
    render(
      <Link href="#">
        <span>Complex</span> <strong>Content</strong>
      </Link>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveTextContent('Complex Content')
    expect(link.querySelector('strong')).toBeInTheDocument()
  })

  it('applies font family correctly', () => {
    render(<Link href="#">Font family test</Link>)
    expect(screen.getByRole('link')).toHaveClass('font-azorath')
  })
})
