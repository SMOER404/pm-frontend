import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './theme'
import { observer } from 'mobx-react-lite'

export const Providers: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}) 