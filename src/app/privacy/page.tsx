import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Privacy Policy";
const DESCRIPTION = "How MLForge Studio collects, uses and protects your data.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/privacy" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    heading: "Information we collect",
    body: "When you use this site or engage us for work, we may collect the information you give us directly — name, email, company, and project details submitted through a form — along with basic technical data (browser, device, pages visited) collected automatically to keep the site running and secure.",
  },
  {
    heading: "How we use it",
    body: "We use collected information to respond to enquiries, deliver the services you've engaged us for, improve this site, and meet legal or contractual obligations. We do not sell personal data to third parties.",
  },
  {
    heading: "Cookies and analytics",
    body: "This site may use cookies or similar technology for essential functionality and to understand aggregate usage. You can control cookies through your browser settings.",
  },
  {
    heading: "Third-party processors",
    body: "We rely on infrastructure and service providers (hosting, database, email delivery) to operate this site and our products. Each processes data under its own terms and only as needed to provide its service to us.",
  },
  {
    heading: "Data retention",
    body: "We retain personal data only as long as needed for the purpose it was collected, or as required by law or an active contract.",
  },
  {
    heading: "Your rights",
    body: "Depending on your jurisdiction, you may have the right to access, correct, export or delete the personal data we hold about you. Contact us to make a request.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time. Material changes will be reflected by updating the date below.",
  },
];

export default function PrivacyPage() {
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
            Last updated: [date]. This is a template — have it reviewed by
            counsel before publishing, and replace bracketed placeholders with
            your real entity name, contact address and jurisdiction.
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
                Questions about this policy — [contact email].
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
