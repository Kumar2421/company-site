import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AREA_KEYWORDS, AREA_NAMES } from "@/lib/seo";

const SITE_URL = "https://home.mlforge.in";
const DEFAULT_TITLE = "MLForge Studio — Take AI from pilot to production";
const DEFAULT_DESCRIPTION =
  "MLForge Studio designs, builds and runs AI and software inside the systems your business already depends on. AI platform, CRM, social automation and custom software development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — MLForge Studio",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MLForge Studio",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI Platform Development",
    "Custom CRM Software",
    "Social Automation",
    "Software Delivery Studio",
    "Tamil Nadu AI Studio",
    "Udumalpet Software Engineers",
    "Pukkulam Developer",
    "MLForge Studio India",
    "Enterprise AI Systems",
    "React Native developers India",
    "Next.js app agency",
    "Lottery Agency CRM",
    "Udumalpet IT company",
    "AI company in Udumalpet",
    "Pukkulam IT company",
    "Tiruppur district software company",
    ...AREA_KEYWORDS,
  ],
};

export const viewport: Viewport = {
  themeColor: "#1b2bb8",
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MLForge Studio",
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};

/*
 * "image" is still the generic office-singapore.jpg placeholder — swap for a
 * real photo of the Pukkulam address before launch, same as /support
 * Locations. Left in rather than dropped so the field isn't silently missing.
 *
 * @type is ProfessionalService (a LocalBusiness subtype) rather than plain
 * LocalBusiness — more accurate for a software studio, still valid for local
 * search/maps.
 *
 * sameAs is reserved for profiles that ARE this same entity elsewhere
 * (social profiles) — product subdomains (crm./social./lottery./lead.) are
 * separate offerings, not identity duplicates, so they live in `makesOffer`
 * instead rather than diluting the sameAs signal.
 */
const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MLForge Studio",
  "image": "https://home.mlforge.in/images/office-singapore.jpg",
  "@id": "https://home.mlforge.in/#localbusiness",
  "url": "https://home.mlforge.in",
  "telephone": "+918190099614",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4/12, South Street, Pukkulam - Venesapatti Rd",
    "addressLocality": "Udumalaipettai",
    "addressSubregion": "Tiruppur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "642154",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.5847,
    "longitude": 77.2439
  },
  "alternateName": ["MLForge Udumalpet", "MLForge IT Company Udumalpet"],
  "areaServed": [
    ...AREA_NAMES.map((name) => ({ "@type": "City", name })),
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "Country", "name": "India" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.linkedin.com/in/senthil-kumar-6786b6246/",
    "https://www.instagram.com/mlforgestudio?igsh=N2E4cWUwYmllZ2Vz",
    "https://maps.app.goo.gl/iW21V7h6SgrLgoNY8"
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM", "url": "https://crm.mlforge.in" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social media automation", "url": "https://social.mlforge.in" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lottery agency CRM", "url": "https://lottery.mlforge.in" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead generation", "url": "https://lead.mlforge.in" } }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Only the two weights used above the fold. */}
        <link
          rel="preload"
          href="/fonts/GeneralSans-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Without JS the observer never fires, so drop the hidden state entirely. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal]{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
