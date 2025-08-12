import React from 'react'
import { render, screen } from '@testing-library/react'
import { Heading } from './heading'
import { Star } from 'lucide-react'

describe('Heading', () => {
  it('renders with default props', () => {
    render(<Heading>Test Heading</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test Heading')
  })

  it('renders with different levels', () => {
    const { rerender } = render(<Heading level="h1">H1 Heading</Heading>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    rerender(<Heading level="h2">H2 Heading</Heading>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()

    rerender(<Heading level="h3">H3 Heading</Heading>)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()

    rerender(<Heading level="h4">H4 Heading</Heading>)
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()

    rerender(<Heading level="h5">H5 Heading</Heading>)
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()

    rerender(<Heading level="h6">H6 Heading</Heading>)
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument()
  })

  it('applies correct color classes', () => {
    const { rerender } = render(<Heading color="primary">Primary</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-text-primary')

    rerender(<Heading color="secondary">Secondary</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-text-secondary')

    rerender(<Heading color="brand">Brand</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-primary')

    rerender(<Heading color="error">Error</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-destructive')
  })

  it('applies correct alignment classes', () => {
    const { rerender } = render(<Heading align="left">Left</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-left')

    rerender(<Heading align="center">Center</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-center')

    rerender(<Heading align="right">Right</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-right')
  })

  it('renders with left icon', () => {
    render(<Heading iconLeft={<Star data-testid="left-icon" />}>With Left Icon</Heading>)
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('With Left Icon')
  })

  it('renders with right icon', () => {
    render(<Heading iconRight={<Star data-testid="right-icon" />}>With Right Icon</Heading>)
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('With Right Icon')
  })

  it('renders with both icons', () => {
    render(
      <Heading 
        iconLeft={<Star data-testid="left-icon" />}
        iconRight={<Star data-testid="right-icon" />}
      >
        With Both Icons
      </Heading>
    )
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('With Both Icons')
  })

  it('applies custom className', () => {
    render(<Heading className="custom-class">Custom Class</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLHeadingElement>()
    render(<Heading ref={ref}>Ref Test</Heading>)
    expect(ref.current).toBe(screen.getByRole('heading'))
  })

  it('applies correct size classes for different levels', () => {
    const { rerender } = render(<Heading level="h1">H1</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-h1')

    rerender(<Heading level="h2">H2</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-h2')

    rerender(<Heading level="h3">H3</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-h3')

    rerender(<Heading level="h4">H4</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-h4')

    rerender(<Heading level="h5">H5</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-h5')

    rerender(<Heading level="h6">H6</Heading>)
    expect(screen.getByRole('heading')).toHaveClass('text-h6')
  })

  it('has proper semantic structure', () => {
    render(
      <div>
        <Heading level="h1">Main Title</Heading>
        <Heading level="h2">Subtitle</Heading>
        <Heading level="h3">Section</Heading>
      </div>
    )
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main Title')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subtitle')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Section')
  })
})
