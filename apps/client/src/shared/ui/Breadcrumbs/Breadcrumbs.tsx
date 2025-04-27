import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          {index > 0 && (
            <span className="mx-2 text-gray-400" aria-hidden="true">
              →
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
} 