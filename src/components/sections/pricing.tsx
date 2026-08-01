"use client";

import { useState } from "react";
import { Check, Close } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NovaButtonLink } from "@/components/ui/nova-button";
import { Reveal } from "@/components/reveal";

const FEATURES = [
  "Architecture & delivery plan",
  "Build & integration",
  "Evaluation suite",
  "Monitoring & handover",
];

/** Discovery ends at a plan, so the build-side rows are scoped down or absent. */
const BASIC = [true, false, "Eval plan only", false] as const;

export function Pricing() {
  /** Retainer cadence for the pod — quarterly commitments get planning runway. */
  const [quarterly, setQuarterly] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container-column text-center">
        <Reveal as="h2" className="text-h2">
          How we engage
        </Reveal>
        <Reveal as="p" delay={50} className="mt-4 text-lead text-ink-60">
          Start with a scoped discovery. Move to a pod when the plan is signed off.
        </Reveal>

        <div className="mt-14 grid gap-4 text-left md:grid-cols-2">
          {/* Basic */}
          <Reveal
            delay={100}
            className="flex flex-col rounded-card bg-surface p-8 shadow-card"
          >
            <h3 className="text-h3">Discovery sprint</h3>
            <p className="mt-2 text-h4 text-brand">Two weeks, fixed fee</p>

            <ul className="mt-8 flex-1">
              {FEATURES.map((feature, i) => {
                const value = BASIC[i];
                const included = value !== false;
                return (
                  <li
                    key={feature}
                    className="flex items-center gap-3 border-b border-ink-08 py-4 last:border-0"
                  >
                    <Marker included={included} />
                    <span
                      className={cn(
                        "text-lead",
                        included ? "text-ink" : "text-ink-56",
                      )}
                    >
                      {typeof value === "string" ? value : feature}
                    </span>
                  </li>
                );
              })}
            </ul>

            <NovaButtonLink href="/support#contact" variant="outline" className="mt-8 w-full">
              Scope a discovery
            </NovaButtonLink>
          </Reveal>

          {/* Pro */}
          <Reveal
            delay={150}
            className="flex flex-col rounded-card bg-surface p-8 shadow-card"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-h3">Embedded pod</h3>

              <label className="flex cursor-pointer items-center gap-2">
                <span className="font-mono text-mono-xs tracking-[0.06em] text-brand uppercase">
                  {quarterly ? "Quarterly" : "Monthly"}
                </span>
                <input
                  type="checkbox"
                  role="switch"
                  checked={quarterly}
                  onChange={(e) => setQuarterly(e.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="relative h-6 w-11 rounded-pill bg-ink-08 transition-colors duration-150 peer-checked:bg-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-brand"
                >
                  <span
                    className={cn(
                      "absolute top-1 left-1 size-4 rounded-full bg-white transition-transform duration-150",
                      quarterly && "translate-x-5",
                    )}
                  />
                </span>
                <span className="sr-only">Commit quarterly</span>
              </label>
            </div>

            <p className="mt-2 text-h4 text-brand">
              {quarterly ? "Quarterly retainer" : "Monthly retainer"}
            </p>

            <ul className="mt-8 flex-1">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border-b border-ink-08 py-4 last:border-0"
                >
                  <Marker included />
                  <span className="text-lead">{feature}</span>
                </li>
              ))}
            </ul>

            <NovaButtonLink href="/support#contact" className="mt-8 w-full">
              Talk about a pod
            </NovaButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marker({ included }: { included: boolean }) {
  return (
    <span
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-full",
        included ? "bg-brand-soft text-brand" : "bg-ink-08 text-ink-56",
      )}
    >
      {included ? <Check className="size-4" /> : <Close className="size-4" />}
      <span className="sr-only">{included ? "Included" : "Not included"}</span>
    </span>
  );
}
