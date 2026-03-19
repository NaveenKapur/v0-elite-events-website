import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Event Management Services",
  description:
    "Comprehensive event planning and management services that transform your vision into flawlessly executed experiences for corporate and social events.",
  canonical: "/services/event-management",
  keywords: ["event management", "event planning", "event coordination", "event execution", "event logistics"],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/event-managment-header.jpg",
})

export default function EventManagementPage() {
  // Custom hero section for Event Management
  const eventManagementHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="https://www.nkdigital.agency/clients/oneders/img/event-managment-header.jpg"
          alt="Event Management"
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
              Flawless Execution
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Event
            </span>
            <span className="block mt-2">Management</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Comprehensive event planning and management services that transform your vision into flawlessly executed
            experiences.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Event Management"
        description="Comprehensive event planning and management services that transform your vision into flawlessly executed experiences."
        heroSection={eventManagementHero}
        features={[
          "End-to-end event planning and coordination",
          "Venue selection and management",
          "Budget planning and management",
          "Vendor selection and coordination",
          "On-site event management and execution",
          "Guest management and RSVP tracking",
          "Risk assessment and contingency planning",
          "Post-event evaluation and reporting",
        ]}
        caseStudies={[
          {
            title: "International Corporate Conference",
            description:
              "We managed a three-day international conference for 500+ attendees, handling everything from venue selection and speaker coordination to technical production and hospitality management, resulting in the client's highest-rated event to date.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/event-management-abroad.jpg",
          },
          {
            title: "Celebrity Wedding Management",
            description:
              "Our team provided comprehensive management for a high-profile wedding, coordinating multiple events across various venues while ensuring privacy, security, and flawless execution of the couple's unique vision.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/event-management.jpeg",
          },
        ]}
      />
    </>
  )
}

