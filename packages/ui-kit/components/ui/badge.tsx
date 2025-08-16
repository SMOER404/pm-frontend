import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      color: {
        default: "",
        success: "border-green-200 bg-green-100 text-green-800",
        warning: "border-yellow-200 bg-yellow-100 text-yellow-800",
        error: "border-red-200 bg-red-100 text-red-800",
        info: "border-blue-200 bg-blue-100 text-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  max?: number
  showZero?: boolean
  dot?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    size, 
    color,
    max,
    showZero = false,
    dot = false,
    children,
    ...props 
  }, ref) => {
    const content = React.useMemo(() => {
      if (dot) {
        return null
      }
      
      if (typeof children === 'number') {
        if (children === 0 && !showZero) {
          return null
        }
        
        if (max && children > max) {
          return `${max}+`
        }
        
        return children.toString()
      }
      
      return children
    }, [children, max, showZero, dot])

    if (dot) {
      return (
        <div
          ref={ref}
          className={cn(
            "inline-flex items-center",
            badgeVariants({ variant, size, color, className })
          )}
          {...props}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current mr-1" />
          {content}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, color, className }))}
        {...props}
      >
        {content}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export interface BadgeWithIconProps extends BadgeProps {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const BadgeWithIcon = React.forwardRef<HTMLDivElement, BadgeWithIconProps>(
  ({ 
    className, 
    variant, 
    size, 
    color,
    icon,
    iconPosition = 'left',
    children,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, color, className }))}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="mr-1" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-1" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
    )
  }
)
BadgeWithIcon.displayName = "BadgeWithIcon"

export { Badge, BadgeWithIcon, badgeVariants }

