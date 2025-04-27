'use client'

import { Fallback } from '../Fallback'
import { useLoading } from '@/shared/hooks/useLoading'

export const NavigationLoader = () => {
  const isLoading = useLoading()

  if (!isLoading) return null

  return <Fallback />
} 