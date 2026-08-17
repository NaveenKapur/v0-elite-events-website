"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/dropdown-menu"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import { Footer } from "@/components/footer"

interface ServiceLayoutProps {
  children: ReactNode
}

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

export default function ServiceLayout({ children }: ServiceLayoutProps) {
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
          <Link
            href="/"
            className="text-xl font-medium text-white/80 hover:text-white"
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
              href="https://www.facebook.com/1ders/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
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
              href="https://www.youtube.com/@1dersevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
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
            <a href="https://wa.me/9198101023">Book Consultation</a>
          </Button>
        </div>
      </div>

      <main className="relative z-10 pt-24">{children}</main>
      <Footer />
    </div>
  )
}

