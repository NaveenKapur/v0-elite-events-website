import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ders%20logo%20footer-osmbo6RLTfJkhYe08S8SA3pM1BPV4l.png"
                alt="1DERS Events Solutions"
                width={180}
                height={60}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-white/70">1Ders Events Solutions</p>
            <p className="mt-2 text-white/70">
              +91 9810101023 (Main)
              <br />
              info@1ders.in
              <br />
              803, 4th Floor, South Extension I,
              <br />
              Arjun Nagar. New Delhi, 110003
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white">Services I</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Destination Weddings",
                "Corporate Events",
                "Brand Advertisement",
                "Exhibition Management",
                "Dealers Meet",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/70 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white">Services II</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Entertainment",
                "DJ Sound & Light",
                "Product Launch",
                "Seminars & Conferences",
                "Stall Fabrication",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/70 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {["About Us", "Our Team", "Careers", "Press"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/70 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <Link
                href="https://www.youtube.com/@1dersevents"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://instagram.com/1ders.events?igshid=MDM4ZDc5MmU="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/1ders/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/1ders-events-solutions-pvt-ltd-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-white/70 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-white/70 transition-colors hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/70 transition-colors hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 transition-colors hover:text-white">
                  We Are Hiring
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Onder Events. All rights reserved. Ideas, concepts, execution.
          </p>
          <p className="mt-2 text-white/60">
            Powered By{" "}
            <a
              href="https://www.nkdigital.agency/"
              className="hover:text-white transition-colors"
              title="Digital Marketing Company"
            >
              Nk Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

