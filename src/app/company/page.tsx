import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CompanyHero } from "@/components/sections/company-hero";
import { CompanyHistory } from "@/components/sections/company-history";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Company — MLForge Studio",
  description:
    "MLForge Studio builds software and AI systems for teams with a production estate to protect.",
};

export default function CompanyPage() {
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
        <CompanyHero />
        <CompanyHistory />
        <CompanyShowcase />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
