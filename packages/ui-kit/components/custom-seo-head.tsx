"use client"

import React from "react"
import Head from "next/head"

export interface CustomSeoHeadProps {
  title: string
  description: string
  image?: string
  url?: string
  siteUrl?: string
  defaultImage?: string
  type?: "website" | "article" | "product"
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  additionalMeta?: Array<{ name: string; content: string }>
  additionalLinks?: Array<{ rel: string; href: string }>
}

export default function CustomSeoHead({
  title,
  description,
  image,
  url,
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://poizon-market.ru",
  defaultImage = "/images/og-image.jpg",
  type = "website",
  twitterCard = "summary_large_image",
  additionalMeta = [],
  additionalLinks = [],
}: CustomSeoHeadProps) {
  const fullSiteUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl
  const fullImageUrl = image ? (image.startsWith("http") ? image : `${fullSiteUrl}${image}`) : `${fullSiteUrl}${defaultImage}`
  const currentUrl = url ? `${fullSiteUrl}${url}` : fullSiteUrl

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Дополнительные мета-теги */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={currentUrl} />

      {/* Пользовательские мета-теги */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}

      {/* Пользовательские ссылки */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
    </Head>
  )
} 