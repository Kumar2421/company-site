import { OfficeMap } from "@/components/office-map";
import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";

export function Statement() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-column text-center">
        <Reveal>
          <MonoLabel className="mx-auto flex w-fit items-center gap-2 text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            What we build
          </MonoLabel>

          <h2 className="mx-auto mt-6 max-w-[26ch] text-h2 text-balance">
            Messaging, social, dispatch, maps — one team ships whatever the
            product needs.
          </h2>

          <p className="mx-auto mt-5 max-w-[46ch] text-lead text-ink-60 text-balance">
            Built from Pukkulam, Udumalpet in Tamil Nadu, for teams across
            India.
          </p>
        </Reveal>
      </div>

      <div className="container-bleed mt-16">
        <Reveal direction="none" delay={100}>
          <OfficeMap />
        </Reveal>
      </div>
    </section>
  );
}
