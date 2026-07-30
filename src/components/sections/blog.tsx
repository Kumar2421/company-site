import Image from "next/image";
import { Star } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

const CATEGORY_STYLES: Record<string, string> = {
  Playbooks: "bg-[#FBDCC8] text-[#7C340B]",
  Company: "bg-brand-soft text-brand",
  "Case studies": "bg-[#F9D6EA] text-[#991F6E]",
  Engineering: "bg-[#CFEEDF] text-[#0C6946]",
};

const POSTS = [
  {
    title: "What a two-week discovery sprint actually produces",
    author: "MLForge",
    date: "Jul 2, 2026",
    category: "Playbooks",
  },
  {
    title: "Why your AI pilot cleared the demo and failed the review",
    author: "MLForge",
    date: "Jun 11, 2026",
    category: "Engineering",
  },
  {
    title: "Writing evaluation suites before you write the feature",
    author: "MLForge",
    date: "May 6, 2026",
    category: "Engineering",
  },
];

export function Blog() {
  return (
    <section id="resources" className="py-20 sm:py-28">
      <div className="container-column">
        <Reveal as="h2" className="text-h2">
          Notes from the build
        </Reveal>

        {/* Featured */}
        <Reveal delay={50} className="mt-10">
          <a
            href="#post-featured"
            className="grid overflow-hidden rounded-card bg-surface shadow-card transition-shadow duration-150 hover:shadow-float md:grid-cols-2"
          >
          <Image
            src="/images/blog-featured.jpg"
            alt="Three people looking at a laptop together at an outdoor cafe table"
            width={872}
            height={848}
            sizes="(max-width: 768px) 100vw, 436px"
            className="h-full w-full object-cover"
          />

          <div className="flex flex-col p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-ink-08 px-3 py-1.5 font-mono text-mono-xs tracking-[0.06em] text-ink-60 uppercase">
              <Star className="size-3.5" />
              Featured
            </span>

            <h3 className="mt-6 text-h3 text-balance">
              The integration work nobody scopes for
            </h3>
            <p className="mt-3 text-lead text-ink-60">
              Where enterprise AI budgets actually go.
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-12">
              <span className="flex items-center gap-3">
                <Image
                  src="/images/author-clara.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <span className="font-mono text-mono-xs tracking-[0.06em] uppercase">
                  <span className="block text-ink">MLForge</span>
                  <span className="block text-ink-56">Jul 24, 2026</span>
                </span>
              </span>

              <Badge category="Case studies" />
            </div>
          </div>
          </a>
        </Reveal>

        {/* Rows */}
        <ul className="mt-10">
          {POSTS.map((post, i) => (
            <Reveal
              as="li"
              key={post.title}
              delay={i * 50}
              className="border-t border-ink-08 last:border-b"
            >
              <a
                href="#post"
                className="flex flex-wrap items-center justify-between gap-4 px-2 py-6 transition-colors duration-150 hover:bg-ink-08/50"
              >
                <span className="text-lead">{post.title}</span>

                <span className="flex items-center gap-6">
                  <span className="font-mono text-mono-xs tracking-[0.06em] text-ink-56 uppercase">
                    {post.author} &nbsp; {post.date}
                  </span>
                  <Badge category={post.category} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Badge({ category }: { category: string }) {
  return (
    <span
      className={cn(
        "rounded-pill px-3 py-1.5 font-mono text-mono-xs tracking-[0.06em] uppercase",
        CATEGORY_STYLES[category],
      )}
    >
      {category}
    </span>
  );
}
