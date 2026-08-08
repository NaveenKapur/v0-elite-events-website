import ContactPageClient from "./ContactPageClient"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with 1DERS Events Solutions to discuss your event requirements. We're here to bring your vision to life with our expertise in event planning and management.",
  canonical: "/contact",
  keywords: ["contact event planner", "event management contact", "event planning consultation", "hire event company"],
  ogImage: "/images/1ders-event-contact.webp",
})

export default function ContactPage() {
  return <ContactPageClient />
}

