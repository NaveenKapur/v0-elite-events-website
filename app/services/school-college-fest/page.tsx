import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "School & College Fest Services",
  description:
    "Comprehensive planning and management services for educational institution events, from cultural festivals to technical symposiums and sports competitions.",
  canonical: "/services/school-college-fest",
  keywords: [
    "college fest management",
    "school event planning",
    "campus festivals",
    "educational events",
    "student activities",
  ],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/college-fests.JPG",
})

export default function SchoolCollegeFestPage() {
  // Custom hero section for School/College Fest
  const schoolCollegeFestHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="https://www.nkdigital.agency/clients/oneders/img/school-college-fest-header.jpg"
          alt="School College Fest"
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
              Campus Celebrations
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              School & College
            </span>
            <span className="block mt-2">Fest Management</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Dynamic and engaging festival management for educational institutions that create memorable experiences and
            showcase student talent.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="School/College Fest"
        description="Dynamic and engaging festival management for educational institutions that create memorable experiences and showcase student talent."
        heroSection={schoolCollegeFestHero}
        features={[
          "Comprehensive fest planning and coordination",
          "Multi-event and competition management",
          "Cultural and technical event organization",
          "Celebrity and artist coordination",
          "Sponsorship acquisition and management",
          "Student volunteer training and coordination",
          "Security and crowd management",
          "Technical production and stage management",
        ]}
        caseStudies={[
          {
            title: "National Technical Festival",
            description:
              "We managed a premier technical festival for an engineering college, coordinating 50+ events, workshops, and competitions with 5,000+ participants from across the country, resulting in record attendance and sponsorship.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/kiet-jubin-fest.JPG",
          },
          {
            title: "Inter-College Cultural Fest",
            description:
              "Our team provided end-to-end management for a three-day cultural festival featuring competitions, workshops, and celebrity performances that attracted participants from 100+ colleges and universities.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/school-college-fest.jpeg",
          },
        ]}
      />
    </>
  )
}

