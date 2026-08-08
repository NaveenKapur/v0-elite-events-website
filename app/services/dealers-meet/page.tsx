import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Dealers Meet Services",
  description:
    "Strategic planning and execution of impactful dealer meetings that strengthen relationships and drive business growth for your distribution network.",
  canonical: "/services/dealers-meet",
  keywords: [
    "dealers meet",
    "distributor conference",
    "channel partner events",
    "business networking events",
    "sales network meetings",
  ],
  ogImage: "/images/header-dealers-meet.jpg",
})

export default function DealersMeetPage() {
  // Custom hero section for Dealers Meet
  const dealersMeetHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="/images/header-dealers-meet.jpg"
          alt="Dealers Meet"
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
              Strategic Business Gatherings
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Dealers
            </span>
            <span className="block mt-2">Meet</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Strategic planning and execution of impactful dealer meetings that strengthen relationships and drive
            business growth.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Dealers Meet"
        description="Strategic planning and execution of impactful dealer meetings that strengthen relationships and drive business growth."
        heroSection={dealersMeetHero}
        features={[
          "Strategic meeting planning and agenda development",
          "Venue selection and setup for optimal engagement",
          "Product showcase and demonstration coordination",
          "Sales strategy and training sessions",
          "Recognition and awards programs",
          "Networking opportunities and team building",
          "Entertainment and hospitality management",
          "Post-event follow-up and relationship building",
        ]}
        caseStudies={[
          {
            title: "Automotive Dealer Conference",
            description:
              "We designed and executed a national dealer conference for a leading automotive brand, featuring new product reveals, interactive training sessions, and strategic networking opportunities that resulted in a 30% increase in dealer satisfaction scores.",
            imageSrc: "/images/automotive-dealer-meet.jpeg",
          },
          {
            title: "FMCG Distribution Network Meet",
            description:
              "Our team managed a regional distributors meet for an FMCG company, creating an engaging program that combined business strategy sessions with recognition ceremonies and entertainment, strengthening the company's relationship with its distribution network.",
            imageSrc: "/images/dealers-meet1.jpg",
          },
        ]}
      />
    </>
  )
}

