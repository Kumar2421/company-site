import type { ReactNode } from "react";
import {
  CrmTableScreen,
  LeadGenScreen,
  PanelMockup,
  SocialAutomationScreen,
} from "@/components/dashboard-ui";
import { Reveal } from "@/components/reveal";
import { ButtonArrow } from "@/components/ui/nova-button";

const STEPS: {
  kicker: string;
  title: string;
  body: string;
  panelTitle: string;
  href: string;
  screen: ReactNode;
}[] = [
  {
    kicker: "CRM",
    title: "Every deal, owner and account in one pipeline",
    body: "A companies-and-deals CRM built on the open-source Twenty core, tailored to your pipeline stages and ownership rules — no seat-priced black box.",
    panelTitle: "crm.mlforge.in",
    href: "https://crm.mlforge.in",
    screen: <CrmTableScreen />,
  },
  {
    kicker: "Lead generation",
    title: "Find who needs you before your competitors do",
    body: "Prospecting and enrichment surfaced against your ICP filters — search, tag and route leads straight into the pipeline, ranked by intent.",
    panelTitle: "lead.mlforge.in",
    href: "https://lead.mlforge.in",
    screen: <LeadGenScreen />,
  },
  {
    kicker: "Social automation",
    title: "Plan a week of posts once, publish everywhere",
    body: "One queue schedules and publishes across every channel, with sync status tracked per account — built on the open-source Postiz core.",
    panelTitle: "social.mlforge.in",
    href: "https://social.mlforge.in",
    screen: <SocialAutomationScreen />,
  },
];

export function Steps() {
  return (
    <section className="container-bleed py-20 sm:py-28">
      <h2 className="sr-only">How an engagement runs</h2>

      <ol className="flex flex-col gap-20 lg:gap-40">
        {STEPS.map((item) => (
          <li
            key={item.kicker}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <Reveal>
              <p className="text-lead text-brand">{item.kicker}</p>
              <h3 className="mt-2 text-h3">{item.title}</h3>
              <p className="mt-4 max-w-[46ch] text-body text-ink-60">
                {item.body}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex min-h-11 items-center gap-2 text-body font-medium"
              >
                Open {item.panelTitle}
                <ButtonArrow />
              </a>
            </Reveal>

            <Reveal
              direction="right"
              delay={100}
              className="nova-dotfield grid place-items-center overflow-hidden rounded-panel bg-[#ececec] p-6 sm:p-10"
            >
              <PanelMockup title={item.panelTitle}>{item.screen}</PanelMockup>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
