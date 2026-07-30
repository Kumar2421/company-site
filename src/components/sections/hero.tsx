import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { MonoLabel } from "@/components/ui/mono-label";
import { NovaButtonLink, ButtonArrow } from "@/components/ui/nova-button";
import { HeroDashboard } from "@/components/hero-dashboard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-0 sm:pt-32">
      <div className="container-column text-center">
        <a
          href="#news"
          className="group inline-block max-w-full"
        >
          <MonoLabel className="transition-colors duration-150 group-hover:text-ink">
            Now booking Q3 discovery engagements{" "}
            {/* inline so the arrow stays glued to the last word when the label wraps */}
            <ArrowRight className="inline size-4 align-[-0.15em] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </MonoLabel>
        </a>

        <h1 className="mt-6 text-[clamp(2.75rem,8vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.04em] text-balance">
          Take AI from pilot to production
        </h1>

        <p className="mx-auto mt-6 max-w-[34ch] text-lead text-ink-60 text-balance">
          MLForge Studio designs, builds and runs AI and software inside the
          systems your business already depends on.
        </p>

        <NovaButtonLink href="#contact" className="mt-8">
          Book a discovery call
          <ButtonArrow />
        </NovaButtonLink>
      </div>

      {/* Console flanked by the two 3D blobs, which now peek from behind its
          upper corners rather than framing a narrow phone. */}
      <div className="relative mt-16">
        <Image
          src="/images/blob-cross.png"
          alt=""
          width={356}
          height={356}
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[2%] hidden w-[180px] select-none sm:block lg:w-[260px]"
        />
        <Image
          src="/images/blob-wave.png"
          alt=""
          width={322}
          height={322}
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 right-[2%] hidden w-[170px] select-none sm:block lg:w-[240px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[4vw] lg:px-[60px]">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
