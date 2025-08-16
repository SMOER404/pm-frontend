import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { BaseProps } from "./base-props"

const accordionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "border border-border rounded-lg divide-y divide-border",
        ghost: "space-y-2",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const accordionItemVariants = cva(
  "border-b border-border last:border-b-0",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "border-0",
        ghost: "border border-border rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
  {
    variants: {
      variant: {
        primary: "text-foreground",
        secondary: "text-foreground px-4",
        ghost: "text-foreground px-4",
      },
      size: {
        sm: "py-2 text-sm",
        md: "py-4 text-base",
        lg: "py-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const accordionContentVariants = cva(
  "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        primary: "pb-4 pt-0",
        secondary: "pb-4 pt-0 px-4",
        ghost: "pb-4 pt-0 px-4",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

// New simplified AccordionProps interface
interface AccordionProps extends BaseProps, VariantProps<typeof accordionVariants> {
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
    isDisabled?: boolean;
  }[];
  defaultOpenId?: string;
  expandIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  allowMultiple?: boolean;
  transitionDuration?: number;
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

// Legacy interfaces for backward compatibility
export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {
  value: string
}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  showIcon?: boolean
}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentVariants> {}

// New simplified Accordion component
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ 
  className, 
  variant, 
  size,
  items = [],
  defaultOpenId,
  expandIcon,
  collapseIcon,
  allowMultiple = false,
  transitionDuration = 200,
  type = "single",
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  isDisabled = false,
  isLoading = false,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  sx,
  ...props 
}, ref) => {
  // Handle items-based API
  if (items.length > 0) {
    const accordionType = allowMultiple ? "multiple" : "single";
    const accordionCollapsible = allowMultiple ? false : true;
    const accordionDefaultValue = defaultOpenId ? (allowMultiple ? [defaultOpenId] : defaultOpenId) : undefined;

    return (
      <AccordionPrimitive.Root
        ref={ref}
        type={accordionType}
        collapsible={accordionCollapsible}
        defaultValue={accordionDefaultValue}
        className={cn(accordionVariants({ variant, size }), className)}
        style={sx}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        {...props}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            variant={variant}
            disabled={item.isDisabled || isDisabled}
          >
            <AccordionTrigger
              variant={variant}
              size={size}
              icon={expandIcon || <ChevronDown className="h-4 w-4" />}
              showIcon={true}
            >
              {item.title}
            </AccordionTrigger>
                         <AccordionContent
               variant={variant}
               size={size}
             >
               {item.content}
             </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionPrimitive.Root>
    );
  }

  // Legacy API support
  return (
    <AccordionPrimitive.Root
      ref={ref}
      type={type}
      collapsible={collapsible}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={cn(accordionVariants({ variant, size }), className)}
      style={sx}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      {...props}
    >
      {props.children}
    </AccordionPrimitive.Root>
  );
});

Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, value, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    value={value}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
))
AccordionItem.displayName = AccordionPrimitive.Item.displayName

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ 
  className, 
  variant, 
  size,
  icon,
  iconPosition = "right",
  showIcon = true,
  children, 
  ...props 
}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant, size }), className)}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <span className="mr-2 h-4 w-4">{icon}</span>
      )}
      <span className="flex-1 text-left">{children}</span>
             {showIcon && (
         <span className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180">
           {icon || <ChevronDown className="h-4 w-4" />}
         </span>
       )}
      {iconPosition === "right" && icon && !showIcon && (
        <span className="ml-2 h-4 w-4">{icon}</span>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, variant, size, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentVariants({ variant, size }), className)}
    {...props}
  >
    <div className="pb-4 pt-0 text-sm">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
}
