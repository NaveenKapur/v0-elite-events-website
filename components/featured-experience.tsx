import { SocialCard } from "@/components/social-card"

export function FeaturedExperience() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-6 flex items-center justify-center">
            <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
            <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
              Featured Experience
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
              Royal
            </span>{" "}
            Experiences
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Discover our most extraordinary events and celebrations that showcase the pinnacle of luxury and elegance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <SocialCard
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royal-Wedding-in-Rajasthan.jpg-2KtJkUQ2pAfQgoAS35jskIkxdgC5ES.jpeg"
            title="Royal Weddings in Rajasthan"
            description="Experience the grandeur of a royal Rajasthani wedding amidst historic palaces and majestic landscapes. Our bespoke wedding experiences blend tradition with luxury."
            linkHref="/services/destination-wedding"
            linkText="Explore Royal Weddings"
          />

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Why Choose Royal Experiences?</h3>
              <ul className="space-y-3">
                {[
                  "Exclusive access to heritage properties and palaces",
                  "Customized royal themes and traditional ceremonies",
                  "Luxury accommodations for all guests",
                  "Authentic cultural performances and entertainment",
                  "Gourmet regional and international cuisine",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-gradientPurple/20 to-gradientPink/20 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Ready to Plan Your Royal Event?</h3>
              <p className="text-white/80 mb-6">
                Let us create an unforgettable royal experience tailored to your vision and dreams.
              </p>
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink text-white font-medium hover:opacity-90 transition-opacity">
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

