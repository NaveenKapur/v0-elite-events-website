import ServiceTemplate from "../service-template"
import Image from "next/image"
import { Menu } from "@/components/menu"
import { generateMetadata } from "@/components/page-metadata"

export const metadata = generateMetadata({
  title: "Product Launch Services",
  description:
    "Strategic product launch events that create maximum impact and set your new offerings up for market success with memorable reveal experiences.",
  canonical: "/services/product-launch",
  keywords: [
    "product launch events",
    "product reveal",
    "launch strategy",
    "product introduction",
    "market launch events",
  ],
  ogImage: "https://www.nkdigital.agency/clients/oneders/img/product-launch-hero.png",
})

export default function ProductLaunchPage() {
  // Custom hero section for Product Launch
  const productLaunchHero = (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60" />
        <Image
          src="https://www.nkdigital.agency/clients/oneders/img/product-launch-hero.png"
          alt="Product Launch"
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
              Impactful Introductions
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
              Product
            </span>
            <span className="block mt-2">Launch</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
            Strategic product launch events that create maximum impact and set your new offerings up for market success.
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Menu />
      <ServiceTemplate
        title="Product Launch"
        description="Strategic product launch events that create maximum impact and set your new offerings up for market success."
        heroSection={productLaunchHero}
        features={[
          "Launch strategy development and planning",
          "Creative concept and theme development",
          "Venue selection and transformation",
          "Product showcase and demonstration design",
          "Media and influencer engagement",
          "Technical production and reveal moments",
          "Audience engagement and experience design",
          "Post-launch activation and follow-up",
        ]}
        caseStudies={[
          {
            title: "Luxury Automotive Launch",
            description:
              "We conceptualized and executed the launch of a luxury vehicle, creating a dramatic reveal experience and immersive brand journey that generated extensive media coverage and exceeded pre-order targets by 40%.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/product-launch-event.jpg",
          },
          {
            title: "Tech Product Ecosystem Launch",
            description:
              "Our team managed a multi-product technology launch event, designing interactive demonstration zones and creating compelling storytelling moments that effectively communicated the ecosystem's value to media, partners, and consumers.",
            imageSrc: "https://www.nkdigital.agency/clients/oneders/img/product-launch-home.png",
          },
        ]}
      />
    </>
  )
}

