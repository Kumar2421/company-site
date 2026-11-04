import type { ReactNode } from "react";
import { BarChart, Bell, Grid, Sparkle } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Grid className="size-5" />,
    title: "Fits the tools you already use",
    body: "We connect to your existing software and data instead of asking you to replace them.",
  },
  {
    icon: <BarChart className="size-5" />,
    title: "Tested before every release",
    body: "Each release is checked against a written test plan, so you see what works before your users do.",
  },
  {
    icon: <Bell className="size-5" />,
    title: "Support after launch",
    body: "We watch performance and errors after go-live, and fix issues fast instead of disappearing.",
  },
  {
    icon: <Sparkle className="size-5" />,
    title: "You own the code",
    body: "You get the source code, the documentation and a handover session. No lock-in to us.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-column">
        <Reveal as="h2" className="text-center text-h2">
          How we work…
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Reveal
              as="li"
              key={feature.title}
              delay={i * 50}
              className="flex min-h-[280px] flex-col rounded-card bg-surface p-8 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-chip bg-brand-soft text-brand">
                {feature.icon}
              </span>
              <div className="mt-auto pt-12">
                <h3 className="text-lead font-medium">{feature.title}</h3>
                <p className="mt-2 text-body text-ink-60">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
