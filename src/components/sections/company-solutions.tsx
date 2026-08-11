import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";

const SOLUTIONS = [
  {
    title: "Web applications & internal platforms",
    body: "Most internal tools fail for the same reason: they're built once, then left to rot as the process around them changes. We build web applications and admin platforms with the same rigor as customer-facing products — typed end to end, covered by tests, and handed over with documentation your team can actually maintain. That includes dashboards, approval workflows, reporting tools and the operational software that keeps a growing business running without a spreadsheet holding it together.",
  },
  {
    title: "Mobile & field applications",
    body: "Field teams need software that works without a strong signal and doesn't lose data when the connection drops. We build iOS and Android applications with offline-first data handling as a default, not an afterthought — sync conflicts resolved deliberately, not silently. Whether it's a delivery crew, an inspection team or a sales rep working a territory, the app is built around how the work actually happens on-site.",
  },
  {
    title: "Systems integration & automation",
    body: "Most \"custom software\" requests are really integration requests in disguise — two systems that don't talk to each other, or a manual step someone repeats every day. We connect the tools you already run (CRM, billing, support, internal databases) so information moves on its own, and we automate the repetitive steps in between. The goal is fewer handoffs, not a bigger stack.",
  },
];

export function CompanySolutions() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-column">
        <Reveal>
          <MonoLabel className="flex items-center gap-2 text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            Software solutions
          </MonoLabel>

          <h2 className="mt-6 max-w-[32ch] text-h2 text-balance">
            Custom software built to run in production, not just demo well
          </h2>

          <p className="mt-6 max-w-[64ch] text-body text-ink-60">
            Software solutions is the broadest of MLForge Studio&apos;s four
            services — everything that isn&apos;t the AI platform, the CRM or
            social automation, but still needs to be built, shipped and kept
            running. It covers three kinds of work in practice.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 50}>
              <h3 className="text-lead font-medium">{solution.title}</h3>
              <p className="mt-3 text-body text-ink-60">{solution.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
