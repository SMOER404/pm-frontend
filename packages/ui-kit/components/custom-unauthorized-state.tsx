"use client"

import React from "react"
import Link from "next/link"
import { cn } from "../lib/utils"
import CustomCard from "./custom-card"
import { CustomTypography } from "./custom-typography"
import CustomButton from "./custom-button"

export interface CustomUnauthorizedStateProps {
  title?: string
  description?: string
  loginText?: string
  loginHref?: string
  variant?: "default" | "compact" | "detailed"
  className?: string
  cardClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
}

export default function CustomUnauthorizedState({
  title = "Доступ запрещен",
  description = "Для просмотра этой страницы необходимо авторизоваться",
  loginText = "Войти",
  loginHref = "/auth/login",
  variant = "default",
  className,
  cardClassName,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}: CustomUnauthorizedStateProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "p-4"
      case "detailed":
        return "p-8"
      case "default":
      default:
        return "p-6"
    }
  }

  return (
    <div className={cn("flex items-center justify-center min-h-[400px]", className)}>
      <CustomCard className={cn("text-center max-w-md w-full", getVariantClasses(), cardClassName)}>
        <CustomTypography
          variant="h4"
          className={cn("mb-4", titleClassName)}
        >
          {title}
        </CustomTypography>
        
        <CustomTypography
          variant="body"
          className={cn("text-gray-500 mb-6", descriptionClassName)}
        >
          {description}
        </CustomTypography>
        
        <Link href={loginHref}>
          <CustomButton
            variant="primary"
            className={buttonClassName}
          >
            {loginText}
          </CustomButton>
        </Link>
      </CustomCard>
    </div>
  )
} 