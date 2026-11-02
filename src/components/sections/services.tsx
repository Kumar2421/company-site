import type { ReactNode } from "react";
import {
  Sparkle,
  Grid,
  Phone,
  BarChart,
  Workflow,
  Bell,
  TrendUp,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";

const SERVICES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Sparkle className="size-5" />,
    title: "AI platform",
    body: "Train, evaluate and deploy your own models from one console — retrieval, agents and forecasting shipped with evaluation suites, not demos.",
  },
  {
    icon: <Workflow className="size-5" />,
    title: "CRM",
    body: "A companies-and-deals CRM built on the open-source Twenty core, tailored to your pipeline stages and ownership rules.",
  },
  {
    icon: <Bell className="size-5" />,
    title: "Social media automation",
    body: "Plan, schedule and publish across every channel from one queue, with sync status tracked per account.",
  },
  {
    icon: <Grid className="size-5" />,
    title: "Custom software development",
    body: "Web applications, APIs and internal platforms delivered by a senior team inside your own review process.",
  },
  {
    icon: <Phone className="size-5" />,
    title: "App & website development",
    body: "iOS, Android and marketing sites built to ship — not just prototype — for field teams and customers alike.",
  },
  {
    icon: <BarChart className="size-5" />,
    title: "AI automation & integration",
    body: "Connecting the systems that already run your business, so manual handoffs stop being the bottleneck.",
  },
  {
    icon: <TrendUp className="size-5" />,
    title: "Lottery agency CRM",
    body: "A dedicated CRM for lottery agencies — ticket sales, agent commissions and payouts tracked in one system.",
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

          <h2 className="mt-6 max-w-[28ch] text-h2 text-balance">
            An AI platform, a CRM, social automation and the custom builds to
            connect them.
          </h2>

          <p className="mt-5 max-w-[52ch] text-lead text-ink-60">
            Built from our office in Pukkulam, Udumalpet, for teams in Tiruppur,
            Coimbatore, Palani, Pollachi and across India.
          </p>
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
