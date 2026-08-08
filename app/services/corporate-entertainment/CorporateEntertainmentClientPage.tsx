"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, ArrowRight, Play, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/menu"
import Link from "next/link"

// Define the service categories
const serviceCategories = [
  {
    title: "Corporate Galas",
    description:
      "Sophisticated evening events that celebrate achievements, milestones, and foster connections among attendees.",
    services: [
      "Award ceremonies and recognition events",
      "Annual galas and celebrations",
      "Fundraising events",
      "Milestone celebrations",
      "VIP and executive events",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Galas",
  },
  {
    title: "Team Building",
    description:
      "Engaging activities designed to strengthen relationships, improve communication, and boost morale among team members.",
    services: [
      "Interactive team challenges",
      "Outdoor adventure activities",
      "Creative workshops",
      "Culinary team building",
      "Corporate retreats",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Team",
  },
  {
    title: "Entertainment Programs",
    description: "Curated performances and activities that engage and delight corporate audiences of all sizes.",
    services: [
      "Celebrity performances and appearances",
      "Live music and bands",
      "Comedy shows and performers",
      "Cultural performances",
      "Interactive entertainment",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Programs",
  },
  {
    title: "Corporate Retreats",
    description:
      "Immersive experiences that combine business objectives with leisure activities in inspiring settings.",
    services: [
      "Leadership retreats",
      "Strategic planning getaways",
      "Wellness and mindfulness programs",
      "Incentive travel programs",
      "Executive team building",
    ],
    icon: "/placeholder.svg?height=80&width=80&text=Retreats",
  },
]

// Define the case studies
const caseStudies = [
  {
    title: "Annual Corporate Gala",
    description:
      "We designed and executed an immersive entertainment experience for a Fortune 500 company's annual gala, featuring celebrity performances, interactive installations, and a custom-produced awards ceremony that received rave reviews from 1,200+ attendees.",
    imageSrc: "/images/corporate-events-home.jpg",
    highlights: [
      "1,200+ executive attendees",
      "Celebrity entertainment",
      "Custom awards production",
      "Interactive installations",
    ],
  },
  {
    title: "Leadership Retreat Entertainment",
    description:
      "Our team curated a multi-day entertainment program for a tech company's leadership retreat, blending inspirational speakers, team-building activities, and evening performances that fostered connection and rejuvenation.",
    imageSrc: "/images/corporate-events.webp",
    highlights: ["Multi-day program", "Inspirational speakers", "Team-building activities", "Evening performances"],
  },
]

// Define client testimonials
const testimonials = [
  {
    quote:
      "The entertainment program created by 1DERS for our annual leadership conference exceeded all expectations. Their ability to understand our corporate culture and deliver experiences that resonated with our executives was truly impressive.",
    name: "Rajiv Mehta",
    title: "Chief People Officer, Global Tech Solutions",
  },
  {
    quote:
      "From concept to execution, the team delivered a flawless experience that our employees are still talking about months later. The entertainment was perfectly aligned with our brand and objectives.",
    name: "Priya Sharma",
    title: "Director of Events, Horizon Enterprises",
  },
]

export default function CorporateEntertainmentClientPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      <Menu />
      <div className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-70" />
            <Image
              src="/images/corporate-entertainment-header.jpeg"
              alt="Corporate Entertainment Events - Dance Performance"
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
            <div className="flex flex-col items-center text-center">
              <div className="inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm mb-6">
                <span className="text-sm font-medium text-white">Corporate Entertainment Events</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight max-w-4xl">
                Extraordinary{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Entertainment
                </span>{" "}
                for Corporate Audiences
              </h1>

              <p className="mt-6 text-xl text-white/80 max-w-2xl">
                Elevate your corporate gatherings with our premium entertainment solutions designed to engage, inspire,
                and create memorable experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
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

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
                {["Celebrity Performances", "Live Music", "Interactive Entertainment", "Award Ceremonies"].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center"
                    >
                      <Star className="h-6 w-6 text-gradientPink mx-auto mb-2" />
                      <p className="text-white/90 text-sm">{feature}</p>
                    </div>
                  ),
                )}
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
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Offerings</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Premium{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Entertainment
                </span>{" "}
                Solutions
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Tailored entertainment experiences that align with your corporate objectives and audience preferences.
              </p>
            </div>

            {/* Service category tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-gradientPurple to-gradientPink text-white"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active service category content */}
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
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
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Image
                    src="/images/corporate-entertainment-event.jpg"
                    alt="Why choose us for corporate entertainment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                  <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                  The{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    1DERS
                  </span>{" "}
                  Advantage
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  With decades of experience in corporate entertainment, we understand the unique requirements and
                  objectives of business events. Our team delivers exceptional experiences that align with your brand
                  values and audience expectations.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Corporate-Focused Expertise",
                      description: "Specialized knowledge of corporate event requirements and audience expectations.",
                    },
                    {
                      title: "Exclusive Talent Network",
                      description: "Access to premium entertainment options and celebrity performers.",
                    },
                    {
                      title: "Seamless Integration",
                      description: "Entertainment that aligns perfectly with your event objectives and messaging.",
                    },
                    {
                      title: "End-to-End Management",
                      description: "Comprehensive handling of all entertainment logistics and coordination.",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <p className="mt-1 text-white/70">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                Explore our successful corporate entertainment projects that delivered exceptional experiences.
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

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {study.highlights.map((highlight, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-gradientPink mt-0.5 shrink-0" />
                          <p className="text-white/90">{highlight}</p>
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
              <div className="text-center">
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
                  className="mx-auto mb-6 opacity-40"
                >
                  <defs>
                    <linearGradient id="quote-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>

                <p className="text-2xl italic text-white/90 mb-8">"{testimonials[activeTestimonial].quote}"</p>

                <div className="mb-8">
                  <h4 className="font-bold text-white text-lg">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-white/70">{testimonials[activeTestimonial].title}</p>
                </div>

                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        activeTestimonial === index
                          ? "bg-gradient-to-r from-gradientPurple to-gradientPink"
                          : "bg-white/20"
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
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
                  Ready to Create an{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Unforgettable
                  </span>{" "}
                  Experience?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to discuss how our corporate entertainment services can elevate your next event.
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
      </div>
    </>
  )
}

