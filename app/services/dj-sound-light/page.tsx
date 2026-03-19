import ServiceTemplate from "../service-template"
import Image from "next/image"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "DJ, Sound & Light Services",
  description:
    "State-of-the-art audio-visual solutions and professional DJ services to create the perfect atmosphere for your event. From corporate functions to weddings and celebrations.",
  canonical: "/services/dj-sound-light",
  keywords: [
    "event DJ services",
    "sound and lighting",
    "audio-visual solutions",
    "event production",
    "event technical services",
  ],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/lightning-dj-sound.jpg",
})

export default function DJSoundLightPage() {
  // Custom hero section for DJ Sound & Light
  const djSoundLightHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="https://www.nkdigital.agency/clients/oneders/img/lightning-dj-sound.jpg"
          alt="DJ Sound and Light"
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
              Immersive Audio-Visual Experiences
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              DJ Sound
            </span>
            <span className="block mt-2">& Light</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            State-of-the-art audio-visual solutions and professional DJ services to create the perfect atmosphere for
            your event.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <ServiceTemplate
        title="DJ Sound & Light"
        description="State-of-the-art audio-visual solutions and professional DJ services to create the perfect atmosphere for your event."
        heroSection={djSoundLightHero}
        features={[
          "Professional DJ services for all event types",
          "Custom sound design and engineering",
          "High-end sound systems and equipment",
          "Intelligent lighting design and execution",
          "LED walls and video mapping solutions",
          "Special effects (fog, haze, pyrotechnics)",
          "Stage design and production",
          "Technical direction and management",
        ]}
        caseStudies={[
          {
            title: "Corporate Product Launch",
            description:
              "We designed and executed a comprehensive audio-visual experience for a major product launch, featuring custom sound design, synchronized lighting, and immersive video mapping that highlighted the product's features and created a memorable reveal moment.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/dj-sound-and-light-show.webp",
          },
          {
            title: "Destination Wedding Production",
            description:
              "Our team provided end-to-end DJ, sound, and lighting solutions for a three-day destination wedding, creating distinct atmospheres for each event from an elegant welcome dinner to a high-energy reception celebration.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/destination-wedding-dj.jpeg",
          },
        ]}
      />
    </>
  )
}

