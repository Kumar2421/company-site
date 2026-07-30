import Image from "next/image";
import { Reveal } from "@/components/reveal";

/**
 * PLACEHOLDER LOGOS — these are the invented brands from the original template,
 * not real companies. Showing them under a "clients and partners" heading reads as
 * social proof you do not have yet, so either swap them for cleared client logos
 * or relabel this strip as your technology stack before launch.
 */
const LOGOS = [
  { name: "Aero", src: "/images/logo-aero.png" },
  { name: "Helix", src: "/images/logo-helix.png" },
  { name: "Lith", src: "/images/logo-lith.png" },
  { name: "Solvex", src: "/images/logo-solvex.png" },
  { name: "Verdant", src: "/images/logo-verdant.png" },
];

export function LogoMarquee() {
  return (
    <Reveal
      as="section"
      direction="none"
      aria-label="Clients and partners"
      className="nova-marquee overflow-hidden py-14"
    >
      <div className="nova-marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {LOGOS.map((logo) => (
              <li key={`${copy}-${logo.name}`} className="px-10">
                <Image
                  src={logo.src}
                  alt={copy === 0 ? `${logo.name} logo` : ""}
                  width={124}
                  height={64}
                  className="h-14 w-auto opacity-40 grayscale"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Reveal>
  );
}
