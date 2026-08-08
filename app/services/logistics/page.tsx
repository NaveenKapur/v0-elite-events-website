import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Event Logistics Services",
  description:
    "Comprehensive logistics solutions that ensure the smooth and efficient execution of your event, from start to finish with meticulous planning and coordination.",
  canonical: "/services/logistics",
  keywords: ["event logistics", "event operations", "venue management", "event transportation", "event equipment"],
  ogImage: "/images/logistics-.jpg",
})

export default function LogisticsPage() {
  // Custom hero section for Logistics
  const logisticsHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="/images/logistics-.jpg"
          alt="Logistics Services - Aerial view of distribution center with trucks and warehouses"
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
              Seamless Event Operations
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Event
            </span>{" "}
            Logistics
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Comprehensive logistics solutions that ensure the smooth and efficient execution of your event, from start
            to finish.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Logistics"
        description="Comprehensive logistics solutions that ensure the smooth and efficient execution of your event, from start to finish."
        heroSection={logisticsHero}
        features={[
          "Venue selection and setup",
          "Transportation and accommodation management",
          "Equipment rental and staging",
          "Vendor coordination and management",
          "On-site logistics and operations",
          "Security and crowd management",
          "Permitting and compliance",
          "Post-event cleanup and dismantling",
        ]}
        caseStudies={[
          {
            title: "Large-Scale Music Festival",
            description:
              "We managed all logistics for a three-day music festival with 50,000+ attendees, coordinating transportation, security, vendor management, and on-site operations to ensure a safe and seamless experience.",
            imageSrc: "/images/logistics-management-small.jpg",
          },
          {
            title: "International Product Launch",
            description:
              "Our team handled the complex logistics for a global product launch, coordinating international shipping, customs clearance, venue setup, and on-site support across multiple countries.",
            imageSrc: "/images/logistics-management-tour.webp",
          },
        ]}
      />
    </>
  )
}

