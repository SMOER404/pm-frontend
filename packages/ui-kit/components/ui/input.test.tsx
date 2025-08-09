import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';
import { Search, Mail } from 'lucide-react';

describe('Input Component', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(
      <Input 
        label="Password" 
        placeholder="Enter password" 
        helperText="Password must be at least 8 characters"
      />
    );
    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(
      <Input 
        label="Email" 
        placeholder="Enter email" 
        error={true}
        errorMessage="Please enter a valid email"
      />
    );
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Input variant="default" placeholder="Default" />);
    expect(screen.getByPlaceholderText('Default')).toHaveClass('border-input');

    rerender(<Input variant="filled" placeholder="Filled" />);
    expect(screen.getByPlaceholderText('Filled')).toHaveClass('bg-muted');

    rerender(<Input variant="outlined" placeholder="Outlined" />);
    expect(screen.getByPlaceholderText('Outlined')).toHaveClass('border-2');

    rerender(<Input variant="ghost" placeholder="Ghost" />);
    expect(screen.getByPlaceholderText('Ghost')).toHaveClass('bg-transparent');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="sm" placeholder="Small" />);
    expect(screen.getByPlaceholderText('Small')).toHaveClass('h-8');

    rerender(<Input size="default" placeholder="Default" />);
    expect(screen.getByPlaceholderText('Default')).toHaveClass('h-10');

    rerender(<Input size="lg" placeholder="Large" />);
    expect(screen.getByPlaceholderText('Large')).toHaveClass('h-12');

    rerender(<Input size="xl" placeholder="Extra Large" />);
    expect(screen.getByPlaceholderText('Extra Large')).toHaveClass('h-14');
  });

  it('renders with left icon', () => {
    render(<Input leftIcon={<Search data-testid="search-icon" />} placeholder="Search" />);
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Input rightIcon={<Mail data-testid="mail-icon" />} placeholder="Email" />);
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });

  it('renders with search type and shows search icon', () => {
    render(<Input type="search" placeholder="Search" />);
    // Search icon should be automatically added when no leftIcon is provided
    const searchIcon = document.querySelector('svg'); // Look for any SVG icon
    expect(searchIcon).toBeInTheDocument();
  });

  it('handles password visibility toggle', () => {
    render(<Input type="password" placeholder="Password" />);
    const input = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByRole('button');
    
    // Initially should be password type
    expect(input).toHaveAttribute('type', 'password');
    
    // Click toggle button
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
    
    // Click again to hide
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles clear button when clearable is true', () => {
    render(<Input clearable={true} placeholder="Clearable input" />);
    const input = screen.getByPlaceholderText('Clearable input');
    
    // Type something
    fireEvent.change(input, { target: { value: 'test' } });
    
    // Clear button should appear
    const clearButton = screen.getByRole('button');
    expect(clearButton).toBeInTheDocument();
    
    // Click clear button
    fireEvent.click(clearButton);
    expect(input).toHaveValue('');
  });

  it('handles controlled component', () => {
    const handleChange = jest.fn();
    render(
      <Input 
        value="initial value" 
        onChange={handleChange} 
        placeholder="Controlled" 
      />
    );
    
    const input = screen.getByPlaceholderText('Controlled');
    expect(input).toHaveValue('initial value');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('handles uncontrolled component', () => {
    render(<Input placeholder="Uncontrolled" />);
    const input = screen.getByPlaceholderText('Uncontrolled');
    
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(input).toHaveValue('test value');
  });

  it('applies error styles when error is true', () => {
    render(<Input error={true} placeholder="Error input" />);
    const input = screen.getByPlaceholderText('Error input');
    expect(input).toHaveClass('border-destructive');
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Input disabled={true} placeholder="Disabled" />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });

  it('handles fullWidth prop', () => {
    const { rerender } = render(<Input fullWidth={true} placeholder="Full width" />);
    let input = screen.getByPlaceholderText('Full width');
    expect(input).toHaveClass('w-full');

    rerender(<Input fullWidth={false} placeholder="Not full width" />);
    input = screen.getByPlaceholderText('Not full width');
    // Should not have w-full class when fullWidth is false
    expect(input).not.toHaveClass('w-full');
  });

  it('calls onClear when clear button is clicked', () => {
    const onClear = jest.fn();
    render(<Input clearable={true} onClear={onClear} placeholder="Clearable" />);
    
    const input = screen.getByPlaceholderText('Clearable');
    fireEvent.change(input, { target: { value: 'test' } });
    
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    
    expect(onClear).toHaveBeenCalled();
  });

  it('focuses input after clearing', () => {
    render(<Input clearable={true} placeholder="Clearable" />);
    const input = screen.getByPlaceholderText('Clearable');
    
    fireEvent.change(input, { target: { value: 'test' } });
    const clearButton = screen.getByRole('button');
    
    // Focus should move to input after clearing
    fireEvent.click(clearButton);
    expect(input).toHaveFocus();
  });
});
