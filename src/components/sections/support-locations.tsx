import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { MonoLabel } from "@/components/ui/mono-label";

/**
 * PLACEHOLDER ADDRESSES — replace with your real registered entities, or delete
 * this section from /support entirely. A wrong legal entity or address on a public
 * page is a contracting problem, not a copy problem.
 *
 * Swap the photos for your actual cities too; the current images are the
 * placeholders carried over from the layout.
 */
const PRIMARY_LOCATION = {
  city: "[Primary city]",
  address: [
    "[Registered entity name]",
    "[Street address]",
    "[City and postcode]",
  ],
  image: "/images/office-singapore.jpg",
};

/** Second row is image-only — no address card, just the two photos. */
const GALLERY_IMAGES = ["/images/office-amsterdam.jpg", "/images/misc-1.png"];

export function SupportLocations() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-column">
        <Reveal>
          <MonoLabel className="flex items-center gap-2 text-ink">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            Locations
          </MonoLabel>
        </Reveal>

        <ul className="mt-8 grid gap-4">
          <Reveal as="li" className="grid gap-4 md:grid-cols-2">
            <Image
              src={PRIMARY_LOCATION.image}
              alt=""
              width={900}
              height={680}
              sizes="(max-width: 768px) 100vw, 424px"
              className="aspect-[424/320] w-full rounded-card object-cover"
            />

            <div className="flex min-h-[320px] flex-col rounded-card bg-white p-8 shadow-card">
              <h2 className="text-lead font-medium">{PRIMARY_LOCATION.city}</h2>

              <address className="mt-auto pt-12 text-body text-ink-60 not-italic">
                {PRIMARY_LOCATION.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </Reveal>

          <Reveal as="li" delay={50} className="grid gap-4 md:grid-cols-2">
            {GALLERY_IMAGES.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={900}
                height={680}
                sizes="(max-width: 768px) 100vw, 424px"
                className="aspect-[424/320] w-full rounded-card object-cover"
              />
            ))}
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
