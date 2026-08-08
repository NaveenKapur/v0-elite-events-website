import ServicesPageClient from "./ServicesPageClient"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Our Services",
  description:
    "Explore our comprehensive range of event planning and management services, from luxury destination weddings to corporate events, product launches, and social celebrations.",
  canonical: "/services",
  keywords: [
    "event services",
    "event planning services",
    "corporate event services",
    "wedding planning services",
    "event management offerings",
  ],
  ogImage: "/images/services-header.jpg",
})

export default function ServicesPage() {
  return <ServicesPageClient />
}

