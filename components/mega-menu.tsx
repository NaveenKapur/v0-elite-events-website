"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Music, Briefcase, Truck, PresentationIcon as PresentationChart } from "lucide-react"

interface ServiceCategory {
  name: string
  icon: React.ReactNode
  services: {
    name: string
    href: string
    description: string
  }[]
}

interface MegaMenuProps {
  trigger: string
  isActive?: boolean
}

export function MegaMenu({ trigger, isActive = false }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const serviceCategories: ServiceCategory[] = [
    {
      name: "Entertainment",
      icon: <Music className="h-6 w-6 text-gradientPink" />,
      services: [
        {
          name: "Entertainment",
          href: "/services/entertainment",
          description: "Live performances and entertainment solutions",
        },
        {
          name: "DJ Sound & Light",
          href: "/services/dj-sound-light",
          description: "Professional audio and lighting services",
        },
        {
          name: "Corporate Entertainment",
          href: "/services/corporate-entertainment",
          description: "Tailored entertainment for corporate events",
        },
      ],
    },
    {
      name: "Event Management",
      icon: <Briefcase className="h-6 w-6 text-gradientPurple" />,
      services: [
        {
          name: "Event Management",
          href: "/services/event-management",
          description: "Full-service event planning and execution",
        },
        {
          name: "Destination Wedding",
          href: "/services/destination-wedding",
          description: "Exotic wedding planning and coordination",
        },
        {
          name: "Exhibition Management",
          href: "/services/exhibition-management",
          description: "Trade show and exhibition organization",
        },
        {
          name: "Dealers Meet",
          href: "/services/dealers-meet",
          description: "Dealer and distributor meeting coordination",
        },
      ],
    },
    {
      name: "Corporate Events",
      icon: <PresentationChart className="h-6 w-6 text-blue-400" />,
      services: [
        {
          name: "Seminars & Conferences",
          href: "/services/seminars-conferences",
          description: "Professional conference organization",
        },
        {
          name: "Product Launch",
          href: "/services/product-launch",
          description: "Impactful product introduction events",
        },
        {
          name: "Brand & Advertisement",
          href: "/services/brand-advertisement",
          description: "Strategic brand promotion events",
        },
      ],
    },
    {
      name: "Support Services",
      icon: <Truck className="h-6 w-6 text-amber-400" />,
      services: [
        {
          name: "Logistics",
          href: "/services/logistics",
          description: "Event logistics and transportation",
        },
        {
          name: "Hospitality",
          href: "/services/hospitality",
          description: "Guest accommodation and catering",
        },
        {
          name: "Stall Fabrication",
          href: "/services/stall-fabrication",
          description: "Custom booth and stall design",
        },
        {
          name: "School/College Fest",
          href: "/services/school-college-fest",
          description: "Educational institution event management",
        },
      ],
    },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center gap-1 text-sm font-medium ${
          isActive ? "text-white" : "text-white/80"
        } transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${
          isActive ? "after:w-full" : ""
        }`}
      >
        {trigger}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-50 mt-4 w-[90vw] max-w-6xl -translate-x-1/2 rounded-xl bg-black/95 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={service.href}
                      className="group block space-y-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-sm font-medium text-white/90 transition-colors group-hover:text-gradientPink">
                        {service.name}
                      </div>
                      <p className="text-xs text-white/60 transition-colors group-hover:text-white/80">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 rounded-lg bg-gradient-to-r from-gradientPurple/20 to-gradientPink/20 p-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Need a custom event solution?</h3>
              <p className="text-sm text-white/70">
                Our team can create tailored event experiences to meet your specific requirements.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

