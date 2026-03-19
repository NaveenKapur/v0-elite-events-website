"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialCardProps {
  imageSrc: string
  title: string
  description: string
  linkHref: string
  linkText?: string
  shareText?: string
}

export function SocialCard({
  imageSrc,
  title,
  description,
  linkHref,
  linkText = "Explore More",
  shareText = "Share this experience",
}: SocialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: description,
          url: window.location.origin + linkHref,
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText(window.location.origin + linkHref)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Could not copy text: ", err))
    }
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
      </div>

      <div className="relative p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>

        <div className="flex items-center justify-between">
          <Link href={linkHref}>
            <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gradientPurple to-gradientPink px-6 py-2 text-white">
              <span className="relative z-10 flex items-center">
                {linkText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-gradientPink to-gradientPurple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            aria-label="Share this content"
          >
            <Share2 className="h-4 w-4" />
            <span className="text-sm hidden md:inline">{shareText}</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

