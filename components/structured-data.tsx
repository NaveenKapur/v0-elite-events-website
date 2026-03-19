export function EventPlanningBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventPlanningBusiness",
    name: "1DERS Events Solutions",
    url: "https://1ders.in",
    logo: "https://1ders.in/logo.png",
    image: "https://1ders.in/img/og-image.jpg",
    description:
      "1DERS Events Solutions specializes in creating extraordinary corporate events, destination weddings, and social gatherings with unparalleled creativity and flawless execution.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R-14/125, Rajnagar",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.573713",
      longitude: "77.228277",
    },
    telephone: "+91 9810101023",
    email: "info@1ders.in",
    sameAs: [
      "https://www.facebook.com/1ders/",
      "https://www.instagram.com/1ders.events/reels/",
      "https://www.youtube.com/user/1dersevents",
      "https://www.linkedin.com/company/1ders-events-solutions/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₹₹₹",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Destination Weddings",
            description: "Luxury destination wedding planning and management services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Events",
            description: "Corporate event planning and management services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Launches",
            description: "Product launch event planning and management services.",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "1DERS Events Solutions",
    image: "https://1ders.in/img/og-image.jpg",
    "@id": "https://1ders.in",
    url: "https://1ders.in",
    telephone: "+91 9810101023",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R-14/125, Rajnagar",
      addressLocality: "Ghaziabad",
      postalCode: "201002",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.573713,
      longitude: 77.228277,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₹₹₹",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

