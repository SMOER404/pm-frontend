import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="default">Default</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-default');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');

    rerender(<Button variant="outlined">Outlined</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-outlined');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-ghost');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-sm');

    rerender(<Button size="default">Default</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-default');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-lg');
  });

  it('renders with fullWidth prop', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with left icon', () => {
    render(<Button leftIcon={<span data-testid="left-icon">❤️</span>}>Like</Button>);
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Like');
  });

  it('renders with right icon', () => {
    render(<Button rightIcon={<span data-testid="right-icon">→</span>}>Continue</Button>);
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Continue');
  });

  it('renders with start icon', () => {
    render(<Button startIcon={<span data-testid="start-icon">⬇️</span>}>Download</Button>);
    
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Download');
  });

  it('renders with end icon', () => {
    render(<Button endIcon={<span data-testid="end-icon">⬆️</span>}>Upload</Button>);
    
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Upload');
  });

  it('prioritizes startIcon over leftIcon', () => {
    render(
      <Button 
        leftIcon={<span data-testid="left-icon">❤️</span>}
        startIcon={<span data-testid="start-icon">⬇️</span>}
      >
        Test
      </Button>
    );
    
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
  });

  it('prioritizes endIcon over rightIcon', () => {
    render(
      <Button 
        rightIcon={<span data-testid="right-icon">→</span>}
        endIcon={<span data-testid="end-icon">⬆️</span>}
      >
        Test
      </Button>
    );
    
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<Button loading>Loading...</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn-loading');
  });

  it('renders disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
