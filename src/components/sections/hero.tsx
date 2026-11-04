import Image from "next/image";
import { NovaButtonLink, ButtonArrow } from "@/components/ui/nova-button";
import { MonoLabel } from "@/components/ui/mono-label";

/** What we build — capabilities, not a closed product list. */
const CHIPS = [
  "Web apps",
  "Mobile apps",
  "AI & automation",
  "CRM & ERP",
  "APIs & integrations",
  "Anything custom",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-4 sm:pt-32">
      <div className="container-column text-center">
        <MonoLabel className="mx-auto mb-6 block max-w-full text-center text-ink">
          <span
            aria-hidden
            className="mr-2 inline-block size-1.5 rounded-full bg-brand align-middle"
          />
          IT & software company · Udumalpet, Tamil Nadu
        </MonoLabel>

        <h1 className="text-[clamp(2.75rem,8vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.04em] text-balance">
          Custom software & AI built around your business
        </h1>

        <p className="mx-auto mt-6 max-w-[38ch] text-lead text-ink-60 text-balance">
          MLForge Studio is a developer-led software company in Udumalpet. We build web and mobile apps, CRM, AI and automation — whatever your business needs.
        </p>

        <NovaButtonLink href="/support#contact" className="mt-8">
          Book a discovery call
          <ButtonArrow />
        </NovaButtonLink>

        <ul className="mx-auto mt-10 flex max-w-[640px] flex-wrap justify-center gap-2">
          {CHIPS.map((label) => (
            <li
              key={label}
              className="rounded-pill border border-ink-08 bg-white px-3.5 py-1.5 text-small text-ink-60"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Brand art: the three 3D forms floating over a soft brand glow. Purely
          decorative, so it is aria-hidden and the motion is transform-only. */}
      <div
        aria-hidden="true"
        className="relative mx-auto mt-6 h-[300px] w-full max-w-[1100px] sm:mt-10 sm:h-[420px]"
      >
        <div className="absolute inset-x-[8%] inset-y-[6%] bg-[radial-gradient(closest-side,var(--color-brand-soft),transparent)] opacity-90" />

        <div className="nova-float absolute top-[22%] left-[6%] w-[120px] sm:left-[10%] sm:w-[220px]">
          <Image
            src="/images/blob-cross.png"
            alt=""
            width={420}
            height={420}
            sizes="(max-width: 640px) 120px, 220px"
            className="pointer-events-none w-full select-none"
          />
        </div>

        <div
          className="nova-float-alt absolute top-[2%] left-1/2 w-[190px] -translate-x-1/2 sm:w-[340px]"
          style={{ animationDelay: "-2s" }}
        >
          <Image
            src="/images/blob-torus.png"
            alt=""
            width={440}
            height={440}
            priority
            sizes="(max-width: 640px) 190px, 340px"
            className="pointer-events-none w-full select-none"
          />
        </div>

        <div
          className="nova-float absolute top-[30%] right-[6%] w-[115px] sm:right-[10%] sm:w-[210px]"
          style={{ animationDelay: "-4s" }}
        >
          <Image
            src="/images/blob-wave.png"
            alt=""
            width={420}
            height={420}
            sizes="(max-width: 640px) 115px, 210px"
            className="pointer-events-none w-full select-none"
          />
        </div>
      </div>
    </section>
  );
}
