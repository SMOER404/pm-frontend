"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"

export interface FooterColumn {
  title: string
  links?: Array<{
    label: string
    href: string
  }>
  content?: React.ReactNode
}

export interface CustomFooterProps {
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
    href?: string
  }
  columns?: FooterColumn[]
  copyright?: string
  variant?: "default" | "dark" | "light"
  className?: string
  containerClassName?: string
  logoClassName?: string
  columnsClassName?: string
  copyrightClassName?: string
}

export default function CustomFooter({
  logo,
  columns = [],
  copyright = `© ${new Date().getFullYear()} Все права защищены.`,
  variant = "default",
  className,
  containerClassName,
  logoClassName,
  columnsClassName,
  copyrightClassName,
}: CustomFooterProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "dark":
        return "bg-gray-900 text-white"
      case "light":
        return "bg-gray-100 text-gray-900"
      case "default":
      default:
        return "bg-white text-gray-900 border-t border-gray-200"
    }
  }

  const getLinkClasses = () => {
    switch (variant) {
      case "dark":
        return "text-gray-300 hover:text-white transition-colors"
      case "light":
        return "text-gray-600 hover:text-gray-900 transition-colors"
      case "default":
      default:
        return "text-gray-600 hover:text-gray-900 transition-colors"
    }
  }

  return (
    <footer className={cn("py-12", getVariantClasses(), className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", columnsClassName)}>
          {/* Logo Column */}
          {logo && (
            <div>
              <div className="mb-4">
                <Link href={logo.href || "/"} className={cn("block", logoClassName)}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width || 150}
                    height={logo.height || 40}
                    className="h-auto"
                  />
                </Link>
              </div>
              <CustomTypography variant="body" className="text-gray-600">
                Ваш надежный партнер в мире моды и стиля
              </CustomTypography>
            </div>
          )}

          {/* Content Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <CustomTypography variant="h5" className="font-medium mb-4">
                {column.title}
              </CustomTypography>
              {column.links && (
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className={getLinkClasses()}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {column.content && column.content}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className={cn("border-t border-gray-200 mt-8 pt-8 text-center", copyrightClassName)}>
          <CustomTypography variant="body" className="text-gray-600">
            {copyright}
          </CustomTypography>
        </div>
      </div>
    </footer>
  )
} 