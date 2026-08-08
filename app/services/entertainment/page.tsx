import { generateMetadata } from "@/components/page-metadata"
import EntertainmentPageClient from "./EntertainmentPageClient"

export const metadata = generateMetadata({
  title: "Entertainment Services",
  description:
    "Captivating performances and entertainment experiences that create unforgettable moments and elevate your events with world-class talent and production.",
  canonical: "/services/entertainment",
  keywords: [
    "event entertainment",
    "celebrity performances",
    "live music events",
    "cultural performances",
    "corporate entertainment",
  ],
  ogImage: "/images/entertainment.jpeg",
})

export default function EntertainmentPage() {
  return <EntertainmentPageClient />
}

