'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface SnackbarContextType {
  showSnackbar: (message: string) => void
  hideSnackbar: () => void
  message: string
  isOpen: boolean
}

const SnackbarContext = createContext<SnackbarContextType | null>(null)

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const showSnackbar = (msg: string) => {
    setMessage(msg)
    setIsOpen(true)
  }

  const hideSnackbar = () => {
    setIsOpen(false)
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar, message, isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {message}
        </div>
      )}
    </SnackbarContext.Provider>
  )
}

export function useSnackbar() {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within SnackbarProvider')
  }
  return context
} 