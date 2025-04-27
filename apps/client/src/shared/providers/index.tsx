import React from 'react'
import { observer } from 'mobx-react-lite'

export const Providers: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
  return (
    <>
      {children}
    </>
  )
}) 