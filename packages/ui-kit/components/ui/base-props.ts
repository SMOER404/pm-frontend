import React from 'react'

export type BaseProps = {
  id?: string;
  className?: string;
  'aria-label'?: string;
  'data-testid'?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  children?: React.ReactNode;
  sx?: React.CSSProperties;
}

// Common size variants for consistent sizing across components
export const sizeVariants = {
  sm: 'text-sm',
  md: 'text-base', 
  lg: 'text-lg',
} as const

// Common variant styles for consistent theming
export const variantStyles = {
  primary: {
    default: 'text-foreground',
    hover: 'hover:text-foreground/80',
    active: 'active:text-foreground/90',
  },
  secondary: {
    default: 'text-muted-foreground',
    hover: 'hover:text-foreground',
    active: 'active:text-foreground/90',
  },
  ghost: {
    default: 'text-muted-foreground',
    hover: 'hover:text-foreground hover:bg-accent',
    active: 'active:text-foreground/90',
  },
} as const

// Common disabled styles
export const disabledStyles = {
  default: 'opacity-50 cursor-not-allowed',
  pointer: 'pointer-events-none',
} as const

// Common loading styles
export const loadingStyles = {
  default: 'opacity-75 cursor-wait',
  pointer: 'pointer-events-none',
} as const

