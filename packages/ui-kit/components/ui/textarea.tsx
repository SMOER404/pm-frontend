import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outlined: "border-2",
      },
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        default: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[100px] px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean
  errorMessage?: string
  label?: string
  helperText?: string
  required?: boolean
  autoResize?: boolean
  maxLength?: number
  showCharacterCount?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant, 
    size, 
    error = false,
    errorMessage,
    label,
    helperText,
    required,
    autoResize = false,
    maxLength,
    showCharacterCount = false,
    rows = 3,
    minRows = 3,
    maxRows = 10,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || "")
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    
    React.useImperativeHandle(ref, () => textareaRef.current!)
    
    // Handle controlled/uncontrolled component
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    
    // Auto-resize functionality
    const handleResize = React.useCallback(() => {
      if (!autoResize || !textareaRef.current) return
      
      const textarea = textareaRef.current
      textarea.style.height = 'auto'
      
      const computedStyle = window.getComputedStyle(textarea)
      const lineHeight = parseInt(computedStyle.lineHeight) || 20
      const paddingTop = parseInt(computedStyle.paddingTop) || 0
      const paddingBottom = parseInt(computedStyle.paddingBottom) || 0
      
      const minHeight = lineHeight * minRows + paddingTop + paddingBottom
      const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom
      
      const scrollHeight = textarea.scrollHeight
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight)
      
      textarea.style.height = `${newHeight}px`
    }, [autoResize, minRows, maxRows])
    
    // Resize on value change
    React.useEffect(() => {
      handleResize()
    }, [currentValue, handleResize])
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      
      // Check maxLength
      if (maxLength && newValue.length > maxLength) {
        return
      }
      
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }
    
    const characterCount = typeof currentValue === 'string' ? currentValue.length : 0
    const hasMaxLength = maxLength && maxLength > 0
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <textarea
            className={cn(
              textareaVariants({ variant, size, className }),
              error && "border-destructive focus-visible:ring-destructive"
            )}
            ref={textareaRef}
            value={currentValue}
            onChange={handleChange}
            rows={autoResize ? minRows : rows}
            maxLength={maxLength}
            aria-invalid={error}
            aria-describedby={
              errorMessage || helperText || (showCharacterCount && hasMaxLength) 
                ? `${props.id || 'textarea'}-description` 
                : undefined
            }
            {...props}
          />
          
          {showCharacterCount && hasMaxLength && (
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
              {characterCount}/{maxLength}
            </div>
          )}
        </div>
        
        {(errorMessage || helperText || (showCharacterCount && hasMaxLength)) && (
          <div 
            id={`${props.id || 'textarea'}-description`}
            className={cn(
              "text-xs",
              errorMessage ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {errorMessage || helperText || (showCharacterCount && hasMaxLength ? `${characterCount}/${maxLength} characters` : '')}
          </div>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }

