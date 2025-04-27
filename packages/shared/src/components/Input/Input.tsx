import React from 'react'
import styles from './Input.module.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  helperText?: string
  fullWidth?: boolean
}

export const Input: React.FC<InputProps> = ({ 
  label,
  error,
  helperText,
  fullWidth = true,
  className,
  ...props 
}) => {
  return (
    <div className={`${styles.inputWrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <input 
        className={`${styles.input} ${error ? styles.error : ''} ${className || ''}`}
        {...props}
      />
      {helperText && (
        <span className={`${styles.helperText} ${error ? styles.error : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  )
} 