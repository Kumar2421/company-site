import Link from "next/link";
import { NovaLogo } from "@/components/icons";
import { NovaButtonLink } from "@/components/ui/nova-button";
import { CONTACT_HREF } from "@/lib/nav";

const COLUMNS: {
  heading: string;
  links: { label: string; href: string }[];
}[] = [
  {
    heading: "Sitemap",
    links: [
      { label: "Home", href: "/" },
      { label: "Company", href: "/company" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/category/all" },
      { label: "Support", href: "/support" },
      { label: "Locations", href: "/support#locations" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-08 pt-16 pb-8">
      <div className="container-bleed">
        <Link href="/" aria-label="MLForge home">
          <NovaLogo className="size-9" />
        </Link>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-body font-medium text-ink">
                {column.heading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-body text-ink-56 transition-colors duration-150 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-body font-medium text-ink">Connect</h2>
            <ul className="mt-5">
              <li>
                <a
                  href="#"
                  className="inline-flex min-h-11 items-center text-body text-ink-56 transition-colors duration-150 hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <NovaButtonLink href={CONTACT_HREF} variant="solid" size="sm">
                Talk to us
              </NovaButtonLink>
              <NovaButtonLink href="/support" variant="outline" size="sm">
                Get started
              </NovaButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-08 pt-6 text-small text-ink-56 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 — MLForge</p>
        </div>
      </div>
    </footer>
  );
}
