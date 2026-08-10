export const SERVICES_NAV = [
  {
    label: "AI Platform",
    href: "https://mlforge.in",
    description: "Unified training and deployment for AI models",
  },
  {
    label: "CRM",
    href: "https://crm.mlforge.in",
    description: "Open-source CRM, tailored to your pipeline",
  },
  {
    label: "Social Automation",
    href: "https://social.mlforge.in",
    description: "Schedule and publish across every channel",
  },
  {
    label: "Lottery Agency CRM",
    href: "https://lottery.mlforge.in",
    description: "Built for Lottery Agents and Retailers",
  },
  {
    label: "Lead Management",
    href: "https://lead.mlforge.in",
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
