"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, X, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { DropdownMenu } from "@/components/dropdown-menu"
import { Footer } from "@/components/footer"

// Define the service items for the dropdown menu
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

// Define the portfolio categories
const categories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "corporate", name: "Corporate Events" },
  { id: "product-launches", name: "Product Launches" },
  { id: "exhibitions", name: "Exhibitions" },
  { id: "entertainment", name: "Entertainment" },
  { id: "conferences", name: "Conferences" },
]

// Define the media types
const mediaTypes = [
  { id: "all", name: "All Media" },
  { id: "images", name: "Images" },
  { id: "videos", name: "Videos" },
]

// Define the portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Royal Palace Wedding",
    category: "weddings",
    description: "An opulent royal palace wedding in Rajasthan with 300 international guests.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/royal-rajasthan-wedding.webp",
    type: "image",
    featured: true,
  },
  {
    id: 2,
    title: "Beach Wedding in Goa",
    category: "weddings",
    description: "A romantic beachfront celebration with 250 guests.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/goa-wedding-view.avif",
    type: "image",
  },
  {
    id: 3,
    title: "Intimate Garden Wedding",
    category: "weddings",
    description: "A charming garden wedding with personalized details for 100 guests.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/luxury-wedding.jpg",
    type: "image",
  },
  {
    id: 4,
    title: "Tech Product Launch",
    category: "product-launches",
    description: "Innovative product reveal for a leading technology company.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/product-launch-home.png",
    type: "image",
    featured: true,
  },
  {
    id: 5,
    title: "Automotive Launch Event",
    category: "product-launches",
    description: "Dramatic reveal of a luxury vehicle with immersive experiences.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/product-launch-event.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "Fashion Line Launch",
    category: "product-launches",
    description: "Stylish unveiling of a designer's new collection.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/fashion-shows-home.jpg",
    type: "image",
  },
  {
    id: 7,
    title: "Corporate Annual Conference",
    category: "corporate",
    description: "A three-day international conference for 500+ executives.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/annual-meet.jpg",
    type: "image",
    featured: true,
  },
  // Removed Executive Leadership Retreat - now in youtubeVideos
  // Removed Corporate Team Building - now in youtubeVideos
  {
    id: 10,
    title: "Award-Winning Exhibition Booth",
    category: "exhibitions",
    description: "Innovative booth design for an international trade show.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/stall-fabrications.JPG",
    type: "image",
    featured: true,
  },
  {
    id: 11,
    title: "Art Exhibition Design",
    category: "exhibitions",
    description: "Contemporary gallery space designed for a traveling art exhibition.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/art-exhibition-service.jpg",
    type: "image",
    featured: false,
  },
  {
    id: 12,
    title: "Trade Show Pavilion",
    category: "exhibitions",
    description: "Multi-brand pavilion design for an industry trade show.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/exhibition-management2.webp",
    type: "image",
    featured: false,
  },
  {
    id: 13,
    title: "Celebrity Performance",
    category: "entertainment",
    description: "Coordinating A-list artist performances for a high-profile event.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/school-college-fest.jpeg",
    type: "image",
    featured: true,
  },
  {
    id: 14,
    title: "Cultural Festival Production",
    category: "entertainment",
    description: "Multi-day festival featuring diverse performances and experiences.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/cultural-fest.jpg",
    type: "image",
  },
  {
    id: 15,
    title: "Gala Dinner Entertainment",
    category: "entertainment",
    description: "Sophisticated entertainment program for a charity gala.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/corporate-gala-dubai.jpg",
    type: "image",
  },
  {
    id: 16,
    title: "Medical Conference",
    category: "conferences",
    description: "International medical conference with specialized technical requirements.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/seminar-conferences.jpg",
    type: "image",
    featured: true,
  },
  // Removed Tech Industry Summit - now in youtubeVideos
  {
    id: 18,
    title: "Educational Symposium",
    category: "conferences",
    description: "Academic gathering with international speakers and workshops.",
    imageSrc: "https://www.nkdigital.agency/clients/oneders/img/educational-synopsis.jpg",
    type: "image",
  },
]

