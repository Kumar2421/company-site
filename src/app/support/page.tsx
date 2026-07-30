import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SupportHero } from "@/components/sections/support-hero";
import { SupportNumbers } from "@/components/sections/support-numbers";
import { SupportLocations } from "@/components/sections/support-locations";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Support — MLForge Studio",
  description: "Talk to the people who would do the work.",
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
        <SupportNumbers />
        <SupportLocations />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
