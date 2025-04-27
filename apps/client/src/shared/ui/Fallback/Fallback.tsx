import { Spinner } from '../Spinner'

interface FallbackProps {
  className?: string
}

export const Fallback = ({ className = '' }: FallbackProps) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 ${className}`}>
      <Spinner size={48} className="text-white" />
    </div>
  )
} 