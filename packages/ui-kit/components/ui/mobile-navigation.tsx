import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const mobileNavigationVariants = cva(
  "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-background border-t border-border",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-lg",
        bordered: "border-t-2 border-primary",
      },
      size: {
        sm: "h-12",
        default: "h-16",
        lg: "h-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const mobileNavigationItemVariants = cva(
  "flex flex-col items-center justify-center flex-1 min-w-0 transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground",
        active: "text-primary",
        disabled: "text-muted-foreground opacity-50 cursor-not-allowed",
      },
      size: {
        sm: "py-1 px-2",
        default: "py-2 px-3",
        lg: "py-3 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MobileNavigationItem {
  id: string
  label: string
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  disabled?: boolean
  badge?: string | number
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
}

export interface MobileNavigationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mobileNavigationVariants> {
  items: MobileNavigationItem[]
  activeItem?: string
  onItemClick?: (item: MobileNavigationItem) => void
  showLabels?: boolean
  maxItems?: number
}

const MobileNavigation = React.forwardRef<
  HTMLDivElement,
  MobileNavigationProps
>(({
  className,
  variant,
  size,
  items,
  activeItem,
  onItemClick,
  showLabels = true,
  maxItems = 5,
  ...props
}, ref) => {
  const visibleItems = items.slice(0, maxItems)

  const handleItemClick = (item: MobileNavigationItem) => {
    if (item.disabled) return
    
    if (item.onClick) {
      item.onClick()
    }
    
    if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <nav
      ref={ref}
      className={cn(mobileNavigationVariants({ variant, size }), className)}
      {...props}
    >
      {visibleItems.map((item) => {
        const isActive = activeItem === item.id
        const itemVariant = item.disabled ? "disabled" : isActive ? "active" : "default"
        
        return (
          <button
            key={item.id}
            className={cn(mobileNavigationItemVariants({ variant: itemVariant, size }))}
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <div className="relative">
              {item.icon && (
                <div className={cn(
                  "flex items-center justify-center",
                  size === "sm" ? "h-5 w-5" : size === "lg" ? "h-7 w-7" : "h-6 w-6"
                )}>
                  {item.icon}
                </div>
              )}
              {item.badge && (
                <span className={cn(
                  "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium",
                  item.badgeVariant === "destructive" && "bg-destructive text-destructive-foreground",
                  item.badgeVariant === "secondary" && "bg-secondary text-secondary-foreground",
                  item.badgeVariant === "outline" && "border border-border bg-background text-foreground",
                  (!item.badgeVariant || item.badgeVariant === "default") && "bg-primary text-primary-foreground"
                )}>
                  {typeof item.badge === "number" && item.badge > 99 ? "99+" : item.badge}
                </span>
              )}
            </div>
            {showLabels && (
              <span className={cn(
                "mt-1 text-center font-medium",
                size === "sm" ? "text-xs" : size === "lg" ? "text-sm" : "text-xs"
              )}>
                {item.label}
              </span>
            )}
          </button>
        )
      })}
    </nav>
  )
})
MobileNavigation.displayName = "MobileNavigation"

export { MobileNavigation, mobileNavigationVariants, mobileNavigationItemVariants }

