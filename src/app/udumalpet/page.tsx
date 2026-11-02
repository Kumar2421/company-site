import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/reveal";
import { ButtonArrow } from "@/components/ui/nova-button";
import { AREA_KEYWORDS, SERVICE_AREAS } from "@/lib/seo";

const TITLE = "IT Company in Udumalpet (Udumalaipettai), Tamil Nadu";
const DESCRIPTION =
  "MLForge Studio is a software and IT company in Udumalpet (Udumalaipettai), Pukkulam, Tamil Nadu — AI, custom software, web and app development, CRM and social media automation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "IT company in Udumalpet",
    "Udumalpet IT company",
    "software company in Udumalpet",
    "AI company in Udumalpet",
    "web development Udumalpet",
    "app development Udumalpet",
    "Tiruppur district software company",
    ...AREA_KEYWORDS,
  ],
  alternates: { canonical: "/udumalpet" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/udumalpet" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const SERVICES = [
  {
    title: "AI platform development",
    body: "Train, deploy and run AI models inside the systems your business already uses.",
  },
  {
    title: "Custom software, web and app development",
    body: "Web apps, mobile apps and custom business software built and maintained by one team.",
  },
  {
    title: "CRM and lead management",
    body: "Open-source CRM and lead tracking tailored to your sales pipeline.",
  },
  {
    title: "Social media automation",
    body: "Schedule and publish across every channel from one place.",
  },
  {
    title: "Lottery agency CRM",
    body: "Software built for lottery agents and retailers.",
  },
];

export default function UdumalpetPage() {
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
        <section className="pt-16 pb-16 text-center sm:pt-24 sm:pb-20">
          <div className="container-column">
            <h1 className="text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] font-medium tracking-[-0.04em]">
              IT company in Udumalpet
            </h1>
            <p className="mx-auto mt-5 max-w-[52ch] text-lead text-ink-60">
              MLForge Studio is a software and AI company based in Pukkulam,
              Udumalpet (Udumalaipettai), Tamil Nadu. We design, build and run
              software for businesses locally and across India.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-column">
            <h2 className="text-h2 text-center">
              Software and IT services in Udumalpet
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {SERVICES.map((service, i) => (
                <Reveal
                  as="li"
                  key={service.title}
                  delay={i * 50}
                  className="rounded-card bg-white p-8 shadow-card"
                >
                  <h3 className="text-lead font-medium">{service.title}</h3>
                  <p className="mt-3 text-body text-ink-60">{service.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-column">
            <h2 className="text-h2 text-center">
              IT company serving Udumalpet, Palani, Pollachi, Tiruppur and
              Coimbatore
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-center text-body text-ink-60">
              Our office is in Pukkulam, Udumalpet. We build software for
              businesses in the towns around it and work with clients remotely
              across Tamil Nadu and India.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area.name}
                  className="rounded-full bg-white px-5 py-2.5 text-body text-ink-60 shadow-card"
                >
                  IT company in {area.name}
                  {area.variants.length > 0 && (
                    <span className="text-ink-56">
                      {" "}
                      ({area.variants.join(", ")})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="container-column">
            <div className="rounded-card bg-white p-8 shadow-card">
              <h2 className="text-lead font-medium">
                Visit our Udumalpet office
              </h2>
              <p className="mt-3 text-body text-ink-60">
                Looking for an IT company near Udumalpet, Palani, Pollachi,
                Tiruppur or Coimbatore? Our office is in Pukkulam, on the
                Pukkulam - Venesapatti Road.
              </p>
              <address className="mt-6 text-body text-ink-60 not-italic">
                <span className="block">MLForge Studio</span>
                <span className="block">
                  4/12, South Street, Pukkulam - Venesapatti Rd
                </span>
                <span className="block">
                  Udumalaipettai, Tamil Nadu 642154
                </span>
                <a
                  href="tel:+918190099614"
                  className="inline-flex min-h-11 items-center text-ink underline-offset-4 hover:underline"
                >
                  +91 81900 99614
                </a>
              </address>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                <a
                  href="https://maps.app.goo.gl/iW21V7h6SgrLgoNY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 text-body font-medium"
                >
                  Get directions
                  <ButtonArrow />
                </a>
                <a
                  href="/support#contact"
                  className="group inline-flex min-h-11 items-center gap-2 text-body font-medium"
                >
                  Talk to us
                  <ButtonArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
