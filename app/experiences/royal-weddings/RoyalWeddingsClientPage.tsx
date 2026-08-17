"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"
import { Menu } from "@/components/menu"

export default function RoyalWeddingsClientPage() {
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
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royal-Wedding-in-Rajasthan.jpg-2KtJkUQ2pAfQgoAS35jskIkxdgC5ES.jpeg"
              alt="Royal Wedding in Rajasthan"
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
                  Luxury Destination Weddings
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Royal
                </span>{" "}
                Weddings in Rajasthan
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Experience the grandeur of a royal Rajasthani wedding amidst historic palaces and majestic landscapes.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto"
                  onClick={() => (window.location.href = "https://wa.me/9198101023")}
                >
                  <span className="relative z-10">Discuss Your Wedding</span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Button>
                <Button
                  variant="outline"
                  className="group relative w-full overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-6 text-lg font-medium text-white hover:border-white/40 sm:w-auto"
                  onClick={() => (window.location.href = "/portfolio")}
                >
                  <span className="relative z-10">View Our Portfolio</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections would go here */}

        {/* CTA Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Begin Your{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Royal
                  </span>{" "}
                  Journey
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to start planning your dream royal wedding in Rajasthan.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto"
                    onClick={() => (window.location.href = "https://wa.me/9198101023")}
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

