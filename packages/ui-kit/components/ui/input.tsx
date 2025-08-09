import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, Search, X, Loader2 } from "lucide-react"
import { InputError } from "./input-error"
import { BevelShape } from "./bevel-shape"

const inputVariants = cva(
  "relative w-full overflow-hidden transition-all duration-200 ease-in-out font-azorath border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        filled: "",
        outlined: "",
        ghost: "",
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
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  clearable?: boolean
  onClear?: () => void
  error?: boolean
  errorMessage?: string
  label?: string
  helperText?: string
  fullWidth?: boolean
  loading?: boolean
  mask?: string | RegExp[]
  maskPlaceholder?: string
  validation?: {
    pattern?: RegExp
    minLength?: number
    maxLength?: number
    required?: boolean
    custom?: (value: string) => string | null
  }
  bevelSize?: "xs" | "sm" | "md" | "lg" | "xl"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = "text", 
    variant, 
    size, 
    leftIcon, 
    rightIcon, 
    prefix,
    suffix,
    clearable = false,
    onClear,
    error = false,
    errorMessage,
    label,
    helperText,
    fullWidth = true,
    value,
    onChange,
    loading = false,
    mask,
    maskPlaceholder = "_",
    validation,
    bevelSize = "sm",
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(value || "")
    const [validationError, setValidationError] = React.useState<string | null>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    
    React.useImperativeHandle(ref, () => inputRef.current!)
    
    // Handle controlled/uncontrolled component
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    
    // Validation function
    const validateInput = React.useCallback((value: string) => {
      if (!validation) return null
      
      if (validation.required && !value.trim()) {
        return "This field is required"
      }
      
      if (validation.minLength && value.length < validation.minLength) {
        return `Minimum length is ${validation.minLength} characters`
      }
      
      if (validation.maxLength && value.length > validation.maxLength) {
        return `Maximum length is ${validation.maxLength} characters`
      }
      
      if (validation.pattern && !validation.pattern.test(value)) {
        return "Invalid format"
      }
      
      if (validation.custom) {
        return validation.custom(value)
      }
      
      return null
    }, [validation])
    
    // Validate on value change
    React.useEffect(() => {
      if (currentValue && validation) {
        const error = validateInput(currentValue as string)
        setValidationError(error)
      } else {
        setValidationError(null)
      }
    }, [currentValue, validation, validateInput])
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value
      
      // Apply mask if provided
      if (mask && typeof mask === "string") {
        // Simple mask implementation - can be enhanced with react-input-mask
        newValue = applyMask(newValue, mask)
      }
      
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }
    
    // Simple mask application
    const applyMask = (value: string, mask: string): string => {
      const digits = value.replace(/\D/g, '')
      let result = ''
      let digitIndex = 0
      
      for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
        if (mask[i] === '0' || mask[i] === '9') {
          result += digits[digitIndex]
          digitIndex++
        } else {
          result += mask[i]
        }
      }
      
      return result
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
    
    // Get colors based on variant and error state
    const getColors = () => {
      const colors = {
        brand: "#AFEB0F",
        primary: "#292D30",
        error: "#EF4444",
      }
      
      if (error || validationError) {
        return {
          fill: "transparent",
          stroke: colors.error,
        }
      }
      
      switch (variant) {
        case "default":
          return {
            fill: "transparent",
            stroke: colors.brand,
          }
        case "filled":
          return {
            fill: colors.primary + "1A", // 10% opacity
            stroke: colors.brand,
          }
        case "outlined":
          return {
            fill: "transparent",
            stroke: colors.brand,
          }
        case "ghost":
          return {
            fill: colors.primary + "1A", // 10% opacity
            stroke: "transparent",
          }
        default:
          return {
            fill: "transparent",
            stroke: colors.brand,
          }
      }
    }
    
    const colors = getColors()
    
    // Render left content (prefix or icon)
    const renderLeftContent = () => {
      if (prefix) {
        return <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium z-20">{prefix}</div>
      }
      if (leftIcon) {
        return <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-20">{leftIcon}</div>
      }
      return null
    }
    
    // Render right content (suffix or icons)
    const renderRightContent = () => {
      const elements = []
      
      // Loading spinner
      if (loading) {
        elements.push(
          <div key="loading" className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        )
      }
      
      // Password visibility toggle
      if (type === "password" && !loading) {
        elements.push(
          <button
            key="password-toggle"
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors z-20"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )
      }
      
      // Clear button
      if (clearable && currentValue && typeof currentValue === "string" && currentValue.length > 0 && !loading) {
        elements.push(
          <button
            key="clear"
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors z-20"
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        )
      }
      
      // Custom right icon
      if (rightIcon && elements.length === 0) {
        elements.push(
          <div key="custom-right" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground z-20">
            {rightIcon}
          </div>
        )
      }
      
      // Suffix
      if (suffix && elements.length === 0) {
        elements.push(
          <div key="suffix" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium z-20">
            {suffix}
          </div>
        )
      }
      
      return elements
    }
    
    const hasLeftContent = !!leftIcon || !!prefix || type === "search"
    const hasRightContent = !!rightIcon || !!suffix || type === "password" || (clearable && currentValue && typeof currentValue === "string" && currentValue.length > 0) || loading
    
    const finalError = error || !!validationError
    const finalErrorMessage = errorMessage || validationError
    
    return (
      <div className={cn("w-full", !fullWidth && "w-auto")}>
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {label}
          </label>
        )}
        <div className={cn(inputVariants({ variant, size, fullWidth, className }))}>
          {/* Beveled background using BevelShape component */}
          <BevelShape
            bevelSize={bevelSize}
            fill={colors.fill}
            stroke={colors.stroke}
            strokeWidth={finalError ? 2 : 1}
            className="absolute inset-0"
          />
          
          {/* Input content - positioned like in BevelBox */}
          <div className="relative z-10 h-full flex items-center">
            <input
              type={inputType}
              className={cn(
                "w-full h-full bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-0",
                hasLeftContent && "pl-10",
                hasRightContent && "pr-10",
                "peer"
              )}
              ref={inputRef}
              value={currentValue}
              onChange={handleChange}
              aria-invalid={finalError}
              aria-describedby={finalErrorMessage ? `${props.id || 'input'}-error` : undefined}
              {...props}
            />
            {type === "search" && !leftIcon && !prefix && (
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-20" size={16} />
            )}
            {renderLeftContent()}
            {renderRightContent()}
          </div>
        </div>
        <InputError 
          error={finalErrorMessage}
          helperText={helperText}
          id={finalErrorMessage ? `${props.id || 'input'}-error` : undefined}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
