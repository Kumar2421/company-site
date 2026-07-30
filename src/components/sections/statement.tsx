import {
  AskCard,
  ExpensesCard,
  GoalsCard,
  PhoneMockup,
  TransactionsScreen,
} from "@/components/app-ui";
import { Reveal } from "@/components/reveal";

export function Statement() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-column">
        <h2 className="sr-only">Why AI projects stall before production</h2>
        <div className="space-y-8 text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-medium tracking-[-0.03em]">
          <Reveal as="p">
            Most AI work dies between the demo and the release. The model works,
            then security, data and integration take over.
          </Reveal>
          <Reveal as="p" delay={100}>
            We build for that second half — evaluated, monitored and wired into
            the systems your teams already run.
          </Reveal>
        </div>
      </div>

      {/* Phone with three floating cards overlapping it (desktop) / stacked (mobile). */}
      <div className="container-bleed mt-20">
        <div className="relative flex flex-col items-center gap-6 lg:block lg:h-[720px]">
          <Reveal className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
            <PhoneMockup>
              <TransactionsScreen />
            </PhoneMockup>
          </Reveal>

          {/* Cards overlap the phone edges on desktop, matching the target. */}
          <Reveal
            direction="left"
            delay={100}
            className="w-[300px] max-w-full lg:absolute lg:top-28 lg:left-[6%] lg:z-10 lg:w-[360px]"
          >
            <GoalsCard className="w-full" />
          </Reveal>

          <Reveal
            direction="right"
            delay={150}
            className="w-[300px] max-w-full lg:absolute lg:top-52 lg:right-[4%] lg:z-10 lg:w-[380px]"
          >
            <ExpensesCard className="w-full" />
          </Reveal>

          <Reveal
            delay={200}
            className="w-[280px] max-w-full lg:absolute lg:right-[10%] lg:bottom-8 lg:z-10 lg:w-[340px]"
          >
            <AskCard className="w-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
