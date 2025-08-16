import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const breadcrumbVariants = cva(
  "flex items-center space-x-1 text-sm font-medium",
  {
    variants: {
      variant: {
        default: "text-foreground",
        minimal: "text-muted-foreground",
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  maxItems?: number
  showIcons?: boolean
  homeIcon?: React.ReactNode
  onItemClick?: (item: BreadcrumbItem, index: number) => void
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    className, 
    variant, 
    size, 
    items, 
    separator = <ChevronRight className="h-4 w-4" />,
    maxItems,
    showIcons = false,
    homeIcon = <Home className="h-4 w-4" />,
    onItemClick,
    ...props 
  }, ref) => {
    // Handle max items and ellipsis
    const visibleItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items
      }
      
      const start = Math.ceil(maxItems / 2)
      const end = items.length - Math.floor(maxItems / 2)
      
      return [
        ...items.slice(0, start),
        { label: "...", href: undefined, icon: undefined },
        ...items.slice(end)
      ]
    }, [items, maxItems])

    const handleItemClick = (item: BreadcrumbItem, index: number) => {
      if (item.href) {
        window.location.href = item.href
      }
      onItemClick?.(item, index)
    }

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(breadcrumbVariants({ variant, size, className }))}
        {...props}
      >
        <ol className="flex items-center space-x-1">
          {visibleItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-1 text-muted-foreground" aria-hidden="true">
                  {separator}
                </span>
              )}
              
              {item.label === "..." ? (
                <span className="text-muted-foreground" aria-hidden="true">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => handleItemClick(item, index)}
                  className={cn(
                    "flex items-center space-x-1 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm",
                    index === visibleItems.length - 1 
                      ? "text-foreground font-semibold" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  disabled={index === visibleItems.length - 1}
                  aria-current={index === visibleItems.length - 1 ? "page" : undefined}
                >
                  {showIcons && item.icon && (
                    <span className="flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {index === 0 && showIcons && !item.icon && (
                    <span className="flex-shrink-0" aria-hidden="true">
                      {homeIcon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }
)

Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb, breadcrumbVariants }

