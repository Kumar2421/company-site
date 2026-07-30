import Link from "next/link";

const LINKS = [
  { label: "Company", href: "/company" },
  { label: "Support", href: "/support" },
  { label: "Resources", href: "/category/all" },
  { label: "Privacy policy", href: "#privacy" },
  { label: "Terms of use", href: "#terms" },
];

const SOCIALS = [
  { label: "Instagram", href: "#instagram" },
  { label: "TikTok", href: "#tiktok" },
  { label: "LinkedIn", href: "#linkedin" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-08 py-8">
      <div className="container-bleed flex flex-col gap-6 text-small text-ink-56 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SOCIALS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
