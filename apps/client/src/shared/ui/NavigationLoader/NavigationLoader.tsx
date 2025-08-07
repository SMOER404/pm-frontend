'use client'

import { CustomNavigationLoader } from "@poizon/ui-kit"
import { useLoading } from '@/shared/hooks/useLoading'

export const NavigationLoader = () => {
  const isLoading = useLoading()

  return <CustomNavigationLoader isLoading={isLoading} />
} 