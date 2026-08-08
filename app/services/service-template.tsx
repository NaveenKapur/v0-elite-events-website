"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import Link from "next/link"

interface ServiceTemplateProps {
  title: string
  description: string
  heroSection?: ReactNode // Optional custom hero section
  features: string[]
  caseStudies: {
    title: string
    description: string
    imageSrc: string
  }[]
}

export default function ServiceTemplate({
  title,
  description,
  heroSection,
  features,
  caseStudies,
}: ServiceTemplateProps) {
  return (
    <>
      {/* Hero Section - Either custom or default */}
      {heroSection || (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="/images/logistics-management-tour.webp"
              alt={title}
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
                  Our Services
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  {title}
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                {description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="mb-6 flex items-center justify-center">
              <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
              <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">What We Offer</span>
              <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
            </div>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
              <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                Key
              </span>{" "}
              Features
            </h2>

            <p className="mt-6 text-lg text-white/80">
              Discover how our {title.toLowerCase()} services can elevate your event experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gradientPink mt-0.5 shrink-0" />
                  <p className="text-white/80">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
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
                Explore some of our successful {title.toLowerCase()} projects.
              </p>
            </div>

            <div className="space-y-24">
              {caseStudies.map((study, i) => (
                <div key={i} className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                  <div className={`${i % 2 === 0 ? "" : "order-1 md:order-2"}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <Image
                        src={
                          study.imageSrc ||
                          "/images/logistics-management-small.jpg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Ready to Elevate Your{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Event
                </span>{" "}
                Experience?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Contact us today to discuss how our {title.toLowerCase()} services can bring your vision to life.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link
                  href="tel:09810101023"
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto"
                >
                  Discuss Your Event
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
    </>
  )
}

