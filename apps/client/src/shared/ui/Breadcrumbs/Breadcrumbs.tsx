import Link from 'next/link'
import { CustomTypography } from "@poizon/ui-kit";

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 mb-6 uppercase">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          {index > 0 && (
            <CustomTypography variant="body2" className="mx-2 text-primary-light" aria-hidden="true">/</CustomTypography>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-primary transition-colors no-underline hover:no-underline"
            >
              <CustomTypography variant="body2">{item.label}</CustomTypography>
            </Link>
          ) : (
            <CustomTypography variant="body2" className="text-gray-900 font-medium">{item.label}</CustomTypography>
          )}
        </div>
      ))}
    </nav>
  )
} 