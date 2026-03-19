import { generateMetadata } from "@/components/page-metadata"
import BrandAdvertisementClientPage from "./BrandAdvertisementClientPage"

export const metadata = generateMetadata({
  title: "Brand & Advertisement Services",
  description:
    "Strategic brand positioning and innovative advertising solutions that create lasting impact and drive measurable results for your business.",
  canonical: "/services/brand-advertisement",
  keywords: ["brand strategy", "advertising services", "brand positioning", "marketing campaigns", "brand identity"],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/brand-advertisement-hero.jpg",
})

export default function BrandAdvertisementPage() {
  return <BrandAdvertisementClientPage />
}

