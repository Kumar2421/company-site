import { PhoneMockup } from "@/components/app-ui";
import {
  ChatScreen,
  DispatchScreen,
  FeedScreen,
  MapsScreen,
} from "@/components/mobile-showcase-ui";
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
        </Reveal>
      </div>

      <div className="container-bleed mt-16">
        <Reveal
          direction="none"
          delay={100}
          className="nova-dotfield flex items-end justify-center overflow-hidden rounded-panel bg-[#ececec] px-4 pt-14 pb-0 sm:px-10"
        >
          <PhoneMockup className="w-[190px] shrink-0 translate-y-6 rotate-[-8deg] sm:w-[220px]">
            <ChatScreen />
          </PhoneMockup>
          <PhoneMockup className="z-10 -ml-10 w-[240px] shrink-0 rotate-[-2deg] sm:-ml-14 sm:w-[280px]">
            <FeedScreen />
          </PhoneMockup>
          <PhoneMockup className="z-10 -ml-10 w-[240px] shrink-0 rotate-[2deg] sm:-ml-14 sm:w-[280px]">
            <DispatchScreen />
          </PhoneMockup>
          <PhoneMockup className="-ml-10 w-[190px] shrink-0 translate-y-6 rotate-[8deg] sm:-ml-14 sm:w-[220px]">
            <MapsScreen />
          </PhoneMockup>
        </Reveal>
      </div>
    </section>
  );
}
