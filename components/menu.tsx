"use client"

import {
  MenuIcon,
  ChevronDown,
  ChevronRight,
  Music,
  Briefcase,
  PresentationIcon as PresentationChart,
  Truck,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Menu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const serviceCategories = [
    {
      name: "Entertainment",
      icon: <Music className="h-5 w-5 text-gradientPink" />,
      services: [
        { name: "Entertainment", href: "/services/entertainment" },
        { name: "DJ Sound & Light", href: "/services/dj-sound-light" },
        { name: "Corporate Entertainment", href: "/services/corporate-entertainment" },
      ],
    },
    {
      name: "Event Management",
      icon: <Briefcase className="h-5 w-5 text-gradientPurple" />,
      services: [
        { name: "Event Management", href: "/services/event-management" },
        { name: "Destination Wedding", href: "/services/destination-wedding" },
        { name: "Exhibition Management", href: "/services/exhibition-management" },
        { name: "Dealers Meet", href: "/services/dealers-meet" },
      ],
    },
    {
      name: "Corporate Events",
      icon: <PresentationChart className="h-5 w-5 text-blue-400" />,
      services: [
        { name: "Seminars & Conferences", href: "/services/seminars-conferences" },
        { name: "Product Launch", href: "/services/product-launch" },
        { name: "Brand & Advertisement", href: "/services/brand-advertisement" },
      ],
    },
    {
      name: "Support Services",
      icon: <Truck className="h-5 w-5 text-amber-400" />,
      services: [
        { name: "Logistics", href: "/services/logistics" },
        { name: "Hospitality", href: "/services/hospitality" },
        { name: "Stall Fabrication", href: "/services/stall-fabrication" },
        { name: "School/College Fest", href: "/services/school-college-fest" },
      ],
    },
  ]

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-white/20 text-white hover:bg-white/10 hover:text-white md:hidden"
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="border-white/10 bg-black/95 backdrop-blur-md">
        <div className="flex flex-col gap-6 py-6">
          <Link href="/" className="mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ders%20logo%20footer-osmbo6RLTfJkhYe08S8SA3pM1BPV4l.png"
              alt="1DERS Events Solutions"
              width={156}
              height={52}
              className="h-16 w-auto object-contain"
            />
          </Link>

          <div className="flex flex-col">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between text-lg font-medium text-white hover:text-white/80"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="mt-2 ml-2 space-y-3 border-l border-white/20 pl-4">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="flex items-center justify-between text-base font-medium text-white/90 hover:text-white"
                    >
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span>{category.name}</span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${expandedCategory === category.name ? "rotate-90" : ""}`}
                      />
                    </button>

                    {expandedCategory === category.name && (
                      <div className="ml-7 space-y-2">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block text-sm text-white/70 hover:text-white"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-lg font-medium text-white hover:text-white/80">
            About
          </Link>
          <Link href="/portfolio" className="text-lg font-medium text-white hover:text-white/80">
            Portfolio
          </Link>
          <Link href="/contact" className="text-lg font-medium text-white hover:text-white/80">
            Contact
          </Link>
          <Button asChild className="mt-4 bg-gradient-to-r from-gradientPurple to-gradientPink text-white hover:opacity-90">
            <a href="tel:+919810248854">Book Consultation</a>
          </Button>
        </div>
        <div className="mt-6 flex items-center gap-6 border-t border-white/10 pt-6">
          <Link
            href="https://www.youtube.com/@1dersevents"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6 text-white hover:text-gradientPink transition-colors" />
          </Link>
          <Link
            href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-white hover:text-gradientPink transition-colors" />
          </Link>
          <Link href="https://www.facebook.com/1ders/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-white hover:text-gradientPink transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-white hover:text-gradientPink transition-colors" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

