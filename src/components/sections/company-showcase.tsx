import Image from "next/image";
import { NovaLogo } from "@/components/icons";
import { Reveal } from "@/components/reveal";

/**
 * Full-bleed liquid-chrome video with a phone frame floating over it. The frame
 * PNG has a transparent screen, so the video plays through it.
 */
export function CompanyShowcase() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-[4vw] lg:px-[60px]">
        <Reveal direction="none" className="relative overflow-hidden rounded-panel">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/company-cta-poster.png"
            aria-hidden="true"
            className="aspect-[1320/620] w-full object-cover"
          >
            <source src="/videos/company-cta.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 grid place-items-center">
            <div className="relative aspect-[223/453] w-[110px] sm:w-[160px] lg:w-[223px]">
              <Image
                src="/images/phone-frame-overlay.png"
                alt=""
                width={358}
                height={732}
                aria-hidden="true"
                className="size-full"
              />

              <span className="absolute inset-0 flex items-center justify-center gap-2 text-white">
                <NovaLogo className="size-4 sm:size-6" monochrome />
                <span className="text-lead font-medium tracking-[-0.03em] sm:text-h4">
                  MLForge
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
