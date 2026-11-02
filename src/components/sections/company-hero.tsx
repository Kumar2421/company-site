import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { NovaButtonLink, ButtonArrow } from "@/components/ui/nova-button";

const VALUES = [
  {
    title: "Clarity",
    body: "Plain estimates, named owners, and a written plan before any code ships.",
  },
  {
    title: "Evidence",
    body: "We measure quality with evaluation suites instead of asking you to trust a demo.",
  },
  {
    title: "Handover",
    body: "Your team ends up owning the system, with the docs and runbooks to run it.",
  },
];

export function CompanyHero() {
  return (
    <section className="relative pt-[106px] pb-20 sm:pb-28">
      {/* Torus overflows the content column and is pinned to the viewport edge. */}
      <Image
        src="/images/blob-torus.png"
        alt=""
        width={440}
        height={440}
        priority
        className="pointer-events-none absolute top-[34px] right-[4vw] -z-10 w-[200px] sm:w-[280px] lg:right-[57px] lg:w-[384px]"
      />

      <div className="container-column">
        <h1 className="max-w-[648px] text-[clamp(2.25rem,6vw,4.25rem)] leading-none font-medium tracking-[-0.04em]">
          A delivery team, not a demo shop
        </h1>

        <Reveal
          as="ul"
          delay={100}
          className="mt-20 grid rounded-[12px] border border-ink-08 sm:grid-cols-3"
        >
          {VALUES.map((value) => (
            <li
              key={value.title}
              className="flex min-h-[176px] flex-col border-b border-ink-08 p-6 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
            >
              <h2 className="text-lead font-medium">{value.title}</h2>
              <p className="mt-auto pt-8 text-body text-ink-60">{value.body}</p>
            </li>
          ))}
        </Reveal>

        <div className="mt-20 grid items-start gap-8 md:grid-cols-2">
          <Reveal as="p" className="max-w-[424px] text-body text-ink-60">
            MLForge Studio builds software and AI systems for teams that already
            have a production estate to protect. We work inside your stack, your
            review process and your security constraints. We&apos;re based in
            Pukkulam, Udumalpet, and work with teams across Tamil Nadu and
            remotely across India.
          </Reveal>

          <Reveal delay={100} className="md:justify-self-end">
            <NovaButtonLink href="/support#contact" size="md">
              Book a discovery call
              <ButtonArrow />
            </NovaButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
