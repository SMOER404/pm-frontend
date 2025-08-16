import { cva, type VariantProps } from "class-variance-authority"

// Responsive spacing type
export type ResponsiveSpacing = 
  | number 
  | string 
  | { xs?: number | string, sm?: number | string, md?: number | string, lg?: number | string, xl?: number | string }

// Responsive number type
export type ResponsiveNumber = 
  | number 
  | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }

// Image item type
export interface ImageItem {
  src: string
  alt: string
  title?: string
  description?: string
  thumbnail?: string
}

// Breakpoint values
export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Utility function to convert responsive spacing to Tailwind classes
export function getResponsiveSpacingClasses(
  spacing: ResponsiveSpacing | undefined,
  prefix: 'p' | 'm' | 'gap' | 'w' = 'p'
): string {
  if (!spacing) return ''
  
  if (typeof spacing === 'number' || typeof spacing === 'string') {
    const value = typeof spacing === 'number' ? spacing : spacing
    return `${prefix}-${value}`
  }
  
  const classes: string[] = []
  
  if (spacing.xs) classes.push(`${prefix}-${spacing.xs}`)
  if (spacing.sm) classes.push(`sm:${prefix}-${spacing.sm}`)
  if (spacing.md) classes.push(`md:${prefix}-${spacing.md}`)
  if (spacing.lg) classes.push(`lg:${prefix}-${spacing.lg}`)
  if (spacing.xl) classes.push(`xl:${prefix}-${spacing.xl}`)
  
  return classes.join(' ')
}

// Utility function to convert responsive number to Tailwind classes
export function getResponsiveNumberClasses(
  value: ResponsiveNumber | undefined,
  prefix: string
): string {
  if (!value) return ''
  
  if (typeof value === 'number') {
    return `${prefix}-${value}`
  }
  
  const classes: string[] = []
  
  if (value.xs) classes.push(`${prefix}-${value.xs}`)
  if (value.sm) classes.push(`sm:${prefix}-${value.sm}`)
  if (value.md) classes.push(`md:${prefix}-${value.md}`)
  if (value.lg) classes.push(`lg:${prefix}-${value.lg}`)
  if (value.xl) classes.push(`xl:${prefix}-${value.xl}`)
  
  return classes.join(' ')
}

// Base layout props
export interface BaseLayoutProps {
  className?: string
  children?: React.ReactNode
}