// Define the YouTube videos
const youtubeVideos = [
  {
    id: 1,
    title: "Royal Palace Wedding Highlights",
    category: "weddings",
    description: "Cinematic highlights from a royal palace wedding in Rajasthan.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/royal-wedding-video-thumb.jpg",
    youtubeId: "L4LDvwjBnI8",
    featured: true,
  },
  {
    id: 2,
    title: "Beach Wedding in Goa",
    category: "weddings",
    description: "Beautiful moments from a beachfront celebration in Goa.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/beach-wedding-video-thumb.jpg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Corporate Event Showreel",
    category: "corporate",
    description: "Showcasing our expertise in corporate event management.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/corporate-video-thumb.jpg",
    youtubeId: "pJW4rs9KMpM",
    featured: true,
  },
  {
    id: 4,
    title: "Executive Leadership Retreat",
    category: "corporate",
    description: "Strategic planning and team building for C-suite executives.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/leadership-video-thumb.jpg",
    youtubeId: "WVdSDYpmoD8",
    featured: true,
  },
  {
    id: 5,
    title: "Product Launch Spectacle",
    category: "product-launches",
    description: "Behind the scenes of our most innovative product launch.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/product-launch-video-thumb.jpg",
    youtubeId: "KjHSNdWV-C0",
    featured: true,
  },
  {
    id: 6,
    title: "Automotive Reveal",
    category: "product-launches",
    description: "Dramatic unveiling of a luxury vehicle.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/automotive-video-thumb.jpg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 7,
    title: "Exhibition Design Process",
    category: "exhibitions",
    description: "The journey from concept to award-winning exhibition booth.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/exhibition-video-thumb.jpg",
    youtubeId: "1qu0_4xNeH0",
    featured: true,
  },
  {
    id: 8,
    title: "Trade Show Success Story",
    category: "exhibitions",
    description: "Client testimonial and results from a major trade show.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/trade-show-video-thumb.jpg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 9,
    title: "Celebrity Performance Highlights",
    category: "entertainment",
    description: "Spectacular moments from a celebrity performance we coordinated.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/celebrity-video-thumb.jpg",
    youtubeId: "qVYQ55mcsOU",
    featured: true,
  },
  {
    id: 10,
    title: "Cultural Festival Recap",
    category: "entertainment",
    description: "Highlights from a three-day cultural festival.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/festival-video-thumb.jpg",
    youtubeId: "NPuw5jd-0Wc",
  },
  {
    id: 11,
    title: "Conference Production",
    category: "conferences",
    description: "Behind the scenes of a major international conference.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/conference-video-thumb.jpg",
    youtubeId: "9IrJEKTaE_I",
    featured: true,
  },
  {
    id: 12,
    title: "Tech Summit Highlights",
    category: "conferences",
    description: "Key moments from a technology industry summit.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/tech-summit-video-thumb.jpg",
    youtubeId: "GWhCfJIi36k",
  },
  {
    id: 13,
    title: "Corporate Team Building",
    category: "corporate",
    description: "Engaging team activities for a multinational company.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/team-building-video-thumb.jpg",
    youtubeId: "s9LFKLY45zU",
    featured: true,
  },
  {
    id: 14,
    title: "Leadership Retreat Highlights",
    category: "corporate",
    description: "Key moments from an executive leadership retreat.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/leadership-video-thumb.jpg",
    youtubeId: "ks0YwvDSAmI",
  },
  {
    id: 15,
    title: "Automotive Reveal",
    category: "product-launches",
    description: "Dramatic unveiling of a luxury vehicle.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/automotive-video-thumb.jpg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 16,
    title: "Tech Industry Summit",
    category: "conferences",
    description: "Cutting-edge conference for technology leaders and innovators.",
    thumbnailSrc: "https://www.nkdigital.agency/clients/oneders/img/tech-summit-video-thumb.jpg",
    youtubeId: "vcBBkWwMTp0",
    featured: true,
  },
]

