"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Youtube, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { DropdownMenu } from "@/components/dropdown-menu"
import { Footer } from "@/components/footer"
import { FeaturedExperience } from "@/components/featured-experience"

const serviceItems = [
  { name: "Brand & Advertisement", href: "/services/brand-advertisement" },
  { name: "Corporate Entertainment Events", href: "/services/corporate-entertainment" },
  { name: "Entertainment", href: "/services/entertainment" },
  { name: "DJ Sound & Light", href: "/services/dj-sound-light" },
  { name: "Event Management", href: "/services/event-management" },
  { name: "Dealers Meet", href: "/services/dealers-meet" },
  { name: "Exhibition Management", href: "/services/exhibition-management" },
  { name: "Hospitality", href: "/services/hospitality" },
  { name: "Logistics", href: "/services/logistics" },
  { name: "School/College Fest", href: "/services/school-college-fest" },
  { name: "Product Launch", href: "/services/product-launch" },
  { name: "Seminars & Conferences", href: "/services/seminars-conferences" },
  { name: "Stall Fabrication", href: "/services/stall-fabrication" },
  { name: "Destination Wedding Event", href: "/services/destination-wedding" },
]

export default function ClientPage() {
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
              width={144}
              height={48}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link
              href="/"
              className="relative text-sm font-medium text-white transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <DropdownMenu trigger="Services" items={serviceItems} />
            <Link
              href="/about"
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="https://www.youtube.com/@1dersevents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white hover:text-gradientPink transition-colors" />
              </Link>
              <Link
                href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white hover:text-gradientPink transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/1ders/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white hover:text-gradientPink transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white hover:text-gradientPink transition-colors" />
              </Link>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-0 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 md:flex"
            >
              <a href="tel:+919810248854">Book Consultation</a>
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
          <Link
            href="/"
            className="text-xl font-medium text-white hover:text-white/80"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
          >
            Home
          </Link>
          <div className="border-l-2 border-white/20 pl-4">
            <p className="text-xl font-medium text-white mb-2">Services</p>
            <div className="flex flex-col gap-2 pl-2">
              {serviceItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base font-medium text-white/70 hover:text-white"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about"
            className="text-xl font-medium text-white/80 hover:text-white"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-xl font-medium text-white/80 hover:text-white"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-xl font-medium text-white/80 hover:text-white"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
          >
            Contact
          </Link>
          <div className="mt-4 flex gap-4">
            <Link
              href="https://www.youtube.com/@1dersevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/1ders/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <Button asChild className="mt-4 bg-gradient-to-r from-gradientPurple to-gradientPink text-white hover:opacity-90">
            <a href="tel:+919810248854">Book Consultation</a>
          </Button>
        </div>
      </div>

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_xo6sl5xo6sl5xo6s-u9FKwgYjlQWHu6SwSjVR4esuaPmkvf.jpeg"
              alt="Luxury event setup with elegant floral centerpieces"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container relative z-10 px-4 py-16 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80 [text-shadow:_0_1px_1px_rgba(0,0,0,0.8)]">
                  Extraordinary Experiences
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                <span className="block">Crafting</span>
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Unforgettable
                </span>
                <span className="block">Moments</span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Ideas, concepts, execution - 1DERS Events Solutions creates extraordinary experiences that leave lasting
                impressions.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link href="/services">
                  <Button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto">
                    <span className="relative z-10">Explore Our Services</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>
                </Link>

                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="group relative w-full overflow-hidden rounded-full border-2 border-white bg-white px-8 py-6 text-lg font-medium text-black hover:bg-white/90 hover:border-white sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center">
                      Our Portfolio
                      <Play className="ml-2 h-4 w-4 fill-current" />
                    </span>
                  </Button>
                </Link>
              </div>

              <div className="mt-16 flex animate-bounce justify-center">
                <a
                  href="#services"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">What We Do</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Exceptional
                </span>{" "}
                Services for Discerning Clients
              </h2>

              <p className="mt-6 text-lg text-white/80">
                We specialize in creating unforgettable experiences tailored to the most refined tastes.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Destination Weddings",
                  description:
                    "Curating breathtaking ceremonies in the world's most exclusive locations, with meticulous attention to every detail.",
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
                  title: "Corporate Events",
                  description:
                    "Elevating business gatherings with sophisticated venues, impeccable service, and seamless execution.",
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
                  title: "Special Occasions",
                  description:
                    "Providing personalized event planning and management services for birthdays, anniversaries, and other special moments.",
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

                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradientPurple opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradientPink opacity-20 blur-3xl"></div>

                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Image
                    src="https://www.nkdigital.agency/clients/oneders/img/wedding-events-home.jpg"
                    alt="Luxury wedding event setup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                  <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Story</span>
                </div>

                <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                  A Legacy of{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  For over a decade, 1DERS Events Solutions has been the premier choice for discerning clients who
                  demand nothing but the best. Our team of expert planners brings unparalleled creativity, discretion,
                  and attention to detail to every event.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  We pride ourselves on our global network of exclusive venues, world-class vendors, and our ability to
                  transform visions into extraordinary realities. Our clientele includes executives, celebrities, and
                  individuals who trust us with their most important occasions.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Uncompromising Quality",
                      description: "In every aspect of our service",
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
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      ),
                    },
                    {
                      title: "Global Reach",
                      description: "Events in over 40 countries",
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
                          <path d="M2 12h20" />
                          <path d="M12 2v20" />
                          <path d="m4.93 4.93 14.14 14.14" />
                          <path d="m19.07 4.93-14.14 14.14" />
                        </svg>
                      ),
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
                    <span className="relative z-10">Learn More About Us</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Work</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Exceptional
                </span>{" "}
                Portfolio
              </h2>

              <p className="mt-6 text-lg text-white/80">
                A glimpse into the extraordinary events we've had the privilege to create.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Wedding in Monaco", description: "A breathtaking celebration at the historic cathedral." },
                { title: "Corporate Gala in Dubai", description: "An elegant evening for a Fortune 100 company." },
                {
                  title: "College Fest",
                  description: "Unleashing energy, creativity, and unforgettable campus celebrations!",
                },
                { title: "Fashion Show", description: "A stunning runway event for a luxury fashion house." },
                {
                  title: "Exhibition Management",
                  description: "Flawless planning, seamless execution for impactful exhibitions.",
                },
                { title: "Product Launch", description: "A spectacular unveiling for a luxury brand." },
              ].map((project, i) => (
                <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                  {i === 0 ? (
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/monaco-wedding.jpg"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : i === 1 ? (
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/corporate-gala-dubai.jpg"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : i === 2 ? (
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/school-college-fest.jpeg"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : i === 3 ? (
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/fashion-shows-home.jpg"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : i === 4 ? (
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/services-header.jpg"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src="https://www.nkdigital.agency/clients/oneders/img/product-launch-home.png"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-white/80">{project.description}</p>

                    <div className="mt-4 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        variant="outline"
                        className="rounded-full border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 hover:text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/portfolio">
                <Button className="group relative overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-3 text-white hover:border-white/40">
                  <span className="relative z-10">View Full Portfolio</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  What Clients Say
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Client{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                The trust and satisfaction of our clientele speak volumes about our commitment to excellence.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Sarah M.",
                  role: "Wedding Client",
                  quote:
                    "1DERS transformed our special day into an absolute fairy tale. Their attention to detail and ability to manage complex logistics across multiple countries was truly remarkable.",
                },
                {
                  name: "J.M., CEO",
                  role: "Global Technology Corporation",
                  quote:
                    "Our annual executive retreat needed to impress the most discerning leaders in tech. 1DERS delivered an experience that was sophisticated, seamless, and truly memorable.",
                },
                {
                  name: "A.L.",
                  role: "Private Event",
                  quote:
                    "1DERS provided not only absolute discretion but also created an experience that exceeded all expectations. Their team's creativity and execution are unmatched.",
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

        <section id="contact" className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                  <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">Get In Touch</span>
                </div>

                <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Begin Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Extraordinary
                  </span>{" "}
                  Journey
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Contact our team of expert planners to discuss your vision. We approach each inquiry with the utmost
                  discretion and personalized attention.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Private Consultation",
                      info: "+91 9810248854",
                      icon: (
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
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                    },
                    {
                      title: "Inquiries",
                      info: "info@1ders-events.com",
                      icon: (
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
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      ),
                    },
                    {
                      title: "Global Offices",
                      info: "London • Paris • Dubai • New York • Tokyo",
                      icon: (
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
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                    },
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                          <div className="text-white">{contact.icon}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                        <p className="text-white/70">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  {[Youtube, Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <Link
                      key={i}
                      href={
                        i === 0
                          ? "https://www.youtube.com/@1dersevents"
                          : i === 1
                            ? "https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
                            : i === 2
                              ? "https://www.facebook.com/1ders/"
                              : "https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5 text-white transition-transform hover:scale-110"
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="sr-only">{i === 0 ? "Instagram" : i === 1 ? "Facebook" : "LinkedIn"}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <form className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-white">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-white">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mt-6 space-y-2">
                    <label htmlFor="event-type" className="text-sm font-medium text-white">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="special">Special Occasion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mt-6 space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="h-32 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                      placeholder="Describe your vision"
                    ></textarea>
                  </div>

                  <Button className="mt-8 w-full bg-gradient-to-r from-gradientPurple to-gradientPink py-6 text-lg font-medium text-white hover:opacity-90">
                    Request Consultation
                  </Button>

                  <p className="mt-4 text-center text-sm text-white/60">
                    We respect your privacy and will handle your information with the utmost discretion.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FeaturedExperience />
      <Footer />
    </div>
  )
}

