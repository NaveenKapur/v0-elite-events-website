import ClientPage from "./ClientPage"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Premium Event Management Company in India",
  description:
    "1DERS Events Solutions creates extraordinary corporate events, destination weddings, and social gatherings with unparalleled creativity and flawless execution across India.",
  canonical: "/",
  keywords: ["premium events", "event company", "event management India", "corporate events", "wedding planning"],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/og-image.jpg",
})

export default function Home() {
  return <ClientPage />
}

