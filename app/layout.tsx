import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cheesecakecollection.net"),
  title: "The Cheesecake Collection | Gourmet Event Cheesecakes Atlanta & DMV",
  description:
    "Handcrafted bejeweled cheesecake cup-cakes for baby showers, graduations, and birthdays. Serving Atlanta, GA and the DMV area. Discover our artisanal gourmet collection.",
  keywords: ["cheesecake cupcakes", "atlanta bakery", "DMV dessert catering", "baby shower desserts", "graduation cakes", "birthday cheesecakes", "gourmet desserts atlanta"],
  openGraph: {
    title: "The Cheesecake Collection | Premium Event Cheesecakes",
    description: "Exquisite handcrafted cheesecake creations for your most special occasions in Atlanta and the DMV.",
    images: ["/hero-background.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "The Cheesecake Collection",
    "image": "https://www.cheesecakecollection.net/hero-background.jpg",
    "description": "Handcrafted bejeweled cheesecake cup-cakes for special events in Atlanta and the DMV.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7490,
      "longitude": -84.3880
    },
    "url": "https://www.cheesecakecollection.net",
    "telephone": "+1-555-0123",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "servesCuisine": "Dessert, Cheesecake",
    "areaServed": ["Atlanta, GA", "DMV Area (DC, Maryland, Virginia)"]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${sourceSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
