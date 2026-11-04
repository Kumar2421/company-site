import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Features } from "@/components/sections/features";
import { Pocket } from "@/components/sections/pocket";
import { Steps } from "@/components/sections/steps";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Blog } from "@/components/sections/blog";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: {
    absolute:
      "MLForge Studio — IT & Software Company in Udumalpet, Tamil Nadu | AI, Web & App Development",
  },
  description:
    "MLForge Studio is a developer-led IT and software company in Udumalpet (Udumalaipettai), Pukkulam, Tamil Nadu. Custom software, web and mobile apps, CRM, AI and automation for businesses across India.",
  alternates: { canonical: "/" },
};

export default function Home() {
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
        <Hero />
        <Statement />
        <Features />
        <Pocket />
        <Steps />
        <Services />
        <Testimonials />
        <Pricing />
        <Blog />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
