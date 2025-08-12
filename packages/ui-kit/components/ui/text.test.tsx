import React from 'react'
import { render, screen } from '@testing-library/react'
import { Text } from './text'

describe('Text', () => {
  it('renders with default props', () => {
    render(<Text>Test Text</Text>)
    const text = screen.getByText('Test Text')
    expect(text).toBeInTheDocument()
    expect(text.tagName).toBe('P')
  })

  it('renders with different types', () => {
    const { rerender } = render(<Text type="body">Body text</Text>)
    expect(screen.getByText('Body text')).toHaveClass('leading-relaxed')

    rerender(<Text type="caption">Caption text</Text>)
    expect(screen.getByText('Caption text')).toHaveClass('leading-tight')

    rerender(<Text type="secondary">Secondary text</Text>)
    expect(screen.getByText('Secondary text')).toHaveClass('leading-normal')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Text size="sm">Small text</Text>)
    expect(screen.getByText('Small text')).toHaveClass('text-sm')

    rerender(<Text size="md">Medium text</Text>)
    expect(screen.getByText('Medium text')).toHaveClass('text-md')

    rerender(<Text size="lg">Large text</Text>)
    expect(screen.getByText('Large text')).toHaveClass('text-lg')
  })

  it('renders with different weights', () => {
    const { rerender } = render(<Text weight="normal">Normal weight</Text>)
    expect(screen.getByText('Normal weight')).toHaveClass('font-normal')

    rerender(<Text weight="bold">Bold weight</Text>)
    expect(screen.getByText('Bold weight')).toHaveClass('font-bold')
  })

  it('renders with different colors', () => {
    const { rerender } = render(<Text color="primary">Primary color</Text>)
    expect(screen.getByText('Primary color')).toHaveClass('text-text-primary')

    rerender(<Text color="secondary">Secondary color</Text>)
    expect(screen.getByText('Secondary color')).toHaveClass('text-text-secondary')

    rerender(<Text color="muted">Muted color</Text>)
    expect(screen.getByText('Muted color')).toHaveClass('text-text-muted')
  })

  it('renders with different elements', () => {
    const { rerender } = render(<Text as="p">Paragraph</Text>)
    expect(screen.getByText('Paragraph').tagName).toBe('P')

    rerender(<Text as="span">Span</Text>)
    expect(screen.getByText('Span').tagName).toBe('SPAN')

    rerender(<Text as="div">Div</Text>)
    expect(screen.getByText('Div').tagName).toBe('DIV')
  })

  it('applies custom className', () => {
    render(<Text className="custom-class">Custom Class</Text>)
    expect(screen.getByText('Custom Class')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>()
    render(<Text ref={ref}>Ref Test</Text>)
    expect(ref.current).toBe(screen.getByText('Ref Test'))
  })

  it('combines multiple props correctly', () => {
    render(
      <Text 
        type="body" 
        size="lg" 
        weight="bold" 
        color="primary"
        className="custom-class"
      >
        Combined Props
      </Text>
    )
    
    const element = screen.getByText('Combined Props')
    expect(element).toHaveClass('leading-relaxed')
    expect(element).toHaveClass('text-lg')
    expect(element).toHaveClass('font-bold')
    expect(element).toHaveClass('text-text-primary')
    expect(element).toHaveClass('custom-class')
  })

  it('renders long text correctly', () => {
    const longText = 'This is a very long text that should be rendered properly with the correct line height and spacing. It should wrap naturally and maintain readability.'
    render(<Text type="body" size="md">{longText}</Text>)
    
    const element = screen.getByText(longText)
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('leading-relaxed')
    expect(element).toHaveClass('text-md')
  })

  it('maintains semantic meaning with different elements', () => {
    render(
      <div>
        <Text as="p">This is a paragraph</Text>
        <Text as="span">This is inline text</Text>
        <Text as="div">This is a block element</Text>
      </div>
    )
    
    expect(screen.getByText('This is a paragraph').tagName).toBe('P')
    expect(screen.getByText('This is inline text').tagName).toBe('SPAN')
    expect(screen.getByText('This is a block element').tagName).toBe('DIV')
  })

  it('applies font family correctly', () => {
    render(<Text>Font family test</Text>)
    expect(screen.getByText('Font family test')).toHaveClass('font-azorath')
  })
})
