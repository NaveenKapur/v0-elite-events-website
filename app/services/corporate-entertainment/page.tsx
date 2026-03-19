import { generateMetadata } from "@/components/page-metadata"
import CorporateEntertainmentClientPage from "./CorporateEntertainmentClientPage"

export const metadata = generateMetadata({
  title: "Corporate Entertainment Services",
  description:
    "Extraordinary entertainment solutions designed specifically for corporate audiences to engage, inspire, and create memorable experiences at business events.",
  canonical: "/services/corporate-entertainment",
  keywords: [
    "corporate entertainment",
    "business event entertainment",
    "corporate performances",
    "executive events",
    "corporate galas",
  ],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/corporate-entertainment-header.jpeg",
})

export default function CorporateEntertainmentPage() {
  return <CorporateEntertainmentClientPage />
}

