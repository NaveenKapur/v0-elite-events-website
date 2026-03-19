import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import { EventPlanningBusinessSchema } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "1DERS Events Solutions | Premium Event Management Company",
    template: "%s | 1DERS Events Solutions",
  },
  description:
    "1DERS Events Solutions specializes in creating extraordinary corporate events, destination weddings, and social gatherings with unparalleled creativity and flawless execution.",
  keywords: [
    "event management",
    "corporate events",
    "destination weddings",
    "luxury events",
    "event planning",
    "1DERS",
    "India events",
  ],
  authors: [{ name: "1DERS Events Solutions" }],
  creator: "1DERS Events Solutions",
  publisher: "1DERS Events Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://1ders.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "1DERS Events Solutions | Premium Event Management Company",
    description:
      "Creating extraordinary corporate events, destination weddings, and social gatherings with unparalleled creativity and flawless execution.",
    url: "https://1ders.in",
    siteName: "1DERS Events Solutions",
    images: [
      {
        url: "https://1ders.in/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1DERS Events Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1DERS Events Solutions | Premium Event Management Company",
    description:
      "Creating extraordinary corporate events, destination weddings, and social gatherings with unparalleled creativity and flawless execution.",
    images: ["https://1ders.in/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
        <EventPlanningBusinessSchema />
      </head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'