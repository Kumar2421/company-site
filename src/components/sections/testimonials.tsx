"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTabKeys } from "@/hooks/use-tab-keys";
import { Reveal } from "@/components/reveal";

/**
 * PLACEHOLDERS — do not publish.
 *
 * These are prompts for real, cleared client quotes, not invented endorsements.
 * Replace `name`, `role` and `quote` with the approved wording before launch, and
 * swap `avatar` for that person's own photo or remove the image. Attributing a
 * fabricated quote to a named person is a legal and trust problem, so the copy
 * below is deliberately obvious rather than plausible.
 *
 * The muted line carries the role rather than a date — with an enterprise buyer,
 * "Head of Data" is the credibility, not when the quote was given.
 */
const TESTIMONIALS = [
  {
    name: "[Client 1 name]",
    role: "[Role, company]",
    avatar: "/images/avatar-mary.jpg",
    quote:
      "PLACEHOLDER — the strongest quote you have about getting to production. Two or three sentences, ideally naming the outcome and the timeline.",
  },
  {
    name: "[Client 2 name]",
    role: "[Role, company]",
    avatar: "/images/avatar-mary.jpg",
    quote:
      "PLACEHOLDER — a quote about working alongside an in-house team. Best if it mentions code review, handover or how their engineers picked it up.",
  },
  {
    name: "[Client 3 name]",
    role: "[Role, company]",
    avatar: "/images/avatar-mary.jpg",
    quote:
      "PLACEHOLDER — a quote about reliability or evaluation. Anything referencing a measured result carries more weight than praise.",
  },
  {
    name: "[Client 4 name]",
    role: "[Role, company]",
    avatar: "/images/avatar-mary.jpg",
    quote:
      "PLACEHOLDER — a quote from a security, data or platform stakeholder. This is the objection most enterprise buyers raise first.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const onKeyDown = useTabKeys(TESTIMONIALS.length, setActive);
  const current = TESTIMONIALS[active];

  return (
    <section className="py-20 sm:py-28">
      <div className="container-column">
        <h2 className="sr-only">What clients say</h2>

        <Reveal as="figure" aria-live="polite">
          <blockquote className="text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-4">
            <Image
              src={current.avatar}
              alt=""
              width={56}
              height={56}
              className="size-14 rounded-full object-cover"
            />
            <span>
              <span className="block text-lead font-medium">{current.name}</span>
              <span className="block text-lead text-ink-56">{current.role}</span>
            </span>
          </figcaption>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div
            role="tablist"
            aria-label="Choose a testimonial"
            onKeyDown={onKeyDown}
            className="grid overflow-hidden rounded-card border border-ink-08 sm:grid-cols-4"
          >
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-label={`Read the review from ${item.name}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-8 text-center transition-colors duration-150",
                "border-b border-ink-08 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0",
                active === i ? "bg-surface-2" : "hover:bg-ink-08/50",
              )}
            >
              <span className="block text-lead font-medium">{item.name}</span>
              <span className="block text-lead text-ink-56">{item.role}</span>
            </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
