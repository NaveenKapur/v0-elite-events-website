import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-medium mb-12">Our Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src={`/placeholder.svg?height=600&width=800&text=Event+${i}`}
                  alt={`Event ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Event Experience {i}</h3>
                <p className="text-white/70">
                  A memorable celebration that created lasting impressions for all guests.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-12 px-4 md:px-8 border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-white text-xl font-medium">
                Planza <span className="text-xs align-super">®</span>
              </Link>
              <p className="mt-4 text-white/70">
                Your trusted partner for extraordinary events that leave lasting impressions.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Social Gatherings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Conferences
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70">hello@planza.com</li>
                <li className="text-white/70">+1 (555) 123-4567</li>
                <li className="text-white/70">123 Event Street, Suite 100</li>
                <li className="text-white/70">New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Planza. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/70 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

