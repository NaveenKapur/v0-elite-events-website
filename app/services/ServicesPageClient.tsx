"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, CheckCircle, Users, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"

export default function ServicesPageClient() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      <ConfettiOverlay />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradientPurple blur-[150px]" />
        <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-gradientPink blur-[150px]" />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-brandOrange blur-[120px]" />
      </div>

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="container flex h-24 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ders%20logo%20footer-osmbo6RLTfJkhYe08S8SA3pM1BPV4l.png"
              alt="1DERS Events Solutions"
              width={120}
              height={40}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <nav className="hidden gap-8 md:flex">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Portfolio", href: "/#portfolio" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium ${item.name === "Services" ? "text-white" : "text-white/80"} transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${item.name === "Services" ? "after:w-full" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden rounded-full border-0 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 md:flex"
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="fixed inset-y-0 right-0 z-50 w-full max-w-xs translate-x-full transform bg-black/95 p-6 transition-transform duration-300 ease-in-out md:hidden"
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <Link href="/" className="mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ders%20logo%20footer-osmbo6RLTfJkhYe08S8SA3pM1BPV4l.png"
              alt="1DERS Events Solutions"
              width={120}
              height={40}
              className="h-12 w-auto object-contain"
            />
          </Link>
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Portfolio", href: "/#portfolio" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xl font-medium ${item.name === "Services" ? "text-white" : "text-white/80"} hover:text-white`}
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4 bg-gradient-to-r from-gradientPurple to-gradientPink text-white hover:opacity-90">
            Book Consultation
          </Button>
        </div>
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="https://www.nkdigital.agency/clients/oneders/img/luxury-wedding.jpg"
              alt="Luxury event services"
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
                  Exceptional Experiences
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Bespoke
                </span>{" "}
                Services
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Discover our comprehensive range of event planning and management services, tailored to exceed your
                expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="relative py-20 md:py-28">
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
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Signature
                </span>{" "}
                Services
              </h2>

              <p className="mt-6 text-lg text-white/80">
                From intimate gatherings to grand celebrations, we bring your vision to life with unparalleled
                creativity and precision.
              </p>
            </div>

            {/* Service Items */}
            <div className="space-y-24">
              {/* Luxury Weddings */}
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/luxury-wedding.jpg"
                      alt="Luxury destination weddings"
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
                      Signature Service
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                    Luxury{" "}
                    <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                      Destination
                    </span>{" "}
                    Weddings
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    From royal palaces in Rajasthan to serene beachfronts in Goa, we curate bespoke weddings in
                    picturesque locations, offering world-class hospitality and elegant experiences that reflect your
                    unique love story.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Venue selection and management",
                      "Customized décor and styling",
                      "Catering and menu design",
                      "Entertainment and cultural performances",
                      "Guest accommodation and transportation",
                      "Photography and videography coordination",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-gradientPink mt-0.5 shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                      <span className="relative z-10">Explore Wedding Services</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Corporate Events */}
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="order-1 md:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/corporate-event-conferences.jpg"
                      alt="Corporate events and conferences"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                </div>

                <div className="order-2 md:order-1">
                  <div className="mb-6 flex items-center">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                    <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">
                      Signature Service
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                    Corporate{" "}
                    <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                      Events
                    </span>{" "}
                    & Conferences
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    Tailored solutions for product launches, MICE events, and conferences that drive impact and deliver
                    brand excellence. We create professional environments that inspire collaboration and leave lasting
                    impressions.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Strategic event planning and execution",
                      "Brand integration and messaging",
                      "Technical production and AV management",
                      "Speaker and talent coordination",
                      "Registration and attendee management",
                      "Post-event reporting and analytics",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-gradientPurple mt-0.5 shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                      <span className="relative z-10">Explore Corporate Services</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Roadshows & Product Launches */}
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/product-launch-service.jpg"
                      alt="Roadshows and product launches"
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
                      Signature Service
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                    Roadshows &{" "}
                    <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                      Product
                    </span>{" "}
                    Launches
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    Creating buzz with high-impact, on-ground activations that captivate your audience. We design
                    immersive experiences that showcase your products and services in the most compelling light.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Concept development and creative direction",
                      "Venue transformation and branding",
                      "Interactive experiences and demonstrations",
                      "Media coordination and press management",
                      "Audience engagement strategies",
                      "Digital integration and social media amplification",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brandOrange mt-0.5 shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                      <span className="relative z-10">Explore Launch Services</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Social Celebrations */}
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="order-1 md:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/bar-decor.jpg"
                      alt="Social celebrations and private events"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                </div>

                <div className="order-2 md:order-1">
                  <div className="mb-6 flex items-center">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                    <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">
                      Signature Service
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                    Social{" "}
                    <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                      Celebrations
                    </span>
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    From milestone anniversaries to lavish birthdays, we turn personal moments into cherished memories.
                    Our team crafts intimate gatherings and grand celebrations that reflect your personality and style.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Personalized theme development",
                      "Custom invitations and guest management",
                      "Bespoke décor and floral arrangements",
                      "Gourmet catering and specialty beverages",
                      "Entertainment and surprise elements",
                      "Keepsake creation and memory preservation",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-gradientPink mt-0.5 shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                      <span className="relative z-10">Explore Social Event Services</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">How We Work</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Signature
                </span>{" "}
                Process
              </h2>

              <p className="mt-6 text-lg text-white/80">
                We follow a meticulous approach to ensure every event exceeds expectations and creates lasting memories.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Consultation & Vision",
                  description:
                    "We begin with an in-depth consultation to understand your vision, preferences, and objectives for the event.",
                  icon: <Users className="h-6 w-6" />,
                  step: "01",
                },
                {
                  title: "Creative Concept",
                  description:
                    "Our team develops a bespoke creative concept that aligns with your vision and elevates it to new heights.",
                  icon: <Sparkles className="h-6 w-6" />,
                  step: "02",
                },
                {
                  title: "Detailed Planning",
                  description:
                    "We handle all logistics, vendor coordination, and create a comprehensive timeline for flawless execution.",
                  icon: <Calendar className="h-6 w-6" />,
                  step: "03",
                },
                {
                  title: "Impeccable Execution",
                  description:
                    "On the day of your event, our experienced team ensures every detail is perfectly executed.",
                  icon: <Star className="h-6 w-6" />,
                  step: "04",
                },
              ].map((process, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <div className="absolute -top-2 right-4 text-4xl font-bold text-white/10 opacity-50">
                    {process.step}
                  </div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                      <div className="text-white">{process.icon}</div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white">{process.title}</h3>

                  <p className="mt-4 text-white/70">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  Client Experiences
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                What Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Clients
                </span>{" "}
                Say
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Hear from those who have experienced the Onder Events difference.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote:
                    "Onder Events transformed our wedding into a magical experience beyond our wildest dreams. Their attention to detail and ability to bring our vision to life was truly remarkable.",
                  name: "Priya & Rahul",
                  role: "Wedding Clients",
                },
                {
                  quote:
                    "Our product launch was flawlessly executed by the Onder team. They managed every aspect with precision and creativity, resulting in unprecedented media coverage and customer engagement.",
                  name: "Vikram S.",
                  role: "Marketing Director, Tech Innovation Co.",
                },
                {
                  quote:
                    "For our daughter's 25th birthday celebration, Onder Events created an unforgettable experience that perfectly captured her personality. Every guest was amazed by the attention to detail.",
                  name: "Meera J.",
                  role: "Private Event Client",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

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
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  </svg>

                  <p className="text-lg italic text-white/80">"{testimonial.quote}"</p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready to Create Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Dream
                  </span>{" "}
                  Event?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to discuss your vision and how we can create a customized solution tailored to your
                  specific requirements.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto"
                    onClick={() => (window.location.href = "tel:09810101023")}
                  >
                    <span className="relative z-10">Discuss Your Event</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>
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
      </main>

      <Footer />
    </div>
  )
}

