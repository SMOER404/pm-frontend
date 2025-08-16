import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const menuVariants = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "",
        compact: "p-0",
        bordered: "border-2",
      },
      size: {
        sm: "min-w-[6rem] text-xs",
        default: "min-w-[8rem] text-sm",
        lg: "min-w-[10rem] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const menuItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive: "text-destructive focus:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface MenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>,
    VariantProps<typeof menuVariants> {
  trigger?: React.ReactNode
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  sideOffset?: number
  alignOffset?: number
  avoidCollisions?: boolean
  collisionBoundary?: Element | null | Array<Element | null>
  collisionPadding?: number | Partial<Record<"top" | "right" | "bottom" | "left", number>>
  arrowPadding?: number
  sticky?: "partial" | "always"
  hideWhenDetached?: boolean
  modal?: boolean
}

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof menuItemVariants> {
  icon?: React.ReactNode
  rightIcon?: React.ReactNode
  shortcut?: string
}

export interface MenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
  icon?: React.ReactNode
  shortcut?: string
}

export interface MenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {
  icon?: React.ReactNode
  shortcut?: string
}

export interface MenuSubProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Sub> {}

export interface MenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  icon?: React.ReactNode
  rightIcon?: React.ReactNode
  shortcut?: string
}

export interface MenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

export interface MenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

export interface MenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {}

export interface MenuGroupProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group> {}

export interface MenuRadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup> {}

const Menu = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Root>,
  MenuProps
>(({ 
  children, 
  trigger, 
  variant, 
  size,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  alignOffset = 0,
  avoidCollisions = true,
  collisionBoundary,
  collisionPadding = 0,
  arrowPadding = 0,
  sticky = "partial",
  hideWhenDetached = false,
  modal = true,
  ...props 
}, ref) => (
  <DropdownMenuPrimitive.Root {...props}>
    <DropdownMenuPrimitive.Trigger asChild>
      {trigger}
    </DropdownMenuPrimitive.Trigger>
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        arrowPadding={arrowPadding}
        sticky={sticky}
        hideWhenDetached={hideWhenDetached}
        modal={modal}
        className={cn(menuVariants({ variant, size }))}
      >
        {children}
        <DropdownMenuPrimitive.Arrow className="fill-current" />
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  </DropdownMenuPrimitive.Root>
))
Menu.displayName = DropdownMenuPrimitive.Root.displayName

const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  MenuItemProps
>(({ className, icon, rightIcon, shortcut, variant, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(menuItemVariants({ variant }), className)}
    {...props}
  >
    {icon && <span className="mr-2 h-4 w-4">{icon}</span>}
    <span className="flex-1">{children}</span>
    {shortcut && <span className="ml-auto text-xs tracking-widest opacity-60">{shortcut}</span>}
    {rightIcon && <span className="ml-2 h-4 w-4">{rightIcon}</span>}
  </DropdownMenuPrimitive.Item>
))
MenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  MenuCheckboxItemProps
>(({ className, icon, shortcut, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(menuItemVariants(), className)}
    {...props}
  >
    <DropdownMenuPrimitive.ItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Check className="h-4 w-4" />
    </DropdownMenuPrimitive.ItemIndicator>
    {icon && <span className="mr-2 h-4 w-4">{icon}</span>}
    <span className="flex-1">{children}</span>
    {shortcut && <span className="ml-auto text-xs tracking-widest opacity-60">{shortcut}</span>}
  </DropdownMenuPrimitive.CheckboxItem>
))
MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  MenuRadioItemProps
>(({ className, icon, shortcut, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(menuItemVariants(), className)}
    {...props}
  >
    <DropdownMenuPrimitive.ItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Circle className="h-2 w-2 fill-current" />
    </DropdownMenuPrimitive.ItemIndicator>
    {icon && <span className="mr-2 h-4 w-4">{icon}</span>}
    <span className="flex-1">{children}</span>
    {shortcut && <span className="ml-auto text-xs tracking-widest opacity-60">{shortcut}</span>}
  </DropdownMenuPrimitive.RadioItem>
))
MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const MenuSub = DropdownMenuPrimitive.Sub

const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  MenuSubTriggerProps
>(({ className, icon, rightIcon, shortcut, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      menuItemVariants(),
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {icon && <span className="mr-2 h-4 w-4">{icon}</span>}
    <span className="flex-1">{children}</span>
    {shortcut && <span className="ml-auto text-xs tracking-widest opacity-60">{shortcut}</span>}
    {rightIcon || <ChevronRight className="ml-auto h-4 w-4" />}
  </DropdownMenuPrimitive.SubTrigger>
))
MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  MenuSubContentProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      menuVariants(),
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  MenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  MenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const MenuGroup = DropdownMenuPrimitive.Group

const MenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export {
  Menu,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
  MenuSeparator,
  MenuLabel,
  MenuGroup,
  MenuRadioGroup,
  menuVariants,
  menuItemVariants,
}
