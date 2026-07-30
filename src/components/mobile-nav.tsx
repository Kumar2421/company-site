"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Close } from "@/components/icons";
import { NovaButtonLink } from "@/components/ui/nova-button";
import { CONTACT_HREF, NAV } from "@/lib/nav";

/**
 * The mobile CTA + hamburger pair and its drop-down panel. Shared by the
 * marketing header and the blog header so both stay in step.
 */
export function MobileNav({ panelId = "mobile-nav" }: { panelId?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center gap-3 md:hidden">
        <NovaButtonLink href={CONTACT_HREF} variant="soft" size="md">
          Book a call
        </NovaButtonLink>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <nav
          id={panelId}
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-y border-ink-08 bg-bg md:hidden"
        >
          <ul className="container-bleed flex flex-col py-3">
            {[...NAV, { label: "Book a discovery call", href: CONTACT_HREF }].map(
              (item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={item.href === pathname ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lead"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </>
  );
}
