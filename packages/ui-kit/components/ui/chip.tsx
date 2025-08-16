import * as React from "react"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground",
        ghost: "border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base",
      },
      clickable: {
        true: "cursor-pointer",
        false: "",
      },
      removable: {
        true: "pr-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      clickable: false,
      removable: false,
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  icon?: React.ReactNode
  onRemove?: () => void
  disabled?: boolean
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className, 
    variant, 
    size,
    clickable,
    removable,
    icon,
    onRemove,
    disabled = false,
    children,
    onClick,
    ...props 
  }, ref) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!disabled && onRemove) {
        onRemove()
      }
    }

    const handleClick = (e: React.MouseEvent) => {
      if (!disabled && onClick) {
        onClick(e)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          chipVariants({ variant, size, clickable, removable }),
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        onClick={handleClick}
        role={clickable ? "button" : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="flex-1">{children}</span>
        {removable && onRemove && (
          <button
            type="button"
            className="ml-1 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleRemove}
            disabled={disabled}
            aria-label="Remove chip"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    )
  }
)
Chip.displayName = "Chip"

export { Chip, chipVariants }
