"use client"

import type React from "react"

interface CustomButtonInlineProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined" | "ghost" | "danger"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  icon?: React.ReactNode
  iconOnly?: boolean
  loading?: boolean
  children: React.ReactNode
}

export default function CustomButtonInline({
  variant = "primary",
  size = "md",
  icon,
  iconOnly = false,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: CustomButtonInlineProps) {
  // Размеры кнопок
  const sizes = {
    xs: { padding: '8px 16px', fontSize: '12px', minHeight: '24px' },
    sm: { padding: '12px 24px', fontSize: '14px', minHeight: '32px' },
    md: { padding: '16px 32px', fontSize: '14px', minHeight: '40px' },
    lg: { padding: '20px 40px', fontSize: '16px', minHeight: '48px' },
    xl: { padding: '24px 48px', fontSize: '18px', minHeight: '56px' },
  }

  // Варианты стилей
  const variants = {
    primary: {
      backgroundColor: '#AFEB0F',
      color: '#292D30',
      border: '2px solid #AFEB0F',
    },
    secondary: {
      backgroundColor: '#292D30',
      color: 'white',
      border: '2px solid #292D30',
    },
    outlined: {
      backgroundColor: 'transparent',
      color: '#292D30',
      border: '2px solid #292D30',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#292D30',
      border: '2px solid transparent',
    },
    danger: {
      backgroundColor: '#EF4444',
      color: 'white',
      border: '2px solid #EF4444',
    },
  }

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.5 : 1,
    outline: 'none',
    fontFamily: 'Arial, sans-serif',
    ...sizes[size],
    ...variants[variant],
    ...(iconOnly && { aspectRatio: '1', padding: '12px' }),
  }

  return (
    <button
      style={baseStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div style={{
          width: '16px',
          height: '16px',
          border: '2px solid currentColor',
          borderTop: '2px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      )}
      {!loading && icon && <span>{icon}</span>}
      {!iconOnly && <span>{children}</span>}
    </button>
  )
} 