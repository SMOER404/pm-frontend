import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "btn btn-default",
        secondary: "btn btn-secondary", 
        outlined: "btn btn-outlined",
        ghost: "btn btn-ghost",
      },
      size: {
        sm: "btn-sm",
        default: "btn-default",
        lg: "btn-lg",
        xl: "btn-xl",
        icon: "btn-icon",
        "icon-sm": "btn-icon-sm",
        "icon-lg": "btn-icon-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    leftIcon, 
    rightIcon,
    startIcon,
    endIcon,
    loading = false,
    loadingText,
    children, 
    disabled,
    fullWidth = false,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading
    
    // Use startIcon/endIcon if provided, otherwise fall back to leftIcon/rightIcon for backward compatibility
    const iconStart = startIcon || leftIcon
    const iconEnd = endIcon || rightIcon
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth, className }),
          loading && "btn-loading"
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText || children}
          </>
        ) : (
          <>
            {iconStart && (
              <span className="mr-2" aria-hidden="true">
                {iconStart}
              </span>
            )}
            {children}
            {iconEnd && (
              <span className="ml-2" aria-hidden="true">
                {iconEnd}
              </span>
            )}
          </>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
