import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      variant: {
        text: "h-4",
        circular: "rounded-full",
        rectangular: "rounded-md",
      },
      animation: {
        pulse: "animate-pulse",
        wave: "animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted",
        none: "",
      },
      speed: {
        slow: "animate-pulse [animation-duration:2s]",
        normal: "animate-pulse [animation-duration:1s]",
        fast: "animate-pulse [animation-duration:0.5s]",
      },
    },
    defaultVariants: {
      variant: "rectangular",
      animation: "pulse",
      speed: "normal",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number
  height?: string | number
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant, 
    animation, 
    speed, 
    width, 
    height, 
    style,
    ...props 
  }, ref) => {
    const skeletonStyle = {
      width: width,
      height: height,
      ...style,
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animation, speed, className }))}
        style={skeletonStyle}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

export interface SkeletonTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
  lineHeight?: string | number
  spacing?: string | number
  variant?: 'heading' | 'body' | 'caption'
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ 
    className, 
    lines = 1, 
    lineHeight = "1.5rem", 
    spacing = "0.5rem",
    variant = 'body',
    ...props 
  }, ref) => {
    const getHeight = () => {
      switch (variant) {
        case 'heading':
          return '1.75rem'
        case 'caption':
          return '0.875rem'
        default:
          return lineHeight
      }
    }

    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        style={{ '--line-spacing': spacing } as React.CSSProperties}
        {...props}
      >
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            variant="text"
            height={getHeight()}
            className={cn(
              variant === 'heading' && "h-7",
              variant === 'caption' && "h-3.5"
            )}
          />
        ))}
      </div>
    )
  }
)
SkeletonText.displayName = "SkeletonText"

export interface SkeletonAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg' | 'xl'
  variant?: 'circular' | 'square'
}

const SkeletonAvatar = React.forwardRef<HTMLDivElement, SkeletonAvatarProps>(
  ({ 
    className, 
    size = 'default', 
    variant = 'circular',
    ...props 
  }, ref) => {
    const getSize = () => {
      switch (size) {
        case 'sm':
          return 'h-8 w-8'
        case 'lg':
          return 'h-12 w-12'
        case 'xl':
          return 'h-16 w-16'
        default:
          return 'h-10 w-10'
      }
    }

    return (
      <Skeleton
        ref={ref}
        variant={variant}
        className={cn(getSize(), className)}
        {...props}
      />
    )
  }
)
SkeletonAvatar.displayName = "SkeletonAvatar"

export { Skeleton, SkeletonText, SkeletonAvatar, skeletonVariants }

