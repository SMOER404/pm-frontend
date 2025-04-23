import Head from 'next/head'

interface SeoHeadProps {
  title: string
  description: string
  image?: string
  url?: string
}

export const SeoHead = ({ title, description, image, url }: SeoHeadProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://poizon-market.ru'
  const defaultImage = `${siteUrl}/images/og-image.jpg`
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Дополнительные мета-теги */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={currentUrl} />
    </Head>
  )
} 