import { generateMetadata } from "@/components/page-metadata"
import RoyalWeddingsClientPage from "./RoyalWeddingsClientPage"

export const metadata = generateMetadata({
  title: "Royal Weddings in Rajasthan",
  description:
    "Experience the grandeur of a royal Rajasthani wedding amidst historic palaces and majestic landscapes. Our bespoke wedding experiences blend tradition with luxury.",
  canonical: "/experiences/royal-weddings",
  keywords: ["royal wedding", "destination wedding", "Rajasthan wedding", "palace wedding", "luxury wedding"],
  ogImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royal-Wedding-in-Rajasthan.jpg-2KtJkUQ2pAfQgoAS35jskIkxdgC5ES.jpeg",
})

export default function RoyalWeddingsPage() {
  return <RoyalWeddingsClientPage />
}

