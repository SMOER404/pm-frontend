import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      size: {
        sm: "h-2",
        default: "h-4",
        lg: "h-6",
      },
      color: {
        default: "",
        success: "",
        warning: "",
        error: "",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  }
)

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 bg-primary transition-all",
  {
    variants: {
      color: {
        default: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
      },
      animated: {
        true: "animate-pulse",
        false: "",
      },
    },
    defaultVariants: {
      color: "default",
      animated: false,
    },
  }
)

const circularProgressVariants = cva(
  "relative inline-flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "w-16 h-16",
        default: "w-20 h-20",
        lg: "w-24 h-24",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  value?: number
  max?: number
  variant?: 'linear' | 'circular'
  showValue?: boolean
  animated?: boolean
  indeterminate?: boolean
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ 
  className, 
  variant = 'linear',
  size, 
  color, 
  value, 
  max = 100,
  showValue = false,
  animated = false,
  indeterminate = false,
  ...props 
}, ref) => {
  const progressValue = value !== undefined ? Math.min(Math.max(value, 0), max) : 0
  const percentage = indeterminate ? 0 : (progressValue / max) * 100

  if (variant === 'circular') {
    return (
      <CircularProgress
        value={progressValue}
        max={max}
        size={size}
        color={color}
        showValue={showValue}
        animated={animated}
        indeterminate={indeterminate}
        className={className}
        {...props}
      />
    )
  }

  return (
    <div className="w-full">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ size, color, className }))}
        value={progressValue}
        max={max}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            progressIndicatorVariants({ color, animated }),
            indeterminate && "animate-pulse"
          )}
          style={{ 
            transform: indeterminate 
              ? undefined 
              : `translateX(-${100 - percentage}%)` 
          }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <div className="mt-2 text-sm text-muted-foreground text-center">
          {indeterminate ? "Loading..." : `${Math.round(percentage)}%`}
        </div>
      )}
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  size?: 'sm' | 'default' | 'lg'
  color?: 'default' | 'success' | 'warning' | 'error'
  showValue?: boolean
  animated?: boolean
  indeterminate?: boolean
  strokeWidth?: number
  strokeLinecap?: 'round' | 'square' | 'butt'
  trackColor?: string
  progressColor?: string
}

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ 
    className, 
    value = 0, 
    max = 100,
    size = 'default',
    color = 'default',
    showValue = false,
    animated = false,
    indeterminate = false,
    strokeWidth = 4,
    strokeLinecap = 'round',
    trackColor,
    progressColor,
    ...props 
  }, ref) => {
    const radius = size === 'sm' ? 28 : size === 'lg' ? 44 : 36
    const circumference = 2 * Math.PI * radius
    const progressValue = Math.min(Math.max(value, 0), max)
    const percentage = indeterminate ? 0 : (progressValue / max) * 100
    const strokeDasharray = circumference
    const strokeDashoffset = indeterminate 
      ? circumference * 0.25 
      : circumference - (percentage / 100) * circumference

    const getColors = () => {
      if (trackColor && progressColor) {
        return { track: trackColor, progress: progressColor }
      }
      
      switch (color) {
        case 'success':
          return { track: '#dcfce7', progress: '#22c55e' }
        case 'warning':
          return { track: '#fef3c7', progress: '#eab308' }
        case 'error':
          return { track: '#fee2e2', progress: '#ef4444' }
        default:
          return { track: '#e5e7eb', progress: '#3b82f6' }
      }
    }

    const colors = getColors()

    return (
      <div
        ref={ref}
        className={cn(circularProgressVariants({ size, className }))}
        {...props}
      >
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}
        >
          {/* Track */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            stroke={colors.track}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            stroke={colors.progress}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap={strokeLinecap}
            fill="none"
            className={cn(
              "transition-all duration-300 ease-in-out",
              animated && "animate-pulse",
              indeterminate && "animate-spin"
            )}
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-foreground">
              {indeterminate ? "..." : `${Math.round(percentage)}%`}
            </span>
          </div>
        )}
      </div>
    )
  }
)
CircularProgress.displayName = "CircularProgress"

export { Progress, CircularProgress, progressVariants }

