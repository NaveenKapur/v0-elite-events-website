"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      <ConfettiOverlay />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradientPurple blur-[150px]" />
        <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-gradientPink blur-[150px]" />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-brandOrange blur-[120px]" />
      </div>


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
              <h1 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80">Last Updated: March 27, 2025</p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">1. Introduction</h2>
                <p className="text-white/80">
                  Welcome to 1DERS Events Solutions ("we," "our," or "us"). We respect your privacy and are committed to
                  protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">2. Information We Collect</h2>
                <p className="text-white/80">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-white/80">
                  <li>
                    Personal information such as name, email address, phone number, and mailing address when you contact
                    us or request our services.
                  </li>
                  <li>
                    Information about your event preferences, requirements, and budget when you inquire about our
                    services.
                  </li>
                  <li>
                    Information about your interactions with our website, including browsing history, clicks, and time
                    spent on pages.
                  </li>
                  <li>Device information such as IP address, browser type, and operating system.</li>
                </ul>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">3. How We Use Your Information</h2>
                <p className="text-white/80">We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 text-white/80">
                  <li>Providing, maintaining, and improving our services.</li>
                  <li>Processing and fulfilling your requests and orders.</li>
                  <li>Communicating with you about our services, promotions, and events.</li>
                  <li>Personalizing your experience on our website.</li>
                  <li>Analyzing usage patterns to improve our website and services.</li>
                  <li>Protecting our rights, property, or safety, and that of our users or others.</li>
                </ul>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">4. Sharing Your Information</h2>
                <p className="text-white/80">We may share your information with:</p>
                <ul className="list-disc pl-6 text-white/80">
                  <li>Service providers who perform services on our behalf.</li>
                  <li>Professional advisors, such as lawyers, auditors, and insurers.</li>
                  <li>Government authorities or law enforcement officials if required by law.</li>
                  <li>Business partners or potential buyers in connection with a corporate transaction.</li>
                </ul>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">5. Your Rights</h2>
                <p className="text-white/80">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 text-white/80">
                  <li>The right to access and receive a copy of your personal information.</li>
                  <li>The right to correct inaccurate or incomplete information.</li>
                  <li>The right to request deletion of your personal information.</li>
                  <li>The right to restrict or object to processing of your personal information.</li>
                  <li>The right to data portability.</li>
                </ul>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">6. Security</h2>
                <p className="text-white/80">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">7. Changes to This Privacy Policy</h2>
                <p className="text-white/80">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-white">8. Contact Us</h2>
                <p className="text-white/80">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-white/80">
                  Email: info@1ders.in
                  <br />
                  Phone: +91 9810101023
                  <br />
                  Address: 803, 4th Floor, South Extension I, Arjun Nagar, Kotla Mubarakpur, New Delhi, Delhi 110003
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

