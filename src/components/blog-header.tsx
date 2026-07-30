"use client";

import Link from "next/link";
import { NovaLogo, Search } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { ButtonArrow } from "@/components/ui/nova-button";
import { MonoLabel } from "@/components/ui/mono-label";
import { CATEGORIES } from "@/lib/posts";
import { cn } from "@/lib/utils";

type BlogHeaderProps = {
  /** Currently selected category, matched against CATEGORIES. */
  active: string;
  onSelect: (category: string) => void;
};

/**
 * On desktop the blog index swaps the marketing nav for a news ticker plus
 * category filters. Below `md` the target falls back to the standard header and
 * drops the filters into a scrolling strip underneath, so this does the same.
 */
export function BlogHeader({ active, onSelect }: BlogHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md">
      <div className="relative border-b border-ink-08">
        <div className="container-column flex h-[66px] items-center justify-between gap-6">
          {/* Ticker replaces the wordmark from md up; below that the brand returns. */}
          <Link
            href="/"
            className="group hidden items-center gap-2 whitespace-nowrap md:inline-flex"
          >
            <MonoLabel className="text-ink">
              Now booking Q3 discovery engagements
            </MonoLabel>
            <ButtonArrow className="text-ink" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-h4 font-medium tracking-[-0.03em] md:hidden"
          >
            <NovaLogo className="size-7" />
            <span>MLForge</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <CategoryNav active={active} onSelect={onSelect} />
            <SearchButton />
          </div>

          <MobileNav panelId="blog-mobile-nav" />
        </div>
      </div>

      <div className="border-b border-ink-08 md:hidden">
        <div className="container-column flex items-center gap-5 overflow-x-auto py-2">
          <SearchButton />
          <CategoryNav active={active} onSelect={onSelect} />
        </div>
      </div>
    </header>
  );
}

function CategoryNav({ active, onSelect }: BlogHeaderProps) {
  return (
    <nav aria-label="Post categories">
      <ul className="flex items-center gap-6">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <button
              type="button"
              aria-pressed={active === category}
              onClick={() => onSelect(category)}
              className={cn(
                "inline-flex min-h-11 items-center whitespace-nowrap text-body transition-colors duration-150 hover:text-ink",
                active === category ? "text-ink" : "text-ink-56",
              )}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SearchButton() {
  return (
    <a
      href="#search"
      aria-label="Search posts"
      className="grid size-9 shrink-0 place-items-center rounded-full bg-ink-08 transition-colors duration-150 hover:bg-ink/15"
    >
      <Search className="size-4" />
    </a>
  );
}
