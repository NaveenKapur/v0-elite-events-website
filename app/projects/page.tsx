import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-medium mb-12">Our Projects</h1>

        <div className="space-y-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`${i % 2 === 0 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=800&width=1200&text=Project+${i}`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-medium mb-4">Project Showcase {i}</h2>
                <p className="text-white/70 mb-6">
                  We created an unforgettable experience for our client, focusing on every detail to ensure a seamless
                  event that exceeded expectations. From concept to execution, our team worked tirelessly to bring their
                  vision to life.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="text-white/70">Full event planning and coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="text-white/70">Custom design and decor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="text-white/70">Catering and entertainment management</span>
                  </li>
                </ul>
                <Button className="rounded-full bg-white text-black hover:bg-white/90 border-0">View Case Study</Button>
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

