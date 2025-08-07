"use client"

import React from "react"
import Link from "next/link"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"
import CustomButton from "./custom-button"

export interface CustomNotFoundProps {
  code?: string
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: "default" | "compact" | "detailed"
  className?: string
  codeClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
}

export default function CustomNotFound({
  code = "404",
  title = "Страница не найдена",
  description = "К сожалению, запрашиваемая страница не существует или была удалена",
  buttonText = "Вернуться на главную",
  buttonHref = "/",
  variant = "default",
  className,
  codeClassName,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}: CustomNotFoundProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "min-h-[40vh]"
      case "detailed":
        return "min-h-[80vh]"
      case "default":
      default:
        return "min-h-[60vh]"
    }
  }

  return (
    <div className={cn("flex flex-col items-center justify-center px-4", getVariantClasses(), className)}>
      <CustomTypography
        variant="h1"
        className={cn("font-bold mb-4", codeClassName)}
      >
        {code}
      </CustomTypography>
      
      <CustomTypography
        variant="h2"
        className={cn("mb-6", titleClassName)}
      >
        {title}
      </CustomTypography>
      
      <CustomTypography
        variant="body"
        className={cn("text-gray-600 mb-8 text-center", descriptionClassName)}
      >
        {description}
      </CustomTypography>
      
      <Link href={buttonHref}>
        <CustomButton
          variant="primary"
          className={buttonClassName}
        >
          {buttonText}
        </CustomButton>
      </Link>
    </div>
  )
} 