"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MegaMenu } from "@/components/mega-menu"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
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
            className={`relative text-sm font-medium transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${
              isActive("/") ? "text-white after:w-full" : "text-white/80 after:w-0"
            }`}
          >
            Home
          </Link>
          <MegaMenu trigger="Services" isActive={isActive("/services")} />
          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${
              isActive("/about") ? "text-white after:w-full" : "text-white/80 after:w-0"
            }`}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className={`relative text-sm font-medium transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${
              isActive("/portfolio") ? "text-white after:w-full" : "text-white/80 after:w-0"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`relative text-sm font-medium transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${
              isActive("/contact") ? "text-white after:w-full" : "text-white/80 after:w-0"
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="https://www.youtube.com/@1dersevents"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-white transition-colors hover:text-gradientPink" />
            </Link>
            <Link
              href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white transition-colors hover:text-gradientPink" />
            </Link>
            <Link
              href="https://www.facebook.com/1ders/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-white transition-colors hover:text-gradientPink" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white transition-colors hover:text-gradientPink" />
            </Link>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden rounded-full border-0 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 md:flex"
          >
            <a href="https://wa.me/9198101023">Book Consultation</a>
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
  )
}
