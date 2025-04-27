import Image from 'next/image'

interface SpinnerProps {
  size?: number
  className?: string
}

export const Spinner = ({ size = 40, className = '' }: SpinnerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/static/images/icon-white.svg"
        alt="Loading..."
        width={size}
        height={size}
        className="animate-spin"
        priority
      />
    </div>
  )
} 