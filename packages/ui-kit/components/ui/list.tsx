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
      marker: {
        dot: "space-y-2",
        check: "space-y-2",
        none: "space-y-2",
      },
      spacing: {
        sm: "space-y-1",
        md: "space-y-2",
        lg: "space-y-3",
      },
    },
    defaultVariants: {
      type: "unordered",
      marker: "dot",
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
        dot: "before:content-['•'] before:text-primary before:font-bold before:flex-shrink-0 before:mt-0.5",
        check: "",
        none: "",
      },
    },
    defaultVariants: {
      type: "unordered",
      marker: "dot",
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
      className: cn(listVariants({ type, marker, spacing }), className),
      ...props,
    }
    
    const renderItems = () => {
      if (items) {
        return items.map((item, index) => (
          <ListItem key={index} type={type} marker={marker}>
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
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, type = "unordered", marker = "dot", children, ...props }, ref) => {
    return (
      <li
        className={cn(listItemVariants({ type, marker }), className)}
        ref={ref}
        {...props}
      >
        {marker === "check" && type === "unordered" && (
          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
        )}
        <span>{children}</span>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export { List, ListItem, listVariants, listItemVariants }
