"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTabKeys } from "@/hooks/use-tab-keys";
import { Reveal } from "@/components/reveal";

const TABS = [
  {
    title: "AI & machine learning",
    body: "RAG, agents, forecasting and document workflows — with evals from day one.",
  },
  {
    title: "Product engineering",
    body: "Web, mobile and internal tooling built by a senior embedded team.",
  },
  {
    title: "Data platform",
    body: "Pipelines, warehousing and governance so the AI has something to stand on.",
  },
];

const LOGOS = [
  { name: "Aero", src: "/images/logo-aero.png" },
  { name: "Helix", src: "/images/logo-helix.png" },
  { name: "Lith", src: "/images/logo-lith.png" },
  { name: "Solvex", src: "/images/logo-solvex.png" },
  { name: "Verdant", src: "/images/logo-verdant.png" },
];

export function Pocket() {
  const [active, setActive] = useState(0);
  const onKeyDown = useTabKeys(TABS.length, setActive);

  return (
    <section className="container-bleed">
      <div className="rounded-t-panel bg-dark px-6 py-20 text-on-dark sm:px-12 sm:py-28">
        <div className="mx-auto max-w-[872px]">
          <Reveal as="h2" className="max-w-[18ch] text-h2 text-balance">
            Three practices, one delivery team.
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <div
              role="tablist"
              aria-label="What we build"
              onKeyDown={onKeyDown}
              className="grid gap-2 sm:grid-cols-3"
            >
            {TABS.map((tab, i) => (
              <button
                key={tab.title}
                role="tab"
                type="button"
                id={`pocket-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`pocket-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-card p-5 text-left transition-colors duration-150",
                  active === i
                    ? "bg-on-dark-08 text-on-dark"
                    : "text-on-dark-56 hover:bg-on-dark-08/60",
                )}
              >
                <span className="block text-body font-medium">{tab.title}</span>
                <span className="mt-1 block text-body">{tab.body}</span>
              </button>
              ))}
            </div>
          </Reveal>

          {/* One Reveal around the whole group — a per-panel one would never
              intersect while hidden, leaving switched-to panels invisible. */}
          <Reveal delay={150} className="mt-6">
            {TABS.map((tab, i) => (
            <div
              key={tab.title}
              role="tabpanel"
              id={`pocket-panel-${i}`}
              aria-labelledby={`pocket-tab-${i}`}
              hidden={active !== i}
              className="rounded-panel bg-on-dark-08 px-6 py-10"
            >
              <p className="text-center text-body text-on-dark-76">
                Delivered alongside in-house teams
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {LOGOS.concat([...LOGOS].reverse()).map((logo, n) => (
                  <li
                    key={`${logo.name}-${n}`}
                    className="grid h-20 place-items-center rounded-card bg-on-dark-08"
                  >
                    <Image
                      src={logo.src}
                      alt={n < LOGOS.length ? `${logo.name} logo` : ""}
                      width={110}
                      height={60}
                      className="h-12 w-auto opacity-80 brightness-0 invert"
                    />
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-center text-body text-on-dark-56">
                Reach out if your bank can&rsquo;t be found
              </p>
            </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
