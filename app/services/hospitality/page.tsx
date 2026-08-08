import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Hospitality Services",
  description:
    "Comprehensive hospitality services that ensure your guests have a seamless and unforgettable experience at your events with personalized attention.",
  canonical: "/services/hospitality",
  keywords: ["event hospitality", "guest management", "VIP services", "concierge services", "event catering"],
  ogImage: "/images/hospitality.webp",
})

export default function HospitalityPage() {
  // Custom hero section for Hospitality
  const hospitalityHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="/images/hospitality.webp"
          alt="Hospitality Services - Professional concierge desk with service bell"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
            <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80 [text-shadow:_0_1px_1px_rgba(0,0,0,0.8)]">
              Exceptional Guest Experiences
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Hospitality
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Comprehensive hospitality services that ensure your guests have a seamless and unforgettable experience.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Hospitality"
        description="Comprehensive hospitality services that ensure your guests have a seamless and unforgettable experience."
        heroSection={hospitalityHero}
        features={[
          "Guest accommodation and transportation management",
          "Concierge services and personalized assistance",
          "Catering and beverage services",
          "Event staffing and security",
          "VIP and executive services",
          "Welcome and farewell amenities",
          "On-site medical support",
          "Cultural and recreational activities",
        ]}
        caseStudies={[
          {
            title: "International Corporate Summit",
            description:
              "We provided comprehensive hospitality services for a global corporate summit, managing accommodation, transportation, catering, and on-site support for 800+ international delegates, resulting in exceptional satisfaction scores.",
            imageSrc: "/images/international-corporate-hospitality.jpg",
          },
          {
            title: "Luxury Destination Wedding",
            description:
              "Our team managed all aspects of hospitality for a high-profile destination wedding, ensuring seamless travel, accommodation, and personalized services for 250 guests, creating a truly unforgettable experience.",
            imageSrc: "/images/luxury-destination-wedding.jpg",
          },
        ]}
      />
    </>
  )
}

