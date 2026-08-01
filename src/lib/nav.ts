export const SERVICES_NAV = [
  {
    label: "AI Platform",
    href: "#services",
    description: "Unified training and deployment for AI models",
  },
  {
    label: "CRM",
    href: "#services",
    description: "Open-source CRM, tailored to your pipeline",
  },
  {
    label: "Social Automation",
    href: "#services",
    description: "Schedule and publish across every channel",
  },
  {
    label: "Custom Software",
    href: "#services",
    description: "App, web and custom software development",
  },
] as const;

export const NAV = [
  { label: "Services", href: "#services", children: SERVICES_NAV },
  { label: "Company", href: "/company" },
  { label: "Support", href: "/support" },
  { label: "Resources", href: "/category/all" },
] as const;

/** Primary conversion target — a sales conversation, not a download. */
export const CONTACT_HREF = "/support#contact";
