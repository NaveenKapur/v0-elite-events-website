"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ConfettiOverlay } from "@/components/confetti-overlay"
import { Footer } from "@/components/footer"

export default function CareersPage() {
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
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-white/80 hover:text-white"
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-60" />
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Join+Our+Team"
              alt="Join Our Team"
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
                  Careers
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h1 className="text-center font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_0_8px_rgba(0,0,0,0.6),_0_0_12px_rgba(0,0,0,0.4)]">
                <span className="bg-gradient-to-r from-gradientPurple via-white to-gradientPink bg-clip-text text-transparent [text-shadow:_none]">
                  Join
                </span>{" "}
                Our Team
              </h1>

              <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-black/40 px-6 py-4 text-center text-xl text-white/90 backdrop-blur-sm md:text-2xl">
                Be part of a creative team that crafts extraordinary experiences and brings visions to life.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Why Join Us</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Why Work With{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  1DERS
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Join a team that values creativity, innovation, and excellence in everything we do.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Creative Environment",
                  description:
                    "Work in a dynamic environment that encourages creative thinking and innovative solutions.",
                },
                {
                  title: "Growth Opportunities",
                  description:
                    "Develop your skills and advance your career with our comprehensive training and mentorship programs.",
                },
                {
                  title: "Diverse Projects",
                  description: "Work on a variety of exciting projects across different industries and event types.",
                },
                {
                  title: "Collaborative Culture",
                  description:
                    "Be part of a supportive team that values collaboration, communication, and mutual respect.",
                },
                {
                  title: "Work-Life Balance",
                  description:
                    "We understand the importance of balance and offer flexible work arrangements when possible.",
                },
                {
                  title: "Competitive Benefits",
                  description:
                    "Enjoy competitive compensation, health benefits, and other perks designed to support your wellbeing.",
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <h3 className="font-serif text-2xl font-bold text-white">{benefit.title}</h3>
                  <p className="mt-4 text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  Current Openings
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Open{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Positions
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Explore our current job openings and find the perfect role for your skills and passion.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Event Manager",
                  location: "Delhi NCR",
                  type: "Full-time",
                  description:
                    "We're looking for an experienced Event Manager to plan and execute high-profile events for our clients.",
                },
                {
                  title: "Creative Designer",
                  location: "Gurugram",
                  type: "Full-time",
                  description:
                    "Join our creative team to design stunning event concepts, layouts, and visual elements.",
                },
                {
                  title: "Marketing Specialist",
                  location: "Jaipur",
                  type: "Full-time",
                  description:
                    "Help us promote our services and events through various marketing channels and strategies.",
                },
                {
                  title: "Technical Production Coordinator",
                  location: "Delhi",
                  type: "Full-time",
                  description:
                    "Coordinate technical aspects of events including sound, lighting, and audio-visual elements.",
                },
                {
                  title: "Client Relationship Manager",
                  location: "Ghaziabad",
                  type: "Full-time",
                  description:
                    "Build and maintain strong relationships with our clients to ensure their satisfaction and loyalty.",
                },
              ].map((job, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                          {job.type}
                        </span>
                      </div>
                      <p className="mt-4 text-white/70">{job.description}</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                      <Button className="rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink text-white hover:opacity-90">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-lg text-white/80">
                Don't see a position that matches your skills? Send us your resume anyway!
              </p>
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  Application Process
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                How to{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Apply
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Our application process is designed to be straightforward and transparent.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Submit Application",
                  description: "Fill out our online application form and upload your resume and cover letter.",
                },
                {
                  step: "02",
                  title: "Initial Screening",
                  description:
                    "Our HR team will review your application and reach out if your qualifications match our needs.",
                },
                {
                  step: "03",
                  title: "Interviews",
                  description:
                    "Participate in interviews with our team to discuss your experience and fit for the role.",
                },
                {
                  step: "04",
                  title: "Final Decision",
                  description: "We'll make a decision and extend an offer to the selected candidate.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-gradientPurple/10"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                      <span className="text-xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-4 text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Join
                  </span>{" "}
                  Our Team?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Take the first step towards an exciting career with 1DERS Events Solutions.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto">
                    <span className="relative z-10">View Open Positions</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>
                  <Button
                    variant="outline"
                    className="group relative w-full overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-6 text-lg font-medium text-white hover:border-white/40 sm:w-auto"
                  >
                    <span className="relative z-10">Contact Recruitment Team</span>
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

