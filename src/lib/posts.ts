export type Category = "Case studies" | "Engineering" | "Playbooks" | "Company";

export type Post = {
  title: string;
  author: string;
  date: string;
  category: Category;
  image?: string;
  alt?: string;
};

/**
 * Article titles are editorial topics, not claims about specific clients.
 * Before publishing anything under "Case studies", make sure a real engagement
 * and a cleared client sit behind it — that category implies evidence.
 *
 * Alt text describes the photograph, not the headline, which is what a screen
 * reader user needs. The images themselves are placeholders inherited from the
 * layout; swap them as real article artwork arrives.
 */

/** Editorial pick shown as the wide card at the top of the index. */
export const FEATURED: Post = {
  title: "The integration work nobody scopes for",
  author: "MLForge",
  date: "Jul 24, 2026",
  category: "Playbooks",
  image: "/images/blog-featured.jpg",
  alt: "Three people looking at a laptop together at an outdoor cafe table",
};

/** The six-card grid under the featured card. */
export const GRID_POSTS: Post[] = [
  {
    title: "Why your AI pilot cleared the demo and failed the review",
    author: "MLForge",
    date: "Jul 18",
    category: "Engineering",
    image: "/images/post-reset.jpg",
    alt: "A hand tapping a bank card on a contactless payment terminal",
  },
  {
    title: "Writing evaluation suites before you write the feature",
    author: "MLForge",
    date: "Jul 9",
    category: "Engineering",
    image: "/images/post-big-purchases.jpg",
    alt: "A team watching a presentation around a boardroom table with laptops",
  },
  {
    title: "What a two-week discovery sprint actually produces",
    author: "MLForge",
    date: "Jun 27",
    category: "Playbooks",
    image: "/images/post-self-care.jpg",
    alt: "A coffee cup, juice glass and card reader on a dark table",
  },
  {
    title: "Retrieval quality is a data problem, not a model problem",
    author: "MLForge",
    date: "Jun 14",
    category: "Engineering",
    image: "/images/post-travel.jpg",
    alt: "A compass resting on a printed page of financial figures",
  },
  {
    title: "How we structure an embedded pod inside an existing team",
    author: "MLForge",
    date: "Jun 2",
    category: "Playbooks",
    image: "/images/post-irregular-income.jpg",
    alt: "Hands holding a green bank card over a card reader beside festive decorations",
  },
  {
    title: "Budgeting for inference: the cost line nobody forecasts",
    author: "MLForge",
    date: "May 21",
    category: "Engineering",
    image: "/images/post-saving-goals.jpg",
    alt: "A person sliding a leather wallet into a coat pocket",
  },
];

/** The text-only "Others" list at the bottom, revealed in pages of six. */
export const OTHER_POSTS: Post[] = [
  {
    title: "Choosing between fine-tuning and retrieval",
    author: "MLForge",
    date: "May 12, 2026",
    category: "Engineering",
  },
  {
    title: "The questions we ask in the first scoping call",
    author: "MLForge",
    date: "May 4, 2026",
    category: "Playbooks",
  },
  {
    title: "Shipping AI features under an existing security review",
    author: "MLForge",
    date: "Apr 22, 2026",
    category: "Engineering",
  },
  {
    title: "What good handover documentation contains",
    author: "MLForge",
    date: "Apr 9, 2026",
    category: "Playbooks",
  },
  {
    title: "Latency budgets: designing backwards from the user",
    author: "MLForge",
    date: "Mar 30, 2026",
    category: "Engineering",
  },
  {
    title: "Why we charge for discovery",
    author: "MLForge",
    date: "Mar 18, 2026",
    category: "Company",
  },
  {
    title: "Guardrails that survive contact with real users",
    author: "MLForge",
    date: "Mar 6, 2026",
    category: "Engineering",
  },
  {
    title: "Migrating a legacy service without a rewrite",
    author: "MLForge",
    date: "Feb 24, 2026",
    category: "Engineering",
  },
  {
    title: "How to review an AI vendor's technical claims",
    author: "MLForge",
    date: "Feb 11, 2026",
    category: "Playbooks",
  },
  {
    title: "Observability for systems that fail quietly",
    author: "MLForge",
    date: "Jan 29, 2026",
    category: "Engineering",
  },
  {
    title: "Data residency and what it rules out",
    author: "MLForge",
    date: "Jan 16, 2026",
    category: "Engineering",
  },
  {
    title: "Staffing a pod: who you actually need in the room",
    author: "MLForge",
    date: "Jan 6, 2026",
    category: "Playbooks",
  },
  {
    title: "When not to use a language model",
    author: "MLForge",
    date: "Dec 12, 2025",
    category: "Engineering",
  },
  {
    title: "Estimating AI work when the unknowns are the work",
    author: "MLForge",
    date: "Nov 28, 2025",
    category: "Playbooks",
  },
  {
    title: "Prompt changes are code changes",
    author: "MLForge",
    date: "Nov 14, 2025",
    category: "Engineering",
  },
  {
    title: "Building an internal tool your team will actually open",
    author: "MLForge",
    date: "Oct 30, 2025",
    category: "Engineering",
  },
  {
    title: "How we run code review across two organisations",
    author: "MLForge",
    date: "Oct 17, 2025",
    category: "Playbooks",
  },
  {
    title: "The case for a boring data platform",
    author: "MLForge",
    date: "Oct 2, 2025",
    category: "Engineering",
  },
  {
    title: "What we look for when we hire engineers",
    author: "MLForge",
    date: "Sep 19, 2025",
    category: "Company",
  },
  {
    title: "Versioning models the way you version APIs",
    author: "MLForge",
    date: "Sep 4, 2025",
    category: "Engineering",
  },
  {
    title: "Designing an approval flow people trust",
    author: "MLForge",
    date: "Aug 21, 2025",
    category: "Engineering",
  },
  {
    title: "Reading an evaluation report without fooling yourself",
    author: "MLForge",
    date: "Aug 7, 2025",
    category: "Playbooks",
  },
  {
    title: "Automating a process that changes every quarter",
    author: "MLForge",
    date: "Jul 24, 2025",
    category: "Engineering",
  },
  {
    title: "Our position on model providers",
    author: "MLForge",
    date: "Jul 10, 2025",
    category: "Company",
  },
  {
    title: "Offline-first mobile for field teams",
    author: "MLForge",
    date: "Jun 26, 2025",
    category: "Engineering",
  },
  {
    title: "The first thirty days of an engagement",
    author: "MLForge",
    date: "Jun 12, 2025",
    category: "Playbooks",
  },
];

export const CATEGORIES = [
  "All",
  "Case studies",
  "Engineering",
  "Playbooks",
  "Company",
] as const;

/** Category pill colours, carried over from the existing palette. */
export const CATEGORY_STYLES: Record<Category, string> = {
  Playbooks: "bg-[#f8ddc8] text-[#8a4a1e]",
  Company: "bg-[#dcdcf8] text-[#33339c]",
  Engineering: "bg-[#cfe9dc] text-[#1f6045]",
  "Case studies": "bg-[#f2dbe6] text-[#8d3560]",
};
