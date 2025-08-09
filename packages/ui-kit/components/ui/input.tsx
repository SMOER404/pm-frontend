import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, Search, X } from "lucide-react"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out font-azorath",
  {
    variants: {
      variant: {
        default: "border-input hover:border-ring focus-visible:border-ring",
        filled: "border-transparent bg-muted hover:bg-muted/80 focus-visible:bg-background focus-visible:border-ring",
        outlined: "border-2 border-input hover:border-ring focus-visible:border-ring",
        ghost: "border-transparent bg-transparent hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:border-ring",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3 py-2",
        lg: "h-12 px-4 text-base",
        xl: "h-14 px-5 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: true,
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  clearable?: boolean
  onClear?: () => void
  error?: boolean
  errorMessage?: string
  label?: string
  helperText?: string
  fullWidth?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = "text", 
    variant, 
    size, 
    leftIcon, 
    rightIcon, 
    clearable = false,
    onClear,
    error = false,
    errorMessage,
    label,
    helperText,
    fullWidth = true,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(value || "")
    const inputRef = React.useRef<HTMLInputElement>(null)
    
    React.useImperativeHandle(ref, () => inputRef.current!)
    
    // Handle controlled/uncontrolled component
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }
    
    const handleClear = () => {
      if (!isControlled) {
        setInternalValue("")
      }
      onClear?.()
      inputRef.current?.focus()
    }
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }
    
    // Determine input type
    const inputType = type === "password" && showPassword ? "text" : type
    
    // Render icons
    const renderLeftIcon = () => {
      if (leftIcon) {
        return <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leftIcon}</div>
      }
      return null
    }
    
    const renderRightIcon = () => {
      const icons = []
      
      // Password visibility toggle
      if (type === "password") {
        icons.push(
          <button
            key="password-toggle"
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )
      }
      
      // Clear button
      if (clearable && currentValue && typeof currentValue === "string" && currentValue.length > 0) {
        icons.push(
          <button
            key="clear"
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        )
      }
      
      // Custom right icon
      if (rightIcon && icons.length === 0) {
        icons.push(
          <div key="custom-right" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {rightIcon}
          </div>
        )
      }
      
      return icons
    }
    
    const hasLeftIcon = !!leftIcon || type === "search"
    const hasRightIcon = !!rightIcon || type === "password" || (clearable && currentValue && typeof currentValue === "string" && currentValue.length > 0)
    
    return (
      <div className={cn("w-full", !fullWidth && "w-auto")}>
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant, size, fullWidth, className }),
              hasLeftIcon && "pl-10",
              hasRightIcon && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              "peer"
            )}
            ref={inputRef}
            value={currentValue}
            onChange={handleChange}
            {...props}
          />
          {type === "search" && !leftIcon && (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          )}
          {renderLeftIcon()}
          {renderRightIcon()}
        </div>
        {(errorMessage || helperText) && (
          <p className={cn(
            "mt-1 text-xs",
            error ? "text-destructive" : "text-muted-foreground"
          )}>
            {errorMessage || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
