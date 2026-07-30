import type { ReactNode } from "react";
import { BarChart, Bell, Grid, Sparkle } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Grid className="size-5" />,
    title: "Ship into systems you already run",
    body: "We integrate with your existing stack, data and access controls instead of asking you to replace them.",
  },
  {
    icon: <BarChart className="size-5" />,
    title: "Prove it before it ships",
    body: "Every release is gated on an evaluation suite, so quality is measured rather than asserted.",
  },
  {
    icon: <Bell className="size-5" />,
    title: "Know when it drifts",
    body: "Monitoring for accuracy, latency and cost, with alerts that reach the team that owns the service.",
  },
  {
    icon: <Sparkle className="size-5" />,
    title: "Hand over, not hold hostage",
    body: "Your engineers get the code, the docs and the runbooks. No lock-in to us.",
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
