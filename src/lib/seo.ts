/**
 * Towns around the Pukkulam / Udumalpet office that we serve. We have ONE
 * office (Pukkulam). These are service areas, not branch offices — never
 * describe them as offices or addresses.
 *
 * `variants` are real alternate spellings people type into search.
 */
export const SERVICE_AREAS: readonly {
  name: string;
  variants: readonly string[];
}[] = [
  { name: "Udumalpet", variants: ["Udumalaipettai"] },
  { name: "Pukkulam", variants: [] },
  { name: "Palani", variants: ["Pazhani"] },
  { name: "Pollachi", variants: [] },
  { name: "Tiruppur", variants: ["Tirupur", "Thirupur"] },
  { name: "Coimbatore", variants: ["Kovai"] },
  { name: "Dharapuram", variants: [] },
  { name: "Madathukulam", variants: [] },
  { name: "Gudimangalam", variants: [] },
  { name: "Kangeyam", variants: [] },
];

/** Every spelling of every area, for areaServed schema. */
export const AREA_NAMES: readonly string[] = SERVICE_AREAS.flatMap((a) => [
  a.name,
  ...a.variants,
]);

/** "IT company in X", "software company in X", … for every area spelling. */
export const AREA_KEYWORDS: readonly string[] = AREA_NAMES.flatMap((name) => [
  `IT company in ${name}`,
  `software company in ${name}`,
  `website development ${name}`,
  `app development ${name}`,
]);

/** Capability phrases, independent of town. */
export const SERVICE_KEYWORDS: readonly string[] = [
  "custom software development",
  "web application development",
  "mobile app development",
  "website development company",
  "ERP software development",
  "billing and inventory software",
  "e-commerce website development",
  "CRM software development",
  "AI automation company",
  "software development company India",
];
