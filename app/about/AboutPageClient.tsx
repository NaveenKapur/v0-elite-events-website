"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Award, Users, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"
import { Menu } from "@/components/menu"
import { MegaMenu } from "@/components/mega-menu"

export default function AboutPageClient() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      <ConfettiOverlay />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradientPurple blur-[150px]" />
        <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-gradientPink blur-[150px]" />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-brandOrange blur-[120px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-24 items-center justify-center relative px-4 md:px-6">
          <Link href="/" className="absolute left-4 md:left-6 z-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ders%20logo%20footer-osmbo6RLTfJkhYe08S8SA3pM1BPV4l.png"
              alt="1DERS Events Solutions"
              width={156}
              height={52}
              className="h-16 w-auto object-contain"
            />
          </Link>

          <div className="absolute right-4 md:right-6 flex items-center gap-6">
            <nav className="hidden md:block mx-auto">
              <ul className="flex items-center gap-8">
                <li>
                  <Link href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <MegaMenu trigger="Services" />
                </li>
                <li>
                  <Link
                    href="/about"
                    className="relative text-sm font-medium text-white transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="https://www.youtube.com/@1dersevents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white hover:text-gradientPink transition-colors"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white hover:text-gradientPink transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/1ders/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white hover:text-gradientPink transition-colors"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white hover:text-gradientPink transition-colors"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>

            <Button asChild className="hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105 md:block">
              <a href="tel:+919810248854">Book Consultation</a>
            </Button>

            <Menu />
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="https://www.nkdigital.agency/clients/oneders/img/about-1ders.jpg"
              alt="Elegant event space with beautifully decorated tables and floral arrangements"
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
                  Our Legacy of Excellence
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                About{" "}
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Onder Events
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Crafting extraordinary experiences since 1995, with a legacy of excellence that spans generations.
              </p>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Image
                    src="https://www.nkdigital.agency/clients/oneders/img/wedding-in-udaipur.webp"
                    alt="Onder Events legacy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-black/50 px-4 py-2 backdrop-blur-sm">
                      <Calendar className="mr-2 h-5 w-5 text-gradientPink" />
                      <span className="text-white font-medium">Established 1995</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="mb-6 flex items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                  <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Story</span>
                </div>

                <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                  A{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Royal
                  </span>{" "}
                  Legacy
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Founded in 1995, Onder Events is a premier event management company specializing in crafting
                  exceptional experiences across India and globally. With decades of expertise, we excel in delivering
                  unforgettable events, from luxurious destination weddings to corporate gatherings, product launches,
                  roadshows, and large-scale conferences.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  Our commitment to excellence, creativity, and meticulous attention to detail sets us apart. Whether
                  it's an intimate celebration or a grand extravaganza, our seasoned team ensures that every event is
                  flawlessly executed, reflecting your unique vision and style.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "30+ Years Experience",
                      description: "Creating memorable events since 1995",
                      icon: <Calendar className="h-5 w-5" />,
                    },
                    {
                      title: "Global Presence",
                      description: "Operating across India and internationally",
                      icon: <MapPin className="h-5 w-5" />,
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                          <div className="text-white">{feature.icon}</div>
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

        {/* Expertise Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  What We Do Best
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                From intimate gatherings to grand celebrations, we bring your vision to life with unparalleled
                creativity and precision.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Luxury Destination Weddings",
                  description:
                    "From royal palaces in Rajasthan to serene beachfronts in Goa, we curate bespoke weddings in picturesque locations, offering world-class hospitality and elegant experiences.",
                  icon: (
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
                    >
                      <path d="M19 8.71l-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.059 8.71a2.665 2.665 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105" />
                      <path d="M16 15c-2.21 1.333-5.792 1.333-8 0" />
                    </svg>
                  ),
                },
                {
                  title: "Corporate Events & Conferences",
                  description:
                    "Tailored solutions for product launches, MICE events, and conferences that drive impact and deliver brand excellence.",
                  icon: (
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
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  ),
                },
                {
                  title: "Roadshows & Product Launches",
                  description: "Creating buzz with high-impact, on-ground activations that captivate your audience.",
                  icon: (
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
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: "Social Celebrations",
                  description:
                    "From milestone anniversaries to lavish birthdays, we turn personal moments into cherished memories.",
                  icon: (
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
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                      <div className="text-white">{service.icon}</div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white">{service.title}</h3>

                  <p className="mt-4 text-white/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
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
                    Onder
                  </span>{" "}
                  Difference
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  With over three decades of experience in the events industry, we've perfected the art of creating
                  memorable experiences that exceed expectations. Our commitment to excellence is evident in every
                  detail, from the initial concept to the final execution.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "30+ Years of Excellence",
                      description:
                        "With a legacy of successful events since 1995, we bring experience and innovation to every occasion.",
                      icon: <Award className="h-5 w-5" />,
                    },
                    {
                      title: "Tailored Experiences",
                      description:
                        "Every event is uniquely designed to reflect your vision, leaving a lasting impression.",
                      icon: <Users className="h-5 w-5" />,
                    },
                    {
                      title: "All Budgets, Every Scale",
                      description:
                        "From intimate gatherings to grand-scale productions, we deliver unmatched quality within your budget.",
                      icon: <CheckCircle className="h-5 w-5" />,
                    },
                    {
                      title: "End-to-End Management",
                      description:
                        "From venue selection to decor, entertainment, and logistics, we handle it all seamlessly.",
                      icon: <ArrowRight className="h-5 w-5" />,
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                          <div className="text-white">{feature.icon}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <p className="mt-1 text-white/70">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                    <span className="relative z-10">Explore Our Services</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Image
                    src="https://www.nkdigital.agency/clients/oneders/img/contact-us.jpeg"
                    alt="Luxury event management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Presence */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  Where We Operate
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Presence
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                We proudly operate across India and internationally, bringing our expertise to diverse locations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Delhi NCR",
                "Jaipur, Rajasthan",
                "Gurugram, Haryana",
                "Ghaziabad, Uttar Pradesh",
                "Haridwar, Uttarakhand",
                "Mohali, Punjab",
                "Goa",
                "Chandigarh",
              ].map((location, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="font-medium text-white">{location}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-white/80 mb-6">
                No matter where your vision takes you, Onder Events is your trusted partner in turning dreams into
                reality.
              </p>
              <Button className="group relative overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-3 text-white hover:border-white/40">
                <span className="relative z-10">View Our Global Portfolio</span>
              </Button>
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
                  Ready to Create Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Extraordinary
                  </span>{" "}
                  Event?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to discuss your vision and start planning your unforgettable event with Onder Events.
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

