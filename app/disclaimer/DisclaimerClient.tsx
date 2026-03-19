"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
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
                className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
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
              className="text-xl font-medium text-white/80 hover:text-white"
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <main className="relative z-10 pt-24">
        <section className="relative py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">Disclaimer</h1>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80">Last Updated: March 27, 2025</p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">1. Introduction</h2>
                <p className="text-white/80">
                  The information provided on this website is for general informational purposes only. All information
                  on the site is provided in good faith, however, we make no representation or warranty of any kind,
                  express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
                  completeness of any information on the site.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">2. No Liability</h2>
                <p className="text-white/80">
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred
                  as a result of the use of the site or reliance on any information provided on the site. Your use of
                  the site and your reliance on any information on the site is solely at your own risk.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">3. External Links</h2>
                <p className="text-white/80">
                  The site may contain links to external websites that are not provided or maintained by or in any way
                  affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or
                  completeness of any information on these external websites.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">4. Errors and Omissions</h2>
                <p className="text-white/80">
                  Please note that while we strive to keep the information on our website current and accurate, errors
                  can occur. We reserve the right to correct any errors or omissions, and we do not warrant that any of
                  the materials on this website are accurate, complete, or current.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">5. Fair Use Disclaimer</h2>
                <p className="text-white/80">
                  This site may contain copyrighted material the use of which has not always been specifically
                  authorized by the copyright owner. We are making such material available in our efforts to provide
                  information and education about our services. We believe this constitutes a "fair use" of any such
                  copyrighted material as provided for in section 107 of the US Copyright Law.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">6. Views Expressed</h2>
                <p className="text-white/80">
                  The views and opinions expressed on this website are purely those of the authors and do not
                  necessarily represent the views of 1DERS Events Solutions. The content of this site is provided for
                  informational purposes only and is not intended to be a substitute for professional advice.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">7. No Responsibility</h2>
                <p className="text-white/80">
                  We take no responsibility for, and will not be liable for, the website being temporarily unavailable
                  due to technical issues beyond our control.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">8. Contact Us</h2>
                <p className="text-white/80">If you have any questions about this Disclaimer, please contact us at:</p>
                <p className="text-white/80">
                  Email: info@1ders.in
                  <br />
                  Phone: +91 9810101023
                  <br />
                  Address: R-14/125, Rajnagar, Ghaziabad, Uttar Pradesh 201002
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

