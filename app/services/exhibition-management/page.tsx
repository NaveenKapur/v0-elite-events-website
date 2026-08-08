import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Exhibition Management Services",
  description:
    "Comprehensive exhibition planning and management services that maximize your brand presence and engagement opportunities at trade shows and exhibitions.",
  canonical: "/services/exhibition-management",
  keywords: [
    "exhibition management",
    "trade show services",
    "exhibition planning",
    "booth design",
    "exhibition logistics",
  ],
  ogImage: "/images/exhibition-management-header.jpg",
})

export default function ExhibitionManagementPage() {
  // Custom hero section for Exhibition Management
  const exhibitionManagementHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="/images/exhibition-management-header.jpg"
          alt="Exhibition Management"
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
              Impactful Brand Showcases
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Exhibition
            </span>
            <span className="block mt-2">Management</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Comprehensive exhibition planning and management services that maximize your brand presence and engagement
            opportunities.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Exhibition Management"
        description="Comprehensive exhibition planning and management services that maximize your brand presence and engagement opportunities."
        heroSection={exhibitionManagementHero}
        features={[
          "Exhibition concept development and planning",
          "Booth design and construction management",
          "Exhibitor coordination and management",
          "Visitor experience design and flow management",
          "On-site logistics and operations",
          "Technical production and AV management",
          "Staff training and management",
          "Lead generation and data collection strategies",
        ]}
        caseStudies={[
          {
            title: "International Trade Show",
            description:
              "We managed a company's presence at a major international trade show, designing an award-winning booth and creating an interactive visitor experience that generated 3x more qualified leads than their previous exhibitions.",
            imageSrc: "/images/exhibition-management2.webp",
          },
          {
            title: "Product Exhibition Series",
            description:
              "Our team developed and executed a multi-city product exhibition tour, creating consistent brand experiences while adapting to different venues and regional preferences, resulting in significant market penetration for the client.",
            imageSrc: "/images/exhibition_management.jpg",
          },
        ]}
      />
    </>
  )
}

