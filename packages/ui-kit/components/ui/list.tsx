import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const listVariants = cva(
  "font-azorath",
  {
    variants: {
      type: {
        ordered: "list-decimal list-inside",
        unordered: "list-none",
      },
      spacing: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      type: "unordered",
      spacing: "md",
    },
  }
)

const listItemVariants = cva(
  "flex items-start gap-2",
  {
    variants: {
      type: {
        ordered: "",
        unordered: "",
      },
      marker: {
        dot: "before:content-['•'] before:text-[#AFEB0F] before:font-bold before:flex-shrink-0 before:mt-0.5",
        check: "",
        none: "",
      },
      spacing: {
        sm: "mb-1 last:mb-0",
        md: "mb-2 last:mb-0",
        lg: "mb-3 last:mb-0",
      },
    },
    defaultVariants: {
      type: "unordered",
      marker: "dot",
      spacing: "md",
    },
  }
)

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    VariantProps<typeof listVariants> {
  type?: "ordered" | "unordered"
  marker?: "dot" | "check" | "none"
  spacing?: "sm" | "md" | "lg"
  items?: React.ReactNode[]
}

const List = React.forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  ({ 
    className, 
    type = "unordered", 
    marker = "dot", 
    spacing = "md", 
    items, 
    children, 
    ...props 
  }, ref) => {
    const baseProps = {
      className: cn(listVariants({ type, spacing }), className),
      ...props,
    }
    
    const renderItems = () => {
      if (items) {
        return items.map((item, index) => (
          <ListItem key={index} type={type} marker={marker} spacing={spacing}>
            {item}
          </ListItem>
        ))
      }
      return children
    }

    if (type === "ordered") {
      return (
        <ol {...baseProps} ref={ref as React.Ref<HTMLOListElement>}>
          {renderItems()}
        </ol>
      )
    }
    
    return (
      <ul {...baseProps} ref={ref as React.Ref<HTMLUListElement>}>
        {renderItems()}
      </ul>
    )
  }
)
List.displayName = "List"

export interface ListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listItemVariants> {
  type?: "ordered" | "unordered"
  marker?: "dot" | "check" | "none"
  spacing?: "sm" | "md" | "lg"
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, type = "unordered", marker = "dot", spacing = "md", children, ...props }, ref) => {
    return (
      <li
        className={cn(listItemVariants({ type, marker, spacing }), className)}
        ref={ref}
        {...props}
      >
        {marker === "check" && type === "unordered" && (
          <Check className="h-4 w-4 text-[#AFEB0F] flex-shrink-0 mt-0.5" aria-hidden="true" />
        )}
        {marker === "dot" && type === "unordered" && (
          <svg 
            className="h-4 w-4 text-[#AFEB0F] flex-shrink-0 mt-0.5" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="6" />
          </svg>
        )}
        <span>{children}</span>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export { List, ListItem, listVariants, listItemVariants }
