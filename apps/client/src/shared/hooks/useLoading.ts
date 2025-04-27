import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return isLoading
} 