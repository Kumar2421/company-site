import { Reveal } from "@/components/reveal";
import { HelpCircle, InfoCircle } from "@/components/icons";
import { ButtonArrow } from "@/components/ui/nova-button";

const CHANNELS = [
  {
    icon: HelpCircle,
    title: "New project",
    body: "Scope a discovery sprint or ask how we'd approach your problem.",
    cta: "Book a discovery call",
  },
  {
    icon: InfoCircle,
    title: "Existing client",
    body: "Reach your delivery lead, raise an incident, or change scope.",
    cta: "Contact your team",
  },
];

export function SupportHero() {
  return (
    <section className="pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
      <div className="container-column">
        <h1 className="text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.04em]">
          Support
        </h1>
        <p className="mt-5 text-lead text-ink-60">
          Talk to the people who would do the work.
        </p>

        <ul className="mt-14 grid gap-4 text-left md:grid-cols-2">
          {CHANNELS.map((channel, i) => (
            <Reveal
              as="li"
              key={channel.title}
              delay={i * 50}
              className="flex min-h-[300px] flex-col rounded-card bg-white p-8 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-[0.75rem] bg-brand/12 text-brand">
                <channel.icon className="size-5" />
              </span>

              <h2 className="mt-8 text-lead font-medium">{channel.title}</h2>
              <p className="text-lead text-ink-60">{channel.body}</p>

              <a
                href="/support#contact"
                className="group mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-10 text-body font-medium"
              >
                {channel.cta}
                <ButtonArrow />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
