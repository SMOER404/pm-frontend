import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const radioGroupVariants = cva(
  "peer aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  options: Array<{
    value: string
    label: string
    description?: string
    disabled?: boolean
  }>
  orientation?: 'horizontal' | 'vertical'
  error?: boolean
  errorMessage?: string
  required?: boolean
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ 
  className, 
  options,
  orientation = 'vertical',
  error = false,
  errorMessage,
  required,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(
          "space-y-2",
          orientation === 'horizontal' && "flex flex-wrap gap-4",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-start space-x-2">
            <RadioGroupPrimitive.Item
              value={option.value}
              id={option.value}
              disabled={option.disabled}
              className={cn(
                radioGroupVariants(),
                error && "border-destructive focus-visible:ring-destructive"
              )}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={option.value}
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  option.disabled && "cursor-not-allowed opacity-70"
                )}
              >
                {option.label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>
              {option.description && (
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </RadioGroupPrimitive.Root>
      
      {errorMessage && (
        <p className="text-sm text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string
  description?: string
}

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ 
  className, 
  label,
  description,
  ...props 
}, ref) => {
  const id = React.useId()
  
  return (
    <div className="flex items-start space-x-2">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(radioGroupVariants(), className)}
        id={id}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      
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
  )
})
Radio.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, Radio, radioGroupVariants }

