"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, NovaLogo } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { ButtonArrow } from "@/components/ui/nova-button";
import { CONTACT_HREF, NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
            {NAV.map((item) => {
              const hasChildren = "children" in item && item.children.length > 0;

              if (!hasChildren) {
                return (
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
                );
              }

              const isOpen = openMenu === item.label;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className="inline-flex min-h-11 items-center gap-1 text-body text-ink-56 transition-colors duration-150 hover:text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-150",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {isOpen && (
                    <ul className="absolute top-full left-1/2 w-[280px] -translate-x-1/2 rounded-panel border border-ink-08 bg-bg p-2 shadow-float">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-card px-3 py-2.5 transition-colors duration-150 hover:bg-surface"
                          >
                            <span className="block text-body font-medium">
                              {child.label}
                            </span>
                            <span className="block text-small text-ink-56">
                              {child.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
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
