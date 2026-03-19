import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <header className="w-full py-6 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-medium">
            Planza <span className="text-xs align-super">®</span>
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/events" className="text-white/80 hover:text-white text-sm">
                Events
              </Link>
              <Link href="/projects" className="text-white/80 hover:text-white text-sm">
                Projects
              </Link>
              <Link href="/pricing" className="text-white text-sm">
                Pricing
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white text-sm">
                Contact
              </Link>
            </nav>
            <Button variant="outline" className="rounded-full bg-white text-black hover:bg-white/90 border-0">
              Get this Template
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Simple, Transparent Pricing</h1>
          <p className="text-white/70 text-lg">
            Choose the perfect package for your event needs. All plans include our signature attention to detail and
            personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Essential",
              price: "$2,500",
              description: "Perfect for intimate gatherings and small events",
              features: [
                "Event planning consultation",
                "Day-of coordination",
                "Vendor recommendations",
                "Timeline creation",
                "Limited email support",
              ],
            },
            {
              name: "Premium",
              price: "$5,000",
              description: "Ideal for medium-sized events requiring more attention",
              features: [
                "Everything in Essential",
                "Full planning & coordination",
                "Vendor management",
                "Design consultation",
                "Unlimited email support",
                "On-site coordination (8 hours)",
              ],
              featured: true,
            },
            {
              name: "Luxury",
              price: "$10,000+",
              description: "Comprehensive service for large or complex events",
              features: [
                "Everything in Premium",
                "Custom event design",
                "Full vendor selection & management",
                "Multiple planning meetings",
                "Guest management",
                "On-site coordination (full event)",
                "Post-event wrap-up",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg p-8 border ${plan.featured ? "border-white bg-white/5" : "border-white/20"}`}
            >
              <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {!plan.price.includes("+") && <span className="text-white/70 mb-1">starting</span>}
              </div>
              <p className="text-white/70 mb-6">{plan.description}</p>
              <Button
                className={`w-full rounded-full mb-8 ${
                  plan.featured ? "bg-white text-black hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Choose Plan
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-white/70 mt-0.5 shrink-0" />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-white/20 rounded-lg text-center">
          <h2 className="text-2xl font-medium mb-4">Need a custom solution?</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We understand that every event is unique. Contact us for a personalized quote tailored to your specific
            requirements.
          </p>
          <Button className="rounded-full bg-white text-black hover:bg-white/90 border-0">Contact Us</Button>
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

