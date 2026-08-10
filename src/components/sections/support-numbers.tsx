import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";

/**
 * PLACEHOLDER VALUES — replace with numbers you can defend in a sales call.
 * Good candidates: time to first call, discovery-to-plan turnaround, client
 * retention, average pod tenure. An unverifiable stat on this page is worse than
 * no stat, because it is exactly what procurement will ask you to evidence.
 */
const STATS = [
  { label: "Time to first call", value: "< 2 hours" },
  { label: "Discovery to signed plan", value: "5 days" },
  { label: "Client retention", value: "98%" },
];

export function SupportNumbers() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-column">
        <Reveal>
          <MonoLabel className="flex items-center gap-2 text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            In numbers
          </MonoLabel>

          <h2 className="mt-6 max-w-[26ch] text-h3 text-balance">
            We answer fast, because scoping is the work.
          </h2>
        </Reveal>

        <Reveal delay={50} className="mt-12 border-t border-ink-08 pt-12">
          <dl className="grid gap-10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-body text-ink-60">{stat.label}</dt>
                <dd className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-none font-medium tracking-[-0.03em]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
