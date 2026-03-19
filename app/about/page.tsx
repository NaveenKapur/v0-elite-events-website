import AboutPageClient from "./AboutPageClient"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "About Us",
  description:
    "Discover the story behind 1DERS Events Solutions, a premier event management company with over a decade of experience creating extraordinary experiences across India and globally.",
  canonical: "/about",
  keywords: ["about 1DERS", "event company history", "event management team", "event planning expertise"],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/about-1ders.jpg",
})

export default function AboutPage() {
  return <AboutPageClient />
}