// YouTube Video Component
function YouTubeEmbed({
  youtubeId,
  title,
  autoplay = false,
  className = "",
}: { youtubeId: string; title: string; autoplay?: boolean; className?: string }) {
  return (
    <div className={`aspect-video w-full overflow-hidden rounded-xl ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&showinfo=0&controls=1${autoplay ? "&autoplay=1" : ""}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      ></iframe>
    </div>
  )
}

export default function PortfolioClientPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeMediaType, setActiveMediaType] = useState("all")
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [filteredItems, setFilteredItems] = useState<any[]>([])

  // Apply filters to portfolio items and videos
  useEffect(() => {
    let items: any[] = []

    // Filter by media type
    if (activeMediaType === "all" || activeMediaType === "images") {
      const filteredImages = portfolioItems.filter(
        (item) => activeCategory === "all" || item.category === activeCategory,
      )
      items = [...items, ...filteredImages]
    }

    if (activeMediaType === "all" || activeMediaType === "videos") {
      const filteredVideos = youtubeVideos.filter(
        (video) => activeCategory === "all" || video.category === activeCategory,
      )
      items = [...items, ...filteredVideos]
    }

    // Sort items to show featured items first
    items.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })

    setFilteredItems(items)
  }, [activeCategory, activeMediaType])

  // Add this after the useEffect hook
  useEffect(() => {
    // Add event listener to hide video info when clicking on videos
    const handleVideoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "IFRAME") {
        const videoInfo = target.closest(".relative")?.querySelector(".video-info")
        if (videoInfo) {
          videoInfo.classList.add("opacity-0")
        }
      }
    }

    document.addEventListener("click", handleVideoClick)

    return () => {
      document.removeEventListener("click", handleVideoClick)
    }
  }, [])

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
            <Link
              href="/"
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
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
              className="relative text-sm font-medium text-white transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full"
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
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://www.facebook.com/1ders/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@1dersevents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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
            className="text-xl font-medium text-white hover:text-white/80"
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
            <a href="tel:+919810248854">Book Consultation</a>
          </Button>
        </div>
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="https://www.nkdigital.agency/clients/oneders/img/portfolio-header.jpg"
              alt="Portfolio showcase"
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
                  Our Work
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                Our{" "}
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Portfolio
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Explore our collection of extraordinary events and experiences that showcase our creativity and
                expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Filter Button - Keeping this for mobile users */}
        <section className="sticky top-24 z-30 bg-black/80 py-4 backdrop-blur-md">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Mobile Filter Button */}
              <div className="flex items-center justify-between md:hidden">
                <h2 className="text-xl font-bold text-white">Portfolio Gallery</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 rounded-full border-white/20 bg-black/50 text-white"
                  onClick={() => setShowFilterMenu(!showFilterMenu)}
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </div>

              {/* Mobile Filter Menu */}
              {showFilterMenu && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md md:hidden">
                  <div className="w-full max-w-md rounded-xl border border-white/10 bg-black/90 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Filter Options</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10"
                        onClick={() => setShowFilterMenu(false)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-medium text-white/80">Category</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "outline"}
                            size="sm"
                            className={`rounded-full px-4 py-1 text-sm ${
                              activeCategory === category.id
                                ? "bg-gradient-to-r from-gradientPurple to-gradientPink text-white"
                                : "border-white/20 bg-black/50 text-white hover:bg-white/10"
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                          >
                            {category.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-medium text-white/80">Media Type</h4>
                      <div className="flex flex-wrap gap-2">
                        {mediaTypes.map((type) => (
                          <Button
                            key={type.id}
                            variant={activeMediaType === type.id ? "default" : "outline"}
                            size="sm"
                            className={`rounded-full px-4 py-1 text-sm ${
                              activeMediaType === type.id
                                ? "bg-gradient-to-r from-gradientPurple to-gradientPink text-white"
                                : "border-white/20 bg-black/50 text-white hover:bg-white/10"
                            }`}
                            onClick={() => setActiveMediaType(type.id)}
                          >
                            {type.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-gradientPurple to-gradientPink text-white"
                      onClick={() => setShowFilterMenu(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery Section */}
        <section className="relative py-12">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            {/* Gallery Title and Tabs */}
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl mb-6">
                All{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>

              {/* Category Tabs */}
              <div className="border-b border-white/10 mb-6">
                <div className="flex flex-wrap gap-2 md:gap-6 pb-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`text-sm font-medium px-1 py-2 relative ${
                        activeCategory === category.id ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                      {activeCategory === category.id && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gradientPurple to-gradientPink"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Media Type Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-sm font-medium text-white/80">Media Type:</span>
                {mediaTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={activeMediaType === type.id ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full px-4 py-1 text-sm ${
                      activeMediaType === type.id
                        ? "bg-gradient-to-r from-gradientPurple to-gradientPink text-white"
                        : "border-white/20 bg-black/50 text-white hover:bg-white/10"
                    }`}
                    onClick={() => setActiveMediaType(type.id)}
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative ${
                    item.youtubeId ? "aspect-video" : "aspect-[4/3]"
                  } overflow-hidden rounded-xl`}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </div>
                  )}

                  {/* Video or Image */}
                  {item.youtubeId ? (
                    <div className="relative h-full w-full">
                      {/* Direct YouTube embed for video items */}
                      <YouTubeEmbed youtubeId={item.youtubeId} title={item.title} />

                      {/* Content overlay that disappears on video interaction */}
                      <div className="video-info absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                        <div className="mb-2 rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm w-fit">
                          {categories.find((cat) => cat.id === item.category)?.name}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Image */}
                      <Image
                        src={
                          item.imageSrc ||
                          item.thumbnailSrc ||
                          `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(item.title) || "/placeholder.svg"}`
                        }
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 pointer-events-none">
                        <div className="mb-2 rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm w-fit pointer-events-auto">
                          {categories.find((cat) => cat.id === item.category)?.name}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm text-white/80">{item.description}</p>

                        <div className="mt-4 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-auto">
                          <Button
                            variant="outline"
                            className="rounded-full border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 hover:text-white"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
                <div className="mb-4 rounded-full bg-white/10 p-4">
                  <Filter className="h-8 w-8 text-white/70" />
                </div>
                <h3 className="text-xl font-bold text-white">No items found</h3>
                <p className="mt-2 text-white/70">Try adjusting your filters to see more content.</p>
                <Button
                  className="mt-6 bg-gradient-to-r from-gradientPurple to-gradientPink text-white"
                  onClick={() => {
                    setActiveCategory("all")
                    setActiveMediaType("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Video Modal */}
        {showVideoModal && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl">
              <Button
                variant="outline"
                size="icon"
                className="absolute -right-4 -top-4 z-10 rounded-full border-white/20 bg-black text-white hover:bg-white/10"
                onClick={() => {
                  setShowVideoModal(false)
                  setSelectedVideo(null)
                }}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
              <YouTubeEmbed youtubeId={selectedVideo} title="YouTube Video" autoplay={true} />
            </div>
          </div>
        )}

        {/* Category Sections */}
        {activeCategory === "all" && activeMediaType === "all" && (
          <>
            {categories.slice(1).map((category) => {
              const categoryItems: any[] = [
                ...portfolioItems.filter((item) => item.category === category.id),
                ...youtubeVideos.filter((video) => video.category === category.id),
              ].slice(0, 4)

              if (categoryItems.length === 0) return null

              return (
                <section key={category.id} className="relative py-16">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
                  </div>

                  <div className="container relative z-10 px-4 md:px-6">
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <h2 className="font-serif text-3xl font-bold text-white">{category.name}</h2>
                        <p className="mt-2 text-lg text-white/70">Our featured {category.name.toLowerCase()} work</p>
                      </div>
                      <Button
                        variant="outline"
                        className="hidden rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 sm:flex"
                        onClick={() => setActiveCategory(category.id)}
                      >
                        View All
                      </Button>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {categoryItems.map((item) => (
                        <div
                          key={item.id}
                          className={`group relative ${
                            item.youtubeId ? "aspect-video" : "aspect-[4/3]"
                          } overflow-hidden rounded-xl`}
                        >
                          {/* Video or Image */}
                          {item.youtubeId ? (
                            <div className="relative h-full w-full">
                              {/* Direct YouTube embed for video items */}
                              <YouTubeEmbed youtubeId={item.youtubeId} title={item.title} />

                              {/* Content overlay that disappears on video interaction */}
                              <div className="video-info absolute inset-0 flex flex-col justify-end p-4 z-20 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                              </div>
                            </div>
                          ) : (
                            <>
                              {/* Image */}
                              <Image
                                src={
                                  item.imageSrc ||
                                  item.thumbnailSrc ||
                                  `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(item.title) || "/placeholder.svg"}`
                                }
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                              {/* Content */}
                              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 pointer-events-none">
                                <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-center sm:hidden">
                      <Button
                        variant="outline"
                        className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                        onClick={() => setActiveCategory(category.id)}
                      >
                        View All {category.name}
                      </Button>
                    </div>
                  </div>
                </section>
              )
            })}
          </>
        )}

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

