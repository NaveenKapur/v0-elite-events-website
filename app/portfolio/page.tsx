import PortfolioClientPage from "./PortfolioClientPage"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Portfolio",
  description:
    "Explore our collection of extraordinary events and experiences that showcase our creativity, expertise, and attention to detail in event management across India.",
  canonical: "/portfolio",
  keywords: ["event portfolio", "event case studies", "event gallery", "successful events", "event showcases"],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/portfolio-showcase.jpg",
})

export default function PortfolioPage() {
  return <PortfolioClientPage />
}

