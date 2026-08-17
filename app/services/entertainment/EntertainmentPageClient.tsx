"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { CheckCircle, Play, Music, Mic, Users, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/menu"

// Define the entertainment offerings
const entertainmentOfferings = [
  {
    title: "Live Music",
    description:
      "From classical ensembles to contemporary bands, we provide exceptional musical talent for all event types.",
    icon: <Music className="h-6 w-6 text-white" />,
    services: [
      "Celebrity artists and performers",
      "Live bands and orchestras",
      "DJs and electronic music",
      "Classical and instrumental ensembles",
      "Fusion and world music",
    ],
  },
  {
    title: "Performance Arts",
    description: "Captivating performances that create memorable moments and elevate your event experience.",
    icon: <Mic className="h-6 w-6 text-white" />,
    services: [
      "Dance troupes and choreographed performances",
      "Theatrical productions and shows",
      "Stand-up comedy and humor",
      "Magic and illusion shows",
      "Acrobatics and circus arts",
    ],
  },
  {
    title: "Cultural Showcases",
    description: "Authentic cultural performances that celebrate diversity and create immersive experiences.",
    icon: <Users className="h-6 w-6 text-white" />,
    services: [
      "Traditional folk performances",
      "Regional dance and music",
      "Cultural fusion showcases",
      "Heritage arts and crafts demonstrations",
      "International performance groups",
    ],
  },
  {
    title: "Interactive Entertainment",
    description: "Engaging experiences that involve your guests and create lasting memories.",
    icon: <Sparkles className="h-6 w-6 text-white" />,
    services: [
      "Interactive installations and experiences",
      "Participatory performances",
      "Roaming entertainment and ambient performers",
      "Digital and tech-based entertainment",
      "Customized interactive activities",
    ],
  },
]

// Define the artists
const artists = [
  {
    name: "Salman Khan",
    type: "Bollywood Actor",
    imageSrc: "/images/salman-khan-bollywood.avif",
  },
  {
    name: "Shefali Jariwala",
    type: "Dancer",
    imageSrc: "/images/shefali-jariwala-dancer.jpg",
  },
  {
    name: "Shruti Pathak",
    type: "Singer",
    imageSrc: "/images/shruti-pathak-singer.jpg",
  },
  {
    name: "Neeti Mohan",
    type: "Singer",
    imageSrc: "/images/neeti-mohan-bollywood.jpg",
  },
  {
    name: "Jubin Nautiyal",
    type: "Singer",
    imageSrc: "/images/jubin-nautiyal-singer.webp",
  },
  {
    name: "Mika Singh",
    type: "Singer",
    imageSrc: "/images/mika-singh-singer.jpg",
  },
  {
    name: "Sonu Nigam",
    type: "Singer",
    imageSrc: "/images/sonu-nigam-singer.webp",
  },
  {
    name: "Neha Kakkar",
    type: "Singer",
    imageSrc: "/images/neha-kakkar-singer.webp",
  },
]

// Define the case studies
const caseStudies = [
  {
    title: "Celebrity Wedding Performance",
    description:
      "We coordinated and managed performances by multiple A-list artists for a high-profile wedding, handling all logistics, technical requirements, and security to deliver a seamless entertainment experience for the couple and their guests.",
    imageSrc: "/images/private-event-host.JPG",
  },
  {
    title: "Cultural Festival Production",
    description:
      "Our team curated and produced a three-day cultural festival featuring over 50 performers across multiple stages, showcasing diverse art forms and creating an immersive experience for 10,000+ attendees.",
    imageSrc: "/images/celebrity-jubin-nautiyal.JPG",
  },
]

