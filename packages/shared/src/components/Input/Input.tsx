import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    '& fieldset': {
      borderColor: theme.palette.grey[200],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}))

export interface InputProps extends Omit<TextFieldProps, 'css'> {
  error?: boolean
  helperText?: string
}

export const Input: React.FC<InputProps> = ({ error, helperText, ...props }) => {
  return (
    <StyledTextField
      variant="outlined"
      fullWidth
      error={error}
      helperText={helperText}
      {...props}
    />
  )
} 