"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface DropdownItem {
  name: string
  href: string
}

interface DropdownMenuProps {
  trigger: string
  items: DropdownItem[]
  isActive?: boolean
}

export function DropdownMenu({ trigger, items, isActive = false }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center gap-1 text-sm font-medium ${
          isActive ? "text-white" : "text-white/80"
        } transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gradientPurple after:to-gradientPink after:transition-all hover:after:w-full ${
          isActive ? "after:w-full" : ""
        }`}
      >
        {trigger}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-md bg-black/95 shadow-lg ring-1 ring-white/10 backdrop-blur-lg">
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