export default function EntertainmentPageClient() {
  const [activeOffering, setActiveOffering] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <>
      <Menu />
      <div className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-70" />
            <Image
              src="/images/entertainment.jpeg"
              alt="Entertainment Services"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradientPurple blur-[150px]" />
            <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-gradientPink blur-[150px]" />
          </div>

          <div className="container relative z-10 px-4 py-32 md:px-6 md:py-40">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm mb-6">
                  <span className="text-sm font-medium text-white">Entertainment Services</span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  World-Class{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Entertainment
                  </span>{" "}
                  Solutions
                </h1>

                <p className="mt-6 text-xl text-white/80 max-w-lg">
                  Captivating performances and entertainment experiences that create unforgettable moments and elevate
                  your events.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-3 text-white">
                    <span className="relative z-10">Explore Entertainment</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 hover:text-white flex items-center gap-2"
                    onClick={() => window.open("https://youtu.be/qVYQ55mcsOU?si=zW9m4Jh8o9Hmyqxs", "_blank")}
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>Watch Performances</span>
                  </Button>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
                  <iframe
                    src="https://www.youtube.com/embed/qVYQ55mcsOU?rel=0&controls=1"
                    title="Entertainment Showcase"
                    className="h-full w-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entertainment Offerings Section */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/90 to-black" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Offerings</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                Diverse{" "}
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Entertainment
                </span>{" "}
                Options
              </h2>

              <p className="mt-6 text-lg text-white/80">
                From celebrity performances to interactive experiences, we offer a wide range of entertainment
                solutions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {entertainmentOfferings.map((offering, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border ${
                    activeOffering === index ? "border-gradientPink bg-white/10" : "border-white/10 bg-white/5"
                  } p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 cursor-pointer`}
                  onClick={() => setActiveOffering(index)}
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradientPurple to-gradientPink p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                      {offering.icon}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white">{offering.title}</h3>

                  <p className="mt-4 text-white/70">{offering.description}</p>
                </div>
              ))}
            </div>

            {/* Selected offering details */}
            <div className="mt-12 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                {entertainmentOfferings[activeOffering].title} Services
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {entertainmentOfferings[activeOffering].services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gradientPink mt-0.5 shrink-0" />
                    <p className="text-white/90">{service}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button className="rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink text-white">
                  Explore {entertainmentOfferings[activeOffering].title} Options
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artists Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  Featured Talent
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Artist
                </span>{" "}
                Network
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Access to a diverse network of talented performers and artists for your events.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {artists.map((artist, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={artist.imageSrc || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80 flex items-end p-4">
                    <div>
                      <h3 className="font-medium text-white">{artist.name}</h3>
                      <p className="text-sm text-white/70">{artist.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="rounded-full border-2 border-white/20 bg-transparent text-white hover:border-white/40">
                View All Artists
              </Button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/90" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-6 flex items-center justify-center">
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPurple to-gradientPink"></div>
                <span className="mx-4 text-sm font-medium uppercase tracking-widest text-white/80">Our Work</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-gradientPink to-gradientPurple"></div>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                  Case
                </span>{" "}
                Studies
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Explore our successful entertainment projects that delivered exceptional experiences.
              </p>
            </div>

            <div className="space-y-24">
              {caseStudies.map((study, i) => (
                <div key={i} className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                  <div className={`${i % 2 === 0 ? "" : "order-1 md:order-2"}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <Image
                        src={study.imageSrc || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className={`${i % 2 === 0 ? "" : "order-2 md:order-1"}`}>
                    <h3 className="font-serif text-3xl font-bold text-white">{study.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-white/80">{study.description}</p>

                    <Button className="mt-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center gap-2">
                      <span>View Full Case Study</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
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
                  Ready to Create{" "}
                  <span className="bg-gradient-to-r from-gradientPurple to-gradientPink bg-clip-text text-transparent">
                    Memorable
                  </span>{" "}
                  Moments?
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Contact us today to discuss how our entertainment services can elevate your next event.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-8 py-6 text-lg font-medium text-white sm:w-auto"
                    onClick={() => (window.location.href = "https://wa.me/9198101023")}
                  >
                    <span className="relative z-10">Discuss Your Event</span>
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
          </div>
        </section>
      </div>
    </>
  )
}

