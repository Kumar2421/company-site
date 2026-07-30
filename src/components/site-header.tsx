"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NovaLogo } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { ButtonArrow } from "@/components/ui/nova-button";
import { CONTACT_HREF, NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-08 bg-bg/85 backdrop-blur-md">
      <div className="container-column flex h-[66px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-h4 font-medium tracking-[-0.03em]"
        >
          <NovaLogo className="size-7" />
          <span>MLForge</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center text-body transition-colors duration-150 hover:text-ink",
                    item.href === pathname ? "text-ink" : "text-ink-56",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={CONTACT_HREF}
          className="group hidden min-h-11 items-center gap-2 text-body font-medium md:inline-flex"
        >
          Book a discovery call
          <ButtonArrow />
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
