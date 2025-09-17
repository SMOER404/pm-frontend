'use client'

// CustomNavigationLoader not available in UI Kit
const CustomNavigationLoader = () => null
import { useLoading } from '@/shared/hooks/useLoading'

export const NavigationLoader = () => {
  const isLoading = useLoading()

  return <CustomNavigationLoader />
} 