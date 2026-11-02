import { NovaButtonLink, ButtonArrow } from "@/components/ui/nova-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section id="download" className="py-24 sm:py-32">
      <div className="container-column">
        <Reveal
          as="h2"
          className="max-w-[20ch] text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance"
        >
          Bring us the AI work your roadmap keeps deferring.
        </Reveal>

        <Reveal delay={50} className="mt-5">
          <p className="max-w-[40ch] text-lead text-ink-60">
            Based in Udumalpet, Tamil Nadu — talk to us.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <NovaButtonLink href="/support#contact" size="md">
            Book a discovery call
            <ButtonArrow />
          </NovaButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
