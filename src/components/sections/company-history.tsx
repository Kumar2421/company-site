import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";
import { NovaButtonLink, ButtonArrow } from "@/components/ui/nova-button";

export function CompanyHistory() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-column">
        <Reveal>
          <MonoLabel className="flex items-center gap-2 text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            Our history
          </MonoLabel>

          <h2 className="mt-6 max-w-[20ch] text-h2 text-balance">
            Built by people who shipped the hard part
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 text-body text-ink-60 md:grid-cols-2 md:gap-16">
          {/*
            PLACEHOLDER — replace with the real founding story. Keep three
            paragraphs so the two-column balance holds: what you noticed, what you
            built first, what changed. Specifics beat adjectives here; a date, a
            first client problem and a turning point do more than any claim about
            passion or excellence.
          */}
          <Reveal delay={50} className="space-y-6">
            <p>
              MLForge Studio began with a simple observation:
              traditional agency handoffs leave production value on the table. We
              founded the studio to bridge high-performance system engineering with
              rapid product shipping.
            </p>
            <p>
               our early client collaborations proved that embedding
              focused delivery pods directly with internal stakeholders eliminates
              scoping drift and speeds up time-to-market.
            </p>
          </Reveal>

          <Reveal delay={100} className="space-y-8">
            <p>
              this evolved into our core delivery principles today:
              rigidly scoped milestones, continuous validation pipelines, and
              production-grade delivery from week one.
            </p>

            <NovaButtonLink href="/support#contact" variant="soft" size="md">
              Work with us
              <ButtonArrow />
            </NovaButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
