"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"

export default function ContactPageClient() {
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
              { name: "Portfolio", href: "/portfolio" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium ${item.name === "Contact" ? "text-white" : "text-white/80"} transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${item.name === "Contact" ? "after:w-full" : ""}`}
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
            { name: "Portfolio", href: "/portfolio" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xl font-medium ${item.name === "Contact" ? "text-white" : "text-white/80"} hover:text-white`}
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
              src="https://www.nkdigital.agency/clients/oneders/img/1ders-event-contact.webp"
              alt="Contact Onder Events - Elegant event venue with floral decorations"
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
                  Reach Out To Us
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Contact
                </span>{" "}
                Onder Events
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Let's discuss how we can bring your vision to life and create an extraordinary experience together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                  <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">
                    Send a Message
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your event needs.
                </p>

                <form className="mt-8 space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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

                  <div className="space-y-2">
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

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
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
                      <option value="social">Social Gathering</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="h-32 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                      placeholder="Tell us about your event and requirements"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-gradientPurple to-gradientPink py-3 text-white hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                  <span className="ml-4 text-sm font-medium uppercase tracking-widest text-white/80">
                    Contact Details
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                  Our{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Information
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Feel free to reach out to us through any of the following channels. We're always ready to discuss your
                  event needs.
                </p>

                <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Phone</h3>
                      <p className="mt-1 text-white/80">+91 9818316005 (Main)</p>
                      <p className="text-white/80">+91 9810248854 (Corporate)</p>
                      <p className="text-white/80">+91 8800994477 (Wedding)</p>
                      <p className="text-white/80">+91 88000 25884 (Career)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Email</h3>
                      <p className="mt-1 text-white/80">info@1ders.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Head Office</h3>
                      <p className="mt-1 text-white/80">R-14/125, Rajnagar</p>
                      <p className="text-white/80">Ghaziabad, Uttar Pradesh 201002</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Business Hours</h3>
                      <p className="mt-1 text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/80">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-white/80">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-white">Connect With Us</h3>
                  <div className="mt-4 flex gap-3 sm:gap-4">
                    {[
                      {
                        icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
                        label: "Instagram",
                        href: "https://www.instagram.com/1ders.events/reels/",
                      },
                      {
                        icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />,
                        label: "Facebook",
                        href: "https://www.facebook.com/1ders/",
                      },
                      {
                        icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/1ders-events-solutions/",
                      },
                    ].map((social, i) => (
                      <Link
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5 text-white transition-transform hover:scale-110"
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                          {social.icon}
                        </div>
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Find Us</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our Base Office{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Location
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Visit our office to discuss your event requirements in person. We're conveniently located in the heart
                of Gurugram.
              </p>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8684473021535!2d77.2282766!3d28.573712799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce23110ee1167%3A0x4d6ed98327dc7fc3!2s1ders%20Events%20%26%20Weddings!5e0!3m2!1sen!2sin!4v1743332200624!5m2!1sen!2sin"
                  width="100%"
                  height="70%"
                  style={{ border: 0, position: "absolute", top: "50%", transform: "translateY(-50%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="1ders Events & Weddings Location"
                  aria-label="Google Maps showing 1ders Events & Weddings office location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Locations</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Offices
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                With a presence across major cities in India, we're equipped to handle events anywhere.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  city: "Ghaziabad (Head Office)",
                  address: "R-14/125, Rajnagar, Ghaziabad, Uttar Pradesh 201002",
                  phone: "+91 9810101023",
                },
                {
                  city: "Jaipur",
                  address: "Plot No. - 505, Sailo Ki Gali Gangori Bazar Jaipur, Rajasthan - 302001",
                  phone: "+91 9810101023",
                },
                {
                  city: "Gurugram",
                  address: "H.No. 53 F Block SF, South City- ll, Gurugram, Haryana, 122018",
                  phone: "+91 9810101023",
                },
                {
                  city: "New Delhi",
                  address: "803, 3rd floor, Arjun Nagar Bhishma Pitamah Road, Opp Defence Colony, New Delhi - 110003",
                  phone: "+91 9810101023",
                },
                {
                  city: "Haridwar",
                  address: "C15, Shopping Plaza Ranipur Chowk, Jwalapur Haridwar - 249407",
                  phone: "+91 9810101023",
                },
                {
                  city: "Mohali",
                  address: "F-426, First Floor Industrial Area Phase 8B Mohali, Punjab - 160055",
                  phone: "+91 9810101023",
                },
                {
                  city: "Goa",
                  address: "N-66, Phase-IV, Verna Industrial Estate, Verna South Goa, Goa - 403722",
                  phone: "+91 9810101023",
                },
                {
                  city: "Chandigarh",
                  address: "S.C.O. 339-340, 2nd Floor Sector - 35 B, Chandigarh- 160022",
                  phone: "+91 9810101023",
                },
              ].map((office, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white">{office.city}</h3>
                  <p className="mt-2 text-white/70">{office.address}</p>
                  <p className="mt-1 text-white/70">{office.phone}</p>

                  <Button
                    variant="outline"
                    className="mt-6 w-full rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                  >
                    Contact Office
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready to Create Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Dream
                  </span>{" "}
                  Event?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to discuss your vision and start planning your unforgettable event with Onder Events.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white"
                    onClick={() => (window.location.href = "tel:09818316005")}
                  >
                    <span className="relative z-10">Discuss Your Event</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-6 text-lg font-medium text-white hover:border-white/40 sm:w-auto"
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

