import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Stall Fabrication Services",
  description:
    "Custom-designed and expertly fabricated exhibition stalls that showcase your brand and create engaging visitor experiences at trade shows and exhibitions.",
  canonical: "/services/stall-fabrication",
  keywords: [
    "stall fabrication",
    "exhibition booth design",
    "trade show displays",
    "custom booth construction",
    "exhibition stand design",
  ],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/wooden-stall-fabrication.jpeg",
})

export default function StallFabricationPage() {
  // Custom hero section for Stall Fabrication
  const stallFabricationHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="https://www.nkdigital.agency/clients/oneders/img/wooden-stall-fabrication.jpeg"
          alt="Stall Fabrication"
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
              Innovative Designs
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Stall
            </span>
            <span className="block mt-2">Fabrication</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Custom-designed and expertly fabricated exhibition stalls that showcase your brand and create engaging
            visitor experiences.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Stall Fabrication"
        description="Custom-designed and expertly fabricated exhibition stalls that showcase your brand and create engaging visitor experiences."
        heroSection={stallFabricationHero}
        features={[
          "Custom stall design and conceptualization",
          "3D visualization and rendering",
          "High-quality fabrication and construction",
          "Modular and reusable design solutions",
          "Branding integration and visual merchandising",
          "Lighting design and implementation",
          "Interactive elements and technology integration",
          "Installation, dismantling, and logistics management",
        ]}
        caseStudies={[
          {
            title: "Award-Winning Trade Show Booth",
            description:
              "We designed and fabricated an innovative double-story exhibition booth for a technology company that won 'Best Booth Design' at a major industry trade show and increased visitor engagement by 70% compared to previous years.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/stall-fabrications.JPG",
          },
          {
            title: "Sustainable Exhibition Design",
            description:
              "Our team created an eco-friendly exhibition stall using sustainable materials and modular design that reduced the client's carbon footprint while creating a compelling brand experience that aligned with their environmental values.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/stall-fabrication.avif",
          },
        ]}
      />
    </>
  )
}

