import React from 'react'
import { render, screen } from '@testing-library/react'
import { List, ListItem } from './list'

describe('List', () => {
  it('renders unordered list with default props', () => {
    render(
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>
    )
    
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(list.tagName).toBe('UL')
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('renders ordered list', () => {
    render(
      <List type="ordered">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>
    )
    
    const list = screen.getByRole('list')
    expect(list.tagName).toBe('OL')
    expect(list).toHaveClass('list-decimal')
  })

  it('renders with different markers', () => {
    const { rerender } = render(
      <List marker="dot">
        <li>Dot item</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('space-y-2')

    rerender(
      <List marker="check">
        <li>Check item</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('space-y-2')

    rerender(
      <List marker="none">
        <li>No marker item</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('space-y-2')
  })

  it('renders with different spacing', () => {
    const { rerender } = render(
      <List spacing="sm">
        <li>Small spacing</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('space-y-1')

    rerender(
      <List spacing="md">
        <li>Medium spacing</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('space-y-2')

    rerender(
      <List spacing="lg">
        <li>Large spacing</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('space-y-3')
  })

  it('renders with items prop', () => {
    const items = ['Item 1', 'Item 2', 'Item 3']
    render(<List items={items} />)
    
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <List className="custom-class">
        <li>Custom class item</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLUListElement>()
    render(
      <List ref={ref}>
        <li>Ref test item</li>
      </List>
    )
    expect(ref.current).toBe(screen.getByRole('list'))
  })

  it('applies font family correctly', () => {
    render(
      <List>
        <li>Font family test</li>
      </List>
    )
    expect(screen.getByRole('list')).toHaveClass('font-azorath')
  })

  it('renders check markers correctly', () => {
    render(
      <List type="unordered" marker="check">
        <li>Check item</li>
      </List>
    )
    
    const listItem = screen.getByText('Check item').closest('li')
    expect(listItem).toHaveClass('flex', 'items-start', 'gap-2')
    
    // Check for check icon
    const icon = listItem?.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders dot markers correctly', () => {
    render(
      <List type="unordered" marker="dot">
        <li>Dot item</li>
      </List>
    )
    
    const listItem = screen.getByText('Dot item').closest('li')
    expect(listItem).toHaveClass('before:content-[\'•\']')
  })

  it('renders without markers correctly', () => {
    render(
      <List type="unordered" marker="none">
        <li>No marker item</li>
      </List>
    )
    
    const listItem = screen.getByText('No marker item').closest('li')
    expect(listItem).toHaveClass('flex', 'items-start', 'gap-2')
    
    // Should not have check icon
    const icon = listItem?.querySelector('svg')
    expect(icon).not.toBeInTheDocument()
  })
})

describe('ListItem', () => {
  it('renders with default props', () => {
    render(<ListItem>Test item</ListItem>)
    const item = screen.getByText('Test item').closest('li')
    expect(item).toBeInTheDocument()
    expect(item).toHaveClass('flex', 'items-start', 'gap-2')
  })

  it('renders with different types', () => {
    const { rerender } = render(<ListItem type="ordered">Ordered item</ListItem>)
    expect(screen.getByText('Ordered item').closest('li')).toHaveClass('flex', 'items-start', 'gap-2')

    rerender(<ListItem type="unordered">Unordered item</ListItem>)
    expect(screen.getByText('Unordered item').closest('li')).toHaveClass('flex', 'items-start', 'gap-2')
  })

  it('renders with different markers', () => {
    const { rerender } = render(<ListItem marker="dot">Dot item</ListItem>)
    expect(screen.getByText('Dot item').closest('li')).toHaveClass('before:content-[\'•\']')

    rerender(<ListItem marker="check">Check item</ListItem>)
    expect(screen.getByText('Check item').closest('li')).toHaveClass('flex', 'items-start', 'gap-2')

    rerender(<ListItem marker="none">No marker item</ListItem>)
    expect(screen.getByText('No marker item').closest('li')).toHaveClass('flex', 'items-start', 'gap-2')
  })

  it('applies custom className', () => {
    render(<ListItem className="custom-class">Custom class item</ListItem>)
    expect(screen.getByText('Custom class item').closest('li')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLLIElement>()
    render(<ListItem ref={ref}>Ref test item</ListItem>)
    expect(ref.current).toBe(screen.getByText('Ref test item').closest('li'))
  })

  it('renders check icon for check marker in unordered list', () => {
    render(
      <ListItem type="unordered" marker="check">
        Check item
      </ListItem>
    )
    
    const listItem = screen.getByText('Check item').closest('li')
    const icon = listItem?.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('does not render check icon for ordered list', () => {
    render(
      <ListItem type="ordered" marker="check">
        Check item in ordered list
      </ListItem>
    )
    
    const listItem = screen.getByText('Check item in ordered list').closest('li')
    const icon = listItem?.querySelector('svg')
    expect(icon).not.toBeInTheDocument()
  })

  it('renders complex content correctly', () => {
    render(
      <ListItem>
        <strong>Bold text</strong> and <em>italic text</em>
      </ListItem>
    )
    
    const item = screen.getByText('Bold text').closest('li')
    expect(item).toHaveTextContent('Bold text and italic text')
    expect(item?.querySelector('strong')).toBeInTheDocument()
    expect(item?.querySelector('em')).toBeInTheDocument()
  })
})
