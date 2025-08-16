import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  "flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        default: "border-input",
        outlined: "border-2 border-input",
        filled: "border-transparent bg-muted",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 text-base",
        xl: "h-14 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const selectContentVariants = cva(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const selectItemVariants = cva(
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        compact: "py-1 text-xs",
        spacious: "py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    VariantProps<typeof selectVariants> {
  placeholder?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  label?: string
  helperText?: string
  required?: boolean
  searchable?: boolean
  onSearchChange?: (value: string) => void
}

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectVariants> {
  icon?: React.ReactNode
}

export interface SelectValueProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value> {
  placeholder?: string
}

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    VariantProps<typeof selectContentVariants> {
  position?: "popper" | "item"
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
  alignOffset?: number
  avoidCollisions?: boolean
  collisionBoundary?: Element | null | Array<Element | null>
  collisionPadding?: number | Partial<Record<"top" | "right" | "bottom" | "left", number>>
  arrowPadding?: number
  sticky?: "partial" | "always"
  hideWhenDetached?: boolean
  updatePositionStrategy?: "optimized" | "always"
  onCloseAutoFocus?: (event: Event) => void
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void
  onFocusOutside?: (event: FocusOutsideEvent) => void
  onInteractOutside?: (event: InteractOutsideEvent) => void
  forceMount?: boolean
  loop?: boolean
  modal?: boolean
}

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof selectItemVariants> {
  value: string
  disabled?: boolean
  icon?: React.ReactNode
}

export interface SelectGroupProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> {
  label?: string
}

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>(({ 
  children,
  variant,
  size,
  placeholder,
  disabled = false,
  error = false,
  errorMessage,
  label,
  helperText,
  required,
  searchable = false,
  onSearchChange,
  ...props 
}, ref) => {
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearchChange?.(value)
  }

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      
      <SelectPrimitive.Root {...props}>
        <SelectTrigger 
          variant={variant} 
          size={size}
          disabled={disabled}
          error={error}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        
        <SelectContent variant="default">
          {searchable && (
            <div className="flex items-center px-3 py-2">
              <input
                className="flex h-8 w-full rounded-md bg-transparent px-3 py-1 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          )}
          {children}
        </SelectContent>
      </SelectPrimitive.Root>
      
      {(errorMessage || helperText) && (
        <div className={cn(
          "text-xs",
          errorMessage ? "text-destructive" : "text-muted-foreground"
        )}>
          {errorMessage || helperText}
        </div>
      )}
    </div>
  )
})
Select.displayName = SelectPrimitive.Root.displayName

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ 
  className, 
  variant, 
  size,
  icon,
  error = false,
  children, 
  ...props 
}, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      selectVariants({ variant, size }),
      error && "border-destructive focus:ring-destructive",
      className
    )}
    {...props}
  >
    {children}
    {icon || (
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    )}
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  SelectValueProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    className={cn("text-left", className)}
    {...props}
  />
))
SelectValue.displayName = SelectPrimitive.Value.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ 
  className, 
  variant,
  children, 
  position = "popper", 
  ...props 
}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(selectContentVariants({ variant }), className)}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ 
  className, 
  variant,
  icon,
  children, 
  ...props 
}, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemVariants({ variant }), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    
    {icon && <span className="mr-2 h-4 w-4">{icon}</span>}
    
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  SelectGroupProps
>(({ className, label, children, ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    className={cn("py-1.5", className)}
    {...props}
  >
    {label && (
      <SelectPrimitive.Label className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
        {label}
      </SelectPrimitive.Label>
    )}
    {children}
  </SelectPrimitive.Group>
))
SelectGroup.displayName = SelectPrimitive.Group.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  selectVariants,
  selectContentVariants,
  selectItemVariants,
}
