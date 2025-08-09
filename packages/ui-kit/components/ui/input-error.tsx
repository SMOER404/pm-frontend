import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: string | null
  helperText?: string
}

const InputError = React.forwardRef<HTMLParagraphElement, InputErrorProps>(
  ({ className, error, helperText, ...props }, ref) => {
    if (!error && !helperText) return null
    
    return (
      <p
        ref={ref}
        className={cn(
          "mt-1 text-xs",
          error ? "text-destructive" : "text-muted-foreground"
        )}
        role={error ? "alert" : undefined}
        {...props}
      >
        {error || helperText}
      </p>
    )
  }
)

InputError.displayName = "InputError"

export { InputError }
