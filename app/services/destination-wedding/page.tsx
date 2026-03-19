import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Destination Wedding Services",
  description:
    "Create your dream destination wedding with 1DERS Events Solutions. We offer comprehensive planning and execution services for luxury weddings at exotic locations across India and globally.",
  canonical: "/services/destination-wedding",
  keywords: [
    "destination wedding",
    "luxury wedding",
    "exotic wedding locations",
    "wedding planning India",
    "international wedding planning",
  ],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/destination-weddings-india.jpg",
})

export default function DestinationWeddingPage() {
  // Custom hero section for Destination Wedding
  const destinationWeddingHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="https://www.nkdigital.agency/clients/oneders/img/destination-weddings-india.jpg"
          alt="Destination Wedding Events"
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
              Exotic Locations
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Destination
            </span>{" "}
            Wedding
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            We will make your dream destination wedding a reality.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Destination Wedding"
        description="We will make your dream destination wedding a reality."
        heroSection={destinationWeddingHero}
        features={[
          "Venue selection and management",
          "Customized décor and styling",
          "Catering and menu design",
          "Entertainment and cultural performances",
          "Guest accommodation and transportation",
          "Photography and videography coordination",
        ]}
        caseStudies={[
          {
            title: "Royal Palace Wedding",
            description: "An opulent royal palace wedding in Rajasthan with 300 international guests.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/royal-rajasthan-wedding.webp",
          },
          {
            title: "Beach Wedding in Goa",
            description: "A romantic beachfront celebration with 250 guests.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/goa-wedding-view.avif",
          },
        ]}
      />
    </>
  )
}

