"use client"

import Link from "next/link"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"
import { Menu } from "@/components/menu"

export default function SitemapPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      <ConfettiOverlay />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradientPurple blur-[150px]" />
        <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-gradientPink blur-[150px]" />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-brandOrange blur-[120px]" />
      </div>

      <Menu />

      <main className="relative z-10 pt-24">
        <section className="relative py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">Sitemap</h1>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80">
                  Welcome to the sitemap of 1DERS Events Solutions. This page provides an overview of all the sections
                  and pages available on our website.
                </p>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Main Pages</h2>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <Link href="/" className="text-white/80 hover:text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-white/80 hover:text-white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-white/80 hover:text-white">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio" className="text-white/80 hover:text-white">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-white/80 hover:text-white">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-white/80 hover:text-white">
                          Careers
                        </Link>
                      </li>
                    </ul>

                    <h2 className="mt-8 text-2xl font-bold text-white">Legal Pages</h2>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <Link href="/privacy-policy" className="text-white/80 hover:text-white">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/disclaimer" className="text-white/80 hover:text-white">
                          Disclaimer
                        </Link>
                      </li>
                      <li>
                        <Link href="/cookie-policy" className="text-white/80 hover:text-white">
                          Cookie Policy
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">Services</h2>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <Link href="/services/brand-advertisement" className="text-white/80 hover:text-white">
                          Brand & Advertisement
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/corporate-entertainment" className="text-white/80 hover:text-white">
                          Corporate Entertainment Events
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/entertainment" className="text-white/80 hover:text-white">
                          Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/dj-sound-light" className="text-white/80 hover:text-white">
                          DJ Sound & Light
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/event-management" className="text-white/80 hover:text-white">
                          Event Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/dealers-meet" className="text-white/80 hover:text-white">
                          Dealers Meet
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/exhibition-management" className="text-white/80 hover:text-white">
                          Exhibition Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/hospitality" className="text-white/80 hover:text-white">
                          Hospitality
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/logistics" className="text-white/80 hover:text-white">
                          Logistics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/school-college-fest" className="text-white/80 hover:text-white">
                          School/College Fest
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/product-launch" className="text-white/80 hover:text-white">
                          Product Launch
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/seminars-conferences" className="text-white/80 hover:text-white">
                          Seminars & Conferences
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/stall-fabrication" className="text-white/80 hover:text-white">
                          Stall Fabrication
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/destination-wedding" className="text-white/80 hover:text-white">
                          Destination Wedding Event
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white">XML Sitemap</h2>
                  <p className="mt-4 text-white/80">
                    For search engines, we provide an XML sitemap at{" "}
                    <a href="/sitemap.xml" className="text-gradientPink hover:underline">
                      https://1ders.in/sitemap.xml
                    </a>
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white">Social Media</h2>
                  <p className="mt-4 text-white/80">Connect with us on social media:</p>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://www.facebook.com/1ders/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@1dersevents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                      >
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
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

