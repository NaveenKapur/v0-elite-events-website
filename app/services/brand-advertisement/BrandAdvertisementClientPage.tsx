"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, ArrowRight, Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/menu"
import Link from "next/link"

// Define the service categories
const serviceCategories = [
  {
    title: "Brand Strategy",
    description:
      "Developing comprehensive brand strategies that position your business for success in competitive markets.",
    services: [
      "Brand positioning and identity development",
      "Market research and competitor analysis",
      "Target audience definition",
      "Brand messaging and voice development",
      "Brand architecture and naming",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Strategy",
  },
  {
    title: "Creative Services",
    description:
      "Crafting compelling visual and verbal identities that communicate your brand's unique value proposition.",
    services: [
      "Logo and visual identity design",
      "Brand guidelines development",
      "Marketing collateral design",
      "Packaging design",
      "Environmental branding",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Creative",
  },
  {
    title: "Advertising Campaigns",
    description: "Creating impactful advertising campaigns that drive awareness, engagement, and conversion.",
    services: [
      "Integrated campaign development",
      "Digital advertising strategy",
      "Print and outdoor advertising",
      "Video and motion graphics",
      "Social media campaigns",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Campaigns",
  },
  {
    title: "Experiential Marketing",
    description: "Designing immersive brand experiences that create lasting connections with your audience.",
    services: [
      "Brand activation events",
      "Pop-up experiences",
      "Product launch experiences",
      "Trade show and exhibition design",
      "Immersive brand environments",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Experiential",
  },
]

// Define the case studies
const caseStudies = [
  {
    title: "Tech Brand Launch Campaign",
    description:
      "We developed and executed a comprehensive brand launch campaign for a tech startup, including identity design, digital marketing strategy, and experiential activations that resulted in 200% higher engagement than industry benchmarks.",
    imageSrc: "/images/brand-launch.jpg",
    metrics: [
      { label: "Engagement", value: "+200%" },
      { label: "Brand Awareness", value: "+150%" },
      { label: "Conversion Rate", value: "12.5%" },
    ],
  },
  {
    title: "FMCG Product Rebranding",
    description:
      "Our team revitalized a legacy FMCG brand with a fresh identity and multi-channel advertising campaign, leading to a 45% increase in market share within six months of launch.",
    imageSrc: "/images/fmcg-product-rebranding.jpg",
    metrics: [
      { label: "Market Share", value: "+45%" },
      { label: "Consumer Recall", value: "+78%" },
      { label: "Sales Growth", value: "+32%" },
    ],
  },
]

// Define the process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with a deep dive into your brand, market, and audience to understand your unique challenges and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a comprehensive strategy that aligns with your business objectives and resonates with your target audience.",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "Our creative team brings the strategy to life through compelling visual and verbal expressions of your brand.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "We execute the strategy across all relevant channels, ensuring consistency and impact at every touchpoint.",
  },
  {
    number: "05",
    title: "Measurement",
    description:
      "We track performance against key metrics to ensure your brand and advertising initiatives deliver measurable results.",
  },
]

export default function BrandAdvertisementClientPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <>
      <Menu />
      <div className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-70" />
            <Image
              src="/images/brand-advertisement-hero.jpg"
              alt="Brand Advertisement"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradientPurple blur-[150px]" />
            <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-gradientPink blur-[150px]" />
          </div>

          <div className="container relative z-10 px-4 py-32 md:px-6 md:py-40">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm mb-6">
                  <span className="text-sm font-medium text-white">Brand & Advertisement</span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  Elevate Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Brand
                  </span>{" "}
                  Presence
                </h1>

                <p className="mt-6 text-xl text-white/80 max-w-lg">
                  Strategic brand positioning and innovative advertising solutions that create lasting impact and drive
                  measurable results.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                    <span className="relative z-10">Explore Services</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 hover:text-white flex items-center gap-2"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>Watch Showreel</span>
                  </Button>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/brand-strategy.jpg"
                        alt="Brand Strategy"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/images/brand-identity.jpg"
                        alt="Brand Identity"
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/images/advertising-campaign.jpg"
                        alt="Advertising Campaign"
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/experiential-marketing.jpg"
                        alt="Experiential Marketing"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Expertise</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Brand
                </span>{" "}
                Services
              </h2>

              <p className="mt-6 text-lg text-white/80">
                From strategy to execution, we offer end-to-end solutions to elevate your brand and advertising
                initiatives.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-4 border-r border-white/10 pr-4">
                {serviceCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeCategory === index
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setActiveCategory(index)}
                  >
                    <h3 className="font-medium text-lg">{category.title}</h3>
                  </button>
                ))}
              </div>

              <div className="md:col-span-3 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid gap-8 md:grid-cols-2 items-start">
                  <div>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <Image
                          src={serviceCategories[activeCategory].icon || "/placeholder.svg"}
                          alt={serviceCategories[activeCategory].title}
                          width={40}
                          height={40}
                          className="h-8 w-8"
                        />
                      </div>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-white mb-4">
                      {serviceCategories[activeCategory].title}
                    </h3>

                    <p className="text-white/80 mb-6">{serviceCategories[activeCategory].description}</p>

                    <Button className="rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {serviceCategories[activeCategory].services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-gradientPink mt-0.5 shrink-0" />
                        <p className="text-white/90">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Approach</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Process
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                A strategic, collaborative approach that delivers measurable results for your brand.
              </p>
            </div>

            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-0 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`md:flex items-center gap-8 md:h-48 relative ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Step number - visible on mobile only */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5 mb-4 md:hidden">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <span className="font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>

                    {/* Center dot and number */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-12 w-12 items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                          <span className="font-bold text-white">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Work</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Case
                </span>{" "}
                Studies
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Explore our successful brand and advertising projects that delivered measurable results.
              </p>
            </div>

            <div className="space-y-24">
              {caseStudies.map((study, i) => (
                <div key={i} className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                  <div className={`${i % 2 === 0 ? "" : "order-1 md:order-2"}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <Image
                        src={study.imageSrc || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className={`${i % 2 === 0 ? "" : "order-2 md:order-1"}`}>
                    <h3 className="font-serif text-3xl font-bold text-white">{study.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-white/80">{study.description}</p>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, j) => (
                        <div
                          key={j}
                          className="rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm border border-white/10"
                        >
                          <p className="text-3xl font-bold text-white">{metric.value}</p>
                          <p className="text-sm text-white/70">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <Button className="mt-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center gap-2">
                      <span>View Full Case Study</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/20 mx-auto">
                    <Image
                      src="/placeholder.svg?height=100&width=100&text=CEO"
                      alt="Client Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#quote-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-6 opacity-40"
                  >
                    <defs>
                      <linearGradient id="quote-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  </svg>

                  <p className="text-xl italic text-white/90 mb-6">
                    "The team at 1DERS transformed our brand identity and advertising strategy. Their strategic approach
                    and creative execution helped us achieve unprecedented growth in a highly competitive market."
                  </p>

                  <div>
                    <h4 className="font-bold text-white">Vikram Sharma</h4>
                    <p className="text-white/70">CEO, TechInnovate Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready to Elevate Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Brand
                  </span>
                  ?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to discuss how our brand and advertising services can help you achieve your business
                  objectives.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Link
                    href="tel:09810101023"
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto"
                  >
                    Schedule a Consultation
                  </Link>
                  <Button
                    variant="outline"
                    className="group relative w-full overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-6 text-lg font-medium text-white hover:border-white/40 sm:w-auto"
                    onClick={() => (window.location.href = "/portfolio")}
                  >
                    <span className="relative z-10">View Our Portfolio</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

