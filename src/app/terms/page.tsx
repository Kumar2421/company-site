import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Terms and Conditions";
const DESCRIPTION = "The terms that govern use of this site and our services.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/terms" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    heading: "Acceptance of terms",
    body: "By using this site or engaging MLForge Studio for services, you agree to these terms. If you don't agree, please don't use the site or our services.",
  },
  {
    heading: "Services",
    body: "MLForge Studio provides software and AI development services, including but not limited to an AI platform, CRM, social media automation, and custom software development. The specific scope, deliverables and fees for any engagement are set out in a separate signed agreement, which takes precedence over this general page.",
  },
  {
    heading: "Acceptable use",
    body: "You agree not to use this site to violate any law, infringe on others' rights, or interfere with the site's normal operation.",
  },
  {
    heading: "Intellectual property",
    body: "Unless otherwise agreed in a signed contract, MLForge Studio retains ownership of its own pre-existing tools, frameworks and know-how. Work product specific to a client engagement is owned as set out in that engagement's contract.",
  },
  {
    heading: "Limitation of liability",
    body: "This site and its content are provided \"as is,\" without warranty of any kind. To the extent permitted by law, MLForge Studio is not liable for indirect or consequential damages arising from use of this site.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of India, without regard to conflict-of-law principles.",
  },
  {
    heading: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the site after changes take effect constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
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
        <section className="container-column py-20 sm:py-28">
          <h1 className="text-h2">{TITLE}</h1>
          <p className="mt-3 text-body text-ink-56">
            Last updated: 4 November 2026.
          </p>

          <div className="mt-12 flex max-w-[68ch] flex-col gap-8">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lead font-medium">{section.heading}</h2>
                <p className="mt-2 text-body text-ink-60">{section.body}</p>
              </div>
            ))}

            <div>
              <h2 className="text-lead font-medium">Contact</h2>
              <p className="mt-2 text-body text-ink-60">
                Questions about these terms — call +91 81900 99614 or write to MLForge Studio, 4/12, South Street, Pukkulam - Venesapatti Rd, Udumalaipettai, Tamil Nadu 642154, India.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
