import type { ReactNode } from "react";
import {
  Sparkle,
  Grid,
  Phone,
  BarChart,
  Workflow,
  Bell,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";

const SERVICES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Sparkle className="size-5" />,
    title: "AI & machine learning",
    body: "Retrieval, agents, forecasting and document understanding — built with evaluation suites, not demos.",
  },
  {
    icon: <Grid className="size-5" />,
    title: "Custom software",
    body: "Web applications, APIs and internal platforms delivered by a senior team inside your review process.",
  },
  {
    icon: <Phone className="size-5" />,
    title: "Mobile applications",
    body: "iOS and Android for field teams and customers, including offline-first workflows.",
  },
  {
    icon: <Workflow className="size-5" />,
    title: "Automation & integration",
    body: "Connecting the systems that already run your business, so manual handoffs stop being the bottleneck.",
  },
  {
    icon: <BarChart className="size-5" />,
    title: "Data & analytics",
    body: "Pipelines, warehousing and reporting that give the business one number it can trust.",
  },
  {
    icon: <Bell className="size-5" />,
    title: "Cloud & reliability",
    body: "Infrastructure, delivery pipelines and monitoring, so what we ship keeps running without us.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-column">
        <Reveal>
          <MonoLabel className="flex items-center gap-2 text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            Services
          </MonoLabel>

          <h2 className="mt-6 max-w-[24ch] text-h2 text-balance">
            Everything from the first spec to the on-call rota.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 3) * 50}
              className="flex min-h-[240px] flex-col rounded-card bg-surface p-8 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-[0.75rem] bg-brand/12 text-brand">
                {service.icon}
              </span>

              {/* Fixed gap rather than mt-auto, so titles align across a row
                  even when body copy runs to different line counts. */}
              <div className="mt-10">
                <h3 className="text-lead font-medium">{service.title}</h3>
                <p className="mt-2 text-body text-ink-60">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
