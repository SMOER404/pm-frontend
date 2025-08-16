import * as React from "react"
import { Star, Heart, ThumbsUp } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ratingVariants = cva(
  "inline-flex items-center gap-1",
  {
    variants: {
      variant: {
        default: "",
        stars: "",
        hearts: "",
        thumbs: "",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const ratingItemVariants = cva(
  "transition-colors duration-200 ease-in-out cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground",
        stars: "text-muted-foreground hover:text-yellow-400 data-[filled=true]:text-yellow-400",
        hearts: "text-muted-foreground hover:text-red-400 data-[filled=true]:text-red-400",
        thumbs: "text-muted-foreground hover:text-green-400 data-[filled=true]:text-green-400",
      },
      size: {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      disabled: false,
    },
  }
)

export interface RatingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ratingVariants> {
  value?: number
  maxValue?: number
  onValueChange?: (value: number) => void
  readOnly?: boolean
  disabled?: boolean
  showValue?: boolean
  allowHalf?: boolean
  icon?: React.ReactNode
  emptyIcon?: React.ReactNode
  filledIcon?: React.ReactNode
  halfIcon?: React.ReactNode
  label?: string
  showLabel?: boolean
}

export interface RatingItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ratingItemVariants> {
  index: number
  filled: boolean
  halfFilled?: boolean
  icon?: React.ReactNode
  emptyIcon?: React.ReactNode
  filledIcon?: React.ReactNode
  halfIcon?: React.ReactNode
  onHover?: (index: number) => void
  onLeave?: () => void
  onClick?: (index: number) => void
}

const getDefaultIcon = (variant: string) => {
  switch (variant) {
    case "stars":
      return <Star className="h-full w-full" />
    case "hearts":
      return <Heart className="h-full w-full" />
    case "thumbs":
      return <ThumbsUp className="h-full w-full" />
    default:
      return <Star className="h-full w-full" />
  }
}

const RatingItem = React.forwardRef<HTMLButtonElement, RatingItemProps>(
  ({ 
    className, 
    variant, 
    size,
    disabled,
    index,
    filled,
    halfFilled = false,
    icon,
    emptyIcon,
    filledIcon,
    halfIcon,
    onHover,
    onLeave,
    onClick,
    ...props 
  }, ref) => {
    const defaultIcon = getDefaultIcon(variant || "default")
    const currentIcon = filled ? (filledIcon || icon || defaultIcon) : 
                       halfFilled ? (halfIcon || icon || defaultIcon) : 
                       (emptyIcon || icon || defaultIcon)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(ratingItemVariants({ variant, size, disabled }), className)}
        data-filled={filled}
        data-half-filled={halfFilled}
        onMouseEnter={() => !disabled && onHover?.(index)}
        onMouseLeave={() => !disabled && onLeave?.()}
        onClick={() => !disabled && onClick?.(index)}
        disabled={disabled}
        aria-label={`Rate ${index} ${variant === "stars" ? "stars" : variant === "hearts" ? "hearts" : "thumbs"}`}
        {...props}
      >
        {currentIcon}
      </button>
    )
  }
)
RatingItem.displayName = "RatingItem"

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({ 
    className, 
    variant = "stars",
    size,
    value = 0,
    maxValue = 5,
    onValueChange,
    readOnly = false,
    disabled = false,
    showValue = false,
    allowHalf = false,
    icon,
    emptyIcon,
    filledIcon,
    halfIcon,
    label,
    showLabel = false,
    ...props 
  }, ref) => {
    const [hoverValue, setHoverValue] = React.useState(0)
    const [isHovering, setIsHovering] = React.useState(false)
    
    const currentValue = isHovering ? hoverValue : value
    const isDisabled = disabled || readOnly

    const handleItemHover = (index: number) => {
      if (!isDisabled) {
        setHoverValue(index)
        setIsHovering(true)
      }
    }

    const handleItemLeave = () => {
      if (!isDisabled) {
        setIsHovering(false)
      }
    }

    const handleItemClick = (index: number) => {
      if (!isDisabled && onValueChange) {
        onValueChange(index)
      }
    }

    const renderItem = (index: number) => {
      const filled = index <= currentValue
      const halfFilled = allowHalf && index === Math.ceil(currentValue) && currentValue % 1 !== 0

      return (
        <RatingItem
          key={index}
          index={index}
          filled={filled}
          halfFilled={halfFilled}
          variant={variant}
          size={size}
          disabled={isDisabled}
          icon={icon}
          emptyIcon={emptyIcon}
          filledIcon={filledIcon}
          halfIcon={halfIcon}
          onHover={handleItemHover}
          onLeave={handleItemLeave}
          onClick={handleItemClick}
        />
      )
    }

    return (
      <div className="flex items-center gap-2">
        <div
          ref={ref}
          className={cn(ratingVariants({ variant, size }), className)}
          role="group"
          aria-label={label || `Rating: ${value} out of ${maxValue}`}
          {...props}
        >
          {Array.from({ length: maxValue }, (_, index) => renderItem(index + 1))}
        </div>
        
        {showValue && (
          <span className="text-sm text-muted-foreground">
            {value}/{maxValue}
          </span>
        )}
        
        {showLabel && label && (
          <span className="text-sm text-muted-foreground">
            {label}
          </span>
        )}
      </div>
    )
  }
)
Rating.displayName = "Rating"

export { Rating, RatingItem, ratingVariants, ratingItemVariants }
