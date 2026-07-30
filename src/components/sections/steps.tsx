import type { ReactNode } from "react";
import {
  AdviceScreen,
  ConnectScreen,
  PhoneMockup,
  TransactionsScreen,
} from "@/components/app-ui";
import { Reveal } from "@/components/reveal";

const STEPS: { step: string; title: string; body: string; screen: ReactNode }[] =
  [
    {
      step: "Step 1",
      title: "Scope",
      body: "A two-week paid discovery: we map your data, systems and constraints, then hand you an architecture and a fixed build plan.",
      screen: <ConnectScreen />,
    },
    {
      step: "Step 2",
      title: "Build",
      body: "A senior embedded pod ships weekly into your repos and your review process, with evaluation suites written alongside the code.",
      screen: <TransactionsScreen />,
    },
    {
      step: "Step 3",
      title: "Operate",
      body: "Monitoring, drift alerts and cost tracking go live with the release — then we hand over the runbooks to your team.",
      screen: <AdviceScreen />,
    },
  ];

export function Steps() {
  return (
    <section className="container-bleed py-20 sm:py-28">
      <h2 className="sr-only">How an engagement runs</h2>

      <ol className="flex flex-col gap-20 lg:gap-40">
        {STEPS.map((item) => (
          <li
            key={item.step}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <Reveal>
              <p className="text-lead text-brand">{item.step}</p>
              <h3 className="mt-2 text-h3">{item.title}</h3>
              <p className="mt-4 max-w-[46ch] text-body text-ink-60">
                {item.body}
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={100}
              className="nova-dotfield grid place-items-center overflow-hidden rounded-panel bg-[#ececec] px-6 pt-14"
            >
              <PhoneMockup className="-mb-16 w-[300px]">
                {item.screen}
              </PhoneMockup>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
