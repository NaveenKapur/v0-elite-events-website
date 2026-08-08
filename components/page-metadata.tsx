import type { Metadata } from "next"

interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article"
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  canonical = "",
}: PageMetadataProps): Metadata {
  // Construct the full title with brand name
  const fullTitle = `${title} | 1DERS Events Solutions`

  // Base URL for canonical links
  const baseUrl = "https://1ders.in"

  return {
    title: title,
    description: description,
    keywords: [
      "event management",
      "corporate events",
      "destination weddings",
      "luxury events",
      "event planning",
      "1DERS",
      "India events",
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: "1DERS Events Solutions",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
  }
}

