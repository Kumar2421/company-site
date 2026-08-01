import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NovaLogo({
  className,
  monochrome = false,
}: {
  className?: string;
  /** White-on-dark mark, used over imagery where the brand blue reads muddy. */
  monochrome?: boolean;
}) {
  if (monochrome) {
    // Solid white silhouette with the counter-circle punched out, so whatever
    // sits behind the mark shows through the notch.
    return (
      <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
        <mask id="nova-mark-cut">
          <rect width="28" height="28" fill="black" />
          <circle cx="14" cy="14" r="13" fill="white" />
          <circle cx="18.5" cy="9.5" r="7.5" fill="white" />
          <circle cx="18.5" cy="9.5" r="3.4" fill="black" />
        </mask>
        <rect width="28" height="28" fill="#ffffff" mask="url(#nova-mark-cut)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      {/* Two overlapping discs: solid brand circle with a lighter counter-circle. */}
      <circle cx="14" cy="14" r="13" fill="#1B2BB8" />
      <circle cx="18.5" cy="9.5" r="7.5" fill="#ffffff" fillOpacity="0.92" />
      <circle cx="18.5" cy="9.5" r="3.4" fill="#1B2BB8" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <rect x="5.5" y="2" width="9" height="16" rx="2.5" />
      <path d="M8.75 4.6h2.5" />
    </svg>
  );
}

export function Workflow(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <rect x="2.5" y="3" width="5.5" height="4.5" rx="1.2" />
      <rect x="12" y="12.5" width="5.5" height="4.5" rx="1.2" />
      <path d="M5.25 7.5v4.25a2 2 0 0 0 2 2h4.75" />
    </svg>
  );
}

export function HelpCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M7.9 7.7a2.1 2.1 0 1 1 3 1.9c-.6.3-.9.8-.9 1.4v.3" />
      <path d="M10 14.3h.01" />
    </svg>
  );
}

export function InfoCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M10 9.2v4.4" />
      <path d="M10 6.4h.01" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function Grid(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="11" y="3" width="6" height="6" rx="1.5" />
      <rect x="3" y="11" width="6" height="6" rx="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1.5" />
    </svg>
  );
}

export function BarChart(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M4 16V9M10 16V4M16 16v-4" />
    </svg>
  );
}

export function Bell(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M5.5 8a4.5 4.5 0 1 1 9 0c0 3 1 4.5 1.5 5H4c.5-.5 1.5-2 1.5-5Z" />
      <path d="M8.5 16a1.6 1.6 0 0 0 3 0" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M11 2.5 12.4 6 16 7.4 12.4 8.8 11 12.4 9.6 8.8 6 7.4 9.6 6 11 2.5Z" />
      <path d="M5 12.5 5.7 14.3 7.5 15 5.7 15.7 5 17.5 4.3 15.7 2.5 15 4.3 14.3 5 12.5Z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M5 10.5 8.5 14 15 6.5" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M6 6l8 8M14 6l-8 8" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M10 4v12M4 10h12" />
    </svg>
  );
}

export function Search(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.5 13.5 17 17" />
    </svg>
  );
}

export function Send(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M17 3 9 11M17 3l-5.5 14-2.5-6L3 8.5 17 3Z" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="m10 3 2.2 4.5 5 .7-3.6 3.5.9 4.9L10 14.3l-4.5 2.3.9-4.9L2.8 8.2l5-.7L10 3Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function TrendUp(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M4 13.5 8.5 9l3 3L16 7" />
      <path d="M12.5 7H16v3.5" />
    </svg>
  );
}

export function ChevronsUp(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="m5 11 5-4 5 4M5 15l5-4 5 4" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="m5 8 5 5 5-5" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M10 16.5s-6-3.7-6-8.1A3.4 3.4 0 0 1 10 6a3.4 3.4 0 0 1 6 2.4c0 4.4-6 8.1-6 8.1Z" />
    </svg>
  );
}

export function Comment(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M3 10a6.5 6.5 0 1 1 3.2 5.6L3 16.5l1-3.2A6.4 6.4 0 0 1 3 10Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M10 17.5S15.5 12 15.5 8a5.5 5.5 0 1 0-11 0c0 4 5.5 9.5 5.5 9.5Z" />
      <circle cx="10" cy="8" r="1.8" />
    </svg>
  );
}

export function Plane(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M17 3 9.5 10.5M17 3l-4.5 14-2-6-6-2L17 3Z" />
    </svg>
  );
}

export function Bike(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <circle cx="5" cy="13.5" r="3" />
      <circle cx="15" cy="13.5" r="3" />
      <path d="M5 13.5 9 7h3l3 6.5M9 7l-1-2H6" />
    </svg>
  );
}

export function Home(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" {...base} {...props}>
      <path d="M3.5 9 10 3.5 16.5 9v7a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V9Z" />
    </svg>
  );
}
