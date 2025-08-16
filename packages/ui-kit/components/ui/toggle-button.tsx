import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const toggleButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group font-azorath",
  {
    variants: {
      variant: {
        default: "text-[#292D30] hover:text-[#AFEB0F] data-[state=on]:text-[#AFEB0F]",
        secondary: "text-[#AFEB0F] hover:text-[#292D30] data-[state=on]:text-[#292D30]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        destructive: "text-destructive hover:text-destructive/80 data-[state=on]:text-destructive/80",
        success: "text-green-600 hover:text-green-700 data-[state=on]:text-green-700",
        warning: "text-yellow-600 hover:text-yellow-700 data-[state=on]:text-yellow-700",
        info: "text-blue-600 hover:text-blue-700 data-[state=on]:text-blue-700",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
      pressed: {
        true: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      pressed: false,
    },
  }
)

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleButtonVariants> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  fullWidth?: boolean
  children?: React.ReactNode
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ 
    className, 
    variant, 
    size,
    pressed = false,
    onPressedChange,
    loading = false,
    icon,
    iconPosition = "left",
    fullWidth = false,
    children,
    onClick,
    disabled,
    ...props 
  }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && onPressedChange) {
        onPressedChange(!pressed)
      }
      onClick?.(e)
    }

    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          toggleButtonVariants({ variant, size, pressed }),
          fullWidth && "w-full",
          className
        )}
        data-state={pressed ? "on" : "off"}
        onClick={handleClick}
        disabled={isDisabled}
        aria-pressed={pressed}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        
        {!loading && icon && iconPosition === "left" && (
          <span className="mr-2 h-4 w-4">{icon}</span>
        )}
        
        {children && (
          <span className="flex-1">{children}</span>
        )}
        
        {!loading && icon && iconPosition === "right" && (
          <span className="ml-2 h-4 w-4">{icon}</span>
        )}
      </button>
    )
  }
)
ToggleButton.displayName = "ToggleButton"

export { ToggleButton, toggleButtonVariants }
