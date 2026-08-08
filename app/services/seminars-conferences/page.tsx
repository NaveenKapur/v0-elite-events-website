import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Seminars & Conferences Services",
  description:
    "Professional planning and execution of knowledge-sharing events that facilitate meaningful connections and impactful learning for your organization.",
  canonical: "/services/seminars-conferences",
  keywords: [
    "conference planning",
    "seminar organization",
    "corporate conferences",
    "knowledge events",
    "business seminars",
  ],
  ogImage: "/images/seminar-conference-hero.jpg",
})

export default function SeminarsConferencesPage() {
  // Custom hero section for Seminars & Conferences
  const seminarsConferencesHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="/images/seminar-conference-hero.jpg"
          alt="Seminars and Conferences"
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
              Knowledge Exchange
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Seminars &
            </span>
            <span className="block mt-2">Conferences</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Professional planning and execution of knowledge-sharing events that facilitate meaningful connections and
            impactful learning.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Seminars & Conferences"
        description="Professional planning and execution of knowledge-sharing events that facilitate meaningful connections and impactful learning."
        heroSection={seminarsConferencesHero}
        features={[
          "Strategic conference planning and agenda development",
          "Speaker selection and management",
          "Venue selection and setup optimization",
          "Registration and attendee management",
          "Technical production and AV management",
          "Breakout session coordination",
          "Networking opportunities and activities",
          "Virtual and hybrid event capabilities",
        ]}
        caseStudies={[
          {
            title: "International Medical Conference",
            description:
              "We managed a three-day medical conference with 1,500+ attendees from 30+ countries, coordinating scientific sessions, workshops, poster presentations, and networking events that received exceptional feedback from participants.",
            imageSrc: "/images/seminar-conferences.jpg",
          },
          {
            title: "Leadership Development Seminar Series",
            description:
              "Our team developed and executed a series of executive leadership seminars across multiple cities, creating consistent high-quality experiences while adapting to different venues and audience needs.",
            imageSrc: "/images/seminar-management.jpg",
          },
        ]}
      />
    </>
  )
}

