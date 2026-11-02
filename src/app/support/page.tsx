import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SupportHero } from "@/components/sections/support-hero";
import { SupportLocations } from "@/components/sections/support-locations";
import { ContactForm } from "@/components/sections/contact-form";
import { FinalCta } from "@/components/sections/final-cta";

const TITLE = "Contact MLForge Studio — IT Company in Udumalpet";
const DESCRIPTION =
  "Talk to the people who would do the work — MLForge Studio, Udumalpet, Tamil Nadu.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/support" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/support" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function SupportPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-card focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <SupportHero />
        <SupportLocations />

        <section className="container-column py-20 sm:py-28">
          <h2 className="text-h2 text-center">Send a message</h2>
          <p className="mx-auto mt-3 max-w-[46ch] text-center text-body text-ink-60">
            Tell us about your project — we reply within one business day.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </section>

        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
