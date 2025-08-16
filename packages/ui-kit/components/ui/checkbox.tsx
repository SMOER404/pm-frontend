import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
  {
    variants: {
      variant: {
        default: "",
        outlined: "border-2",
      },
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string
  description?: string
  error?: boolean
  errorMessage?: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ 
  className, 
  variant, 
  size, 
  label,
  description,
  error = false,
  errorMessage,
  ...props 
}, ref) => {
  const id = React.useId()
  
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            checkboxVariants({ variant, size, className }),
            error && "border-destructive focus-visible:ring-destructive"
          )}
          id={id}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            {props.checked === 'indeterminate' ? (
              <Minus className="h-3 w-3" />
            ) : (
              <Check className="h-3 w-3" />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
      
      {errorMessage && (
        <p className="text-sm text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export interface CheckboxGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  options: Array<{
    value: string
    label: string
    description?: string
    disabled?: boolean
  }>
  orientation?: 'horizontal' | 'vertical'
  error?: boolean
  errorMessage?: string
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ 
    className, 
    value, 
    defaultValue, 
    onValueChange,
    options,
    orientation = 'vertical',
    error = false,
    errorMessage,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue || [])
    
    const currentValue = value !== undefined ? value : internalValue
    
    const handleValueChange = (optionValue: string, checked: boolean) => {
      const newValue = checked
        ? [...currentValue, optionValue]
        : currentValue.filter(v => v !== optionValue)
      
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "space-y-2",
          orientation === 'horizontal' && "flex flex-wrap gap-4",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            checked={currentValue.includes(option.value)}
            onCheckedChange={(checked) => handleValueChange(option.value, checked as boolean)}
            disabled={option.disabled}
            label={option.label}
            description={option.description}
            error={error}
          />
        ))}
        
        {errorMessage && (
          <p className="text-sm text-destructive">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)
CheckboxGroup.displayName = "CheckboxGroup"

export { Checkbox, CheckboxGroup, checkboxVariants }

