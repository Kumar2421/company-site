"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";
type Tag = "div" | "li" | "p" | "h2" | "h3" | "figure" | "section" | "ol" | "ul";

type RevealProps = {
  children: ReactNode;
  /** Entry direction — mirrors the target: cards slide sideways, copy rises. */
  direction?: Direction;
  /** Stagger offset in ms. Keep to 50ms increments. */
  delay?: number;
  as?: Tag;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
};

/**
 * Reveals children once when scrolled into view. The hidden state lives in CSS
 * (`[data-reveal]` in globals.css) so there is no hydration flash, and it is
 * neutralised under `prefers-reduced-motion` and inside `<noscript>`.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support, or motion is unwanted: show immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.setAttribute("data-revealed", "");
      return;
    }

    // Already in view on load (e.g. deep link, short viewport) — reveal at once.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // one ref type per tag would need generics; the DOM node is the same either way
      ref={ref as never}
      data-reveal={direction}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
